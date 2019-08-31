// To initialize the Google map
const initMap = () => {
	const map = document.querySelector('.map');
	const mapProps = {
		center: new google.maps.LatLng(42, -100),
		zoom: 3
	};
	return new google.maps.Map(map, mapProps);
};

(() => {
	// To add info windows to markers
	const showInfoWindow = (headquarters, worldMap) => {
		const marker = new google.maps.Marker({
			position: headquarters.position,
			title: headquarters.company,
			map: worldMap
		});

		const infoWindow = new google.maps.InfoWindow({
			content: headquarters.infoText,
			maxWidth: 360
		});

		marker.addListener('click', function() {
			infoWindow.open(worldMap, marker);
		});
	};

	// To get info window HTML
	const getContentString = (company, description, imageUrl, link) => {
		const infoTemplate = `<div class="info-window">
			<h4 class="mb-2">${company} Headquarters</h4>
			<div class="info-content row">
				<div class="col-12 mb-3">
					<img class="img-fluid" src="${imageUrl}" alt="${company}" />
				</div>
				<div class="col-12">
					<p>${description}</p>
					<a class="btn btn-link" href="${link}" target="_blank" rel="noreferrer noopener">
						Website&nbsp;
						<i class="fas fa-arrow-right"></i>
					</a>
				</div>
			</div>
		</div>`;

		return infoTemplate;
	};

	// To add markers
	const showMarkers = worldMap => {
		const headquartersList = [
			{
				company: 'IBM',
				position: {lat: 41.126824, lng: -73.714188},
				infoText: getContentString(
					'IBM',
					'IBM is headquartered in Armonk, New York, a community 37 miles (60 km) north of Midtown Manhattan.',
					'img/ibm.jpg',
					'https://www.ibm.com/au-en/analytics/machine-learning'
				)
			},
			{
				company: 'Microsoft',
				position: {lat: 47.674006, lng: -122.127744},
				infoText: getContentString(
					'Microsoft',
					'Microsoft is headquartered in Redmond, Washington, United States.',
					'img/microsoft.jpg',
					'https://azure.microsoft.com/en-au/services/machine-learning-service/'
				)
			},
			{
				company: 'Google',
				position: {lat: 37.427055, lng: -122.083314},
				infoText: getContentString(
					'Google',
					'The Googleplex is the corporate headquarters complex of Google and its parent company Alphabet Inc. It is located at 1600 Amphitheatre Parkway in Mountain View, California, United States.',
					'img/google.jpg',
					'https://cloud.google.com/products/ai/'
				)
			},
			{
				company: 'Oracle',
				position: {lat: 37.485361, lng: -122.229506},
				infoText: getContentString(
					'Oracle',
					'Oracle has its headquarters in Redwood City, California, United States.',
					'img/oracle.jpg',
					'https://www.oracle.com/technetwork/database/options/oml/overview/index.html'
				)
			},
			{
				company: 'Amazon',
				position: {lat: 47.60658, lng: -122.320106},
				infoText: getContentString(
					'Amazon',
					"Amazon HQ2 is a planned new corporate headquarters in Crystal City, Arlington, Virginia, for online retailer and tech company Amazon. The location is intended to complement the company's existing headquarters in Seattle, Washington.",
					'img/amazon.jpg',
					'https://aws.amazon.com/machine-learning/'
				)
			},
			{
				company: 'SAS',
				position: {lat: 35.788036, lng: -78.780123},
				infoText: getContentString(
					'SAS',
					'SAS has about 5,200 employees at its headquarters in Cary, North Carolina, 1,600 employees elsewhere in the US and 6,900 in Europe, Asia, Canada or Latin America.',
					'img/sas.jpg',
					'https://www.sas.com/en_us/software/visual-data-mining-machine-learning.html'
				)
			}
		];

		headquartersList.forEach(headquarters => {
			showInfoWindow(headquarters, worldMap);
		});
	};

	// Execute once page is loaded, i.e., the Google Maps API script is loaded
	window.addEventListener('load', () => {
		const worldMap = initMap();
		showMarkers(worldMap);
	});
})();
