(function () {
	var fileUpload = document.querySelector('.custom-file-input');

	// To create a chart
	var createChart = function createChart(title, type, data) {
		var ctx = document.getElementById('myChart').getContext('2d');
		new Chart(ctx, {
			type: type,
			data: data,
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				title: {
					display: true,
					text: title.toUpperCase()
				}
			}
		});
	};

	// Random number generator for RGB colors
	var rand = function rand() {
		return Math.round(Math.random() * 200);
	};

	// Random RGB color generator
	var generateRgbColor = function generateRgbColor() {
		return 'rgb(' + rand() + ', ' + rand() + ', ' + rand() + ')';
	};

	// To generate X axis labels
	var generateLabels = function generateLabels(row) {
		return Object.keys(row).slice(0, Object.keys(row).length - 1);
	};

	// To construct dataset from excel row
	var constructDataset = function constructDataset(row) {
		// Initialise dataset
		var dataset = {
			borderColor: generateRgbColor(),
			borderWidth: 1,
			fill: false,
			lineTension: 0
		};

		// Initialise data
		dataset.data = [];

		// Populate data
		for (key in row) {
			if (!isNaN(row[key])) dataset.data.push(row[key]);else dataset.label = row[key];
		}

		return dataset;
	};

	// To generate chart data from excel sheet data
	var generateChartData = function generateChartData(sheetData) {
		// Generate Labels
		var labels = generateLabels(sheetData[0]);

		// Generate Datasets
		var datasets = sheetData.map(constructDataset);

		// Create chart data
		var chartData = { labels: labels, datasets: datasets };

		return chartData;
	};

	// To process the read excel file
	var onReaderLoaded = function onReaderLoaded(e) {
		var data = new Uint8Array(e.target.result);
		var workbook = XLSX.read(data, { type: 'array' });

		var sheetName = workbook.SheetNames[0];
		var sheet = workbook.Sheets[sheetName];
		var sheetData = XLSX.utils.sheet_to_json(sheet);

		var chartData = generateChartData(sheetData);

		createChart(sheetName, 'line', chartData);
	};

	// To read data from excel file
	var readExcel = function readExcel(e) {
		// Get the uploaded file
		var files = e.target.files;
		var file = files[0];

		// Read and process the uploaded file
		var reader = new FileReader();
		reader.onload = onReaderLoaded;
		reader.readAsArrayBuffer(file);
	};

	fileUpload.addEventListener('change', readExcel);
})();