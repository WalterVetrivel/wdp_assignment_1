(() => {
	const fileUpload = document.querySelector('.custom-file-input');

	// To create a chart
	const createChart = (title, type, data) => {
		const ctx = document.getElementById('myChart').getContext('2d');
		new Chart(ctx, {
			type: type,
			data: data,
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				},
				title: {
					display: true,
					text: title.toUpperCase()
				}
			}
		});
	};

	// Random number generator for RGB colors
	const rand = () => Math.round(Math.random() * 200);

	// Random RGB color generator
	const generateRgbColor = () => `rgb(${rand()}, ${rand()}, ${rand()})`;

	// To generate X axis labels
	const generateLabels = row =>
		Object.keys(row).slice(0, Object.keys(row).length - 1);

	// To construct dataset from excel row
	const constructDataset = row => {
		// Initialise dataset
		const dataset = {
			borderColor: generateRgbColor(),
			borderWidth: 1,
			fill: false,
			lineTension: 0
		};

		// Initialise data
		dataset.data = [];

		// Populate data
		for (key in row) {
			if (!isNaN(row[key])) dataset.data.push(row[key]);
			else dataset.label = row[key];
		}

		return dataset;
	};

	// To generate chart data from excel sheet data
	const generateChartData = sheetData => {
		// Generate Labels
		const labels = generateLabels(sheetData[0]);

		// Generate Datasets
		const datasets = sheetData.map(constructDataset);

		// Create chart data
		const chartData = {labels, datasets};

		return chartData;
	};

	// To process the read excel file
	const onReaderLoaded = e => {
		const data = new Uint8Array(e.target.result);
		const workbook = XLSX.read(data, {type: 'array'});

		const sheetName = workbook.SheetNames[0];
		const sheet = workbook.Sheets[sheetName];
		const sheetData = XLSX.utils.sheet_to_json(sheet);

		const chartData = generateChartData(sheetData);

		createChart(sheetName, 'line', chartData);
	};

	// To read data from excel file
	const readExcel = e => {
		// Get the uploaded file
		const files = e.target.files;
		const file = files[0];

		// Read and process the uploaded file
		const reader = new FileReader();
		reader.onload = onReaderLoaded;
		reader.readAsArrayBuffer(file);
	};

	fileUpload.addEventListener('change', readExcel);
})();
