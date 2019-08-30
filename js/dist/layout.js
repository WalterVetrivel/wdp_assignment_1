'use strict';

(function () {
	var navbar = document.querySelector('.navbar');

	var generateNavItems = function generateNavItems() {
		var location = window.location.href;
		var navItems = [{
			url: 'index.html',
			label: 'Home'
		}, {
			url: 'machine-learning.html',
			label: 'Machine Learning'
		}, {
			url: 'data-visualisation.html',
			label: 'Data Visualisation'
		}, {
			url: 'world-map.html',
			label: 'World Map'
		}, {
			url: 'contact-about.html',
			label: 'Contact Us'
		}];

		return navItems.reduce(function (navItemsHtml, navItem) {
			return navItemsHtml + '<li class="nav-item' + (location.includes(navItem.url) ? ' active' : '') + '"><a href="' + navItem.url + '" class="nav-link">' + navItem.label + '</a></li>';
		}, '');
	};

	var generateNavbarHtml = function generateNavbarHtml() {
		var navbarHtml = '<a href="index.html" class="navbar-brand">Data Science</a>\n\t\t<button\n\t\t\tclass="navbar-toggler"\n\t\t\ttype="button"\n\t\t\tdata-toggle="collapse"\n\t\t\tdata-target="#navItems"\n\t\t\taria-controls="navItems"\n\t\t\taria-expanded="false"\n\t\t\taria-label="Toggle navigation"\n\t\t>\n\t\t\t<span class="navbar-toggler-icon"></span>\n\t\t</button>\n\t\t<div class="collapse navbar-collapse" id="navItems">\n\t\t\t<ul class="navbar-nav ml-auto">\n\t\t\t\t' + generateNavItems() + '\n\t\t\t</ul>\n\t\t</div>';

		return navbarHtml;
	};

	var addNavbarClasses = function addNavbarClasses() {
		var navbarClasses = ['navbar-expand-lg', 'navbar-dark', 'bg-primary'];
		navbarClasses.forEach(function (navbarClass) {
			return navbar.classList.add(navbarClass);
		});
	};

	addNavbarClasses();
	navbar.innerHTML = generateNavbarHtml();
})();