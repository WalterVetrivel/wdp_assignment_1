(function () {
	// Variable declaration and definition
	var chartObj = {
		chart: null,
		title: '',
		type: 'line',
		data: null
	};
	var fileUpload = document.querySelector('.custom-file-input');
	var chartTypeSelect = document.querySelector('#chartType');
	var fileNameSpan = document.querySelector('.file-name');

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
		return Object.keys(row).slice(1, Object.keys(row).length);
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
			if (!isNaN(row[key])) dataset.data.push(row[key]);else dataset.label = row[key].toUpperCase();
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

	// To create a chart
	var createChart = function createChart(title, type, data) {
		var ctx = document.getElementById('chart').getContext('2d');
		return new Chart(ctx, {
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
	var drawChart = function drawChart(_ref) {
		var chart = _ref.chart,
		    title = _ref.title,
		    type = _ref.type,
		    data = _ref.data;

		if (chart) chart.destroy();
		chartObj.chart = createChart(title, type, data);
	};

	// To process the read excel file
	var onReaderLoaded = function onReaderLoaded(e) {
		try {
			var data = new Uint8Array(e.target.result);
			var workbook = XLSX.read(data, { type: 'array' });

			var sheetName = workbook.SheetNames[0];
			var sheet = workbook.Sheets[sheetName];
			var sheetData = XLSX.utils.sheet_to_json(sheet);

			var chartData = generateChartData(sheetData);

			chartObj.title = sheetName;
			chartObj.data = chartData;
			drawChart(chartObj);
		} catch (err) {
			alert('Invalid file. Please upload an excel file with .xlsx extension.');
		}
	};

	// To validate file extension
	var isFileValid = function isFileValid(file) {
		return file.name.indexOf('.xls') !== -1 ? true : false;
	};

	// To show selected file name
	var showFileName = function showFileName(fileName, container) {
		container.innerText = fileName;
	};

	// To read data from excel file
	var readExcel = function readExcel(e) {
		try {
			// Get the uploaded file
			var files = e.target.files;
			var file = files[0];

			// Check if file is valid
			if (isFileValid(file)) {
				// Display file name on DOM
				showFileName(file.name, fileNameSpan);

				// Read and process the uploaded file
				var reader = new FileReader();
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
	var changeChartType = function changeChartType(e) {
		chartObj.type = e.target.value;
		drawChart(chartObj);
	};

	fileUpload.addEventListener('change', readExcel);
	chartTypeSelect.addEventListener('change', changeChartType);
})();