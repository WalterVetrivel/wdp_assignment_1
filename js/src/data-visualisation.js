(() => {
	// Variable declaration and definition
	const chartObj = {
		chart: null,
		title: '',
		type: 'line',
		data: null
	};
	const fileUpload = document.querySelector('.custom-file-input');
	const chartTypeSelect = document.querySelector('#chartType');
	const fileNameSpan = document.querySelector('.file-name');
	const ctx = document.getElementById('chart').getContext('2d');

	// Random number generator for RGB colors
	const rand = () => Math.round(Math.random() * 200);

	// Random RGB color generator
	const generateRgbColor = () => `rgb(${rand()}, ${rand()}, ${rand()})`;

	// To generate X axis labels
	const generateLabels = row =>
		Object.keys(row).slice(1, Object.keys(row).length);

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
			else dataset.label = row[key].toUpperCase();
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

	// To create a chart
	const createChart = (ctx, title, type, data) => {
		return new Chart(ctx, {
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
					text: title.toUpperCase(),
					fontColor: '#333'
				},
				legend: {
					display: true,
					labels: {
						fontColor: '#333'
					}
				},
				maintainAspectRatio: false
			}
		});
	};

	// To draw a new chart
	const drawChart = ({chart, title, type, data}, ctx) => {
		if (chart) chart.destroy();
		chartObj.chart = createChart(ctx, title, type, data);
	};

	// To process the read excel file
	const onReaderLoaded = e => {
		try {
			const data = new Uint8Array(e.target.result);
			const workbook = XLSX.read(data, {type: 'array'});

			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];
			const sheetData = XLSX.utils.sheet_to_json(sheet);

			const chartData = generateChartData(sheetData);

			chartObj.title = sheetName;
			chartObj.data = chartData;
			drawChart(chartObj, ctx);
		} catch (err) {
			alert('Invalid file. Please upload an excel file with .xlsx extension.');
		}
	};

	// To validate file extension
	const isFileValid = file => (file.name.indexOf('.xls') !== -1 ? true : false);

	// To show selected file name
	const showFileName = (fileName, container) => {
		container.innerText = fileName;
	};

	// To read data from excel file
	const readExcel = e => {
		try {
			// Get the uploaded file
			const files = e.target.files;
			const file = files[0];

			// Check if file is valid
			if (isFileValid(file)) {
				// Display file name on DOM
				showFileName(file.name, fileNameSpan);

				// Read and process the uploaded file
				const reader = new FileReader();
				reader.onload = onReaderLoaded;
				reader.readAsArrayBuffer(file);
			} else {
				throw new Error('Invalid file extension.');
			}
		} catch (err) {
			alert('Invalid file. Please upload an excel file with .xlsx extension.');
		}
	};

	// To change chart type
	const changeChartType = e => {
		chartObj.type = e.target.value;
		drawChart(chartObj, ctx);
	};

	fileUpload.addEventListener('change', readExcel);
	chartTypeSelect.addEventListener('change', changeChartType);
})();
