// To add navbar
// Selecting the navbar
var navbar = document.querySelector('nav');

// Generating links
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

	// Generating links based on the navItems array
	return navItems.reduce(function (navItemsHtml, navItem) {
		return navItemsHtml + '<li class="nav-item' + (location.indexOf(navItem.url) !== -1 ? ' active' : '') + '"><a href="' + navItem.url + '" class="nav-link">' + navItem.label + '</a></li>';
	}, '');
};

// Generating the overall HTML of navbar
var generateNavbarHtml = function generateNavbarHtml() {
	var navbarHtml = '<a href="index.html" class="navbar-brand">Data Science</a>\n\t\t<button\n\t\t\tclass="navbar-toggler"\n\t\t\ttype="button"\n\t\t\tdata-toggle="collapse"\n\t\t\tdata-target="#navItems"\n\t\t\taria-controls="navItems"\n\t\t\taria-expanded="false"\n\t\t\taria-label="Toggle navigation"\n\t\t>\n\t\t\t<span class="navbar-toggler-icon"></span>\n\t\t</button>\n\t\t<div class="collapse navbar-collapse" id="navItems">\n\t\t\t<ul class="navbar-nav ml-auto">\n\t\t\t\t' + generateNavItems() + '\n\t\t\t</ul>\n\t\t</div>';

	return navbarHtml;
};

// Adding Bootstrap classes to navbar
var addNavbarClasses = function addNavbarClasses(navbar) {
	var navbarClasses = ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-primary'];
	navbarClasses.forEach(function (navbarClass) {
		return navbar.classList.add(navbarClass);
	});
};

addNavbarClasses(navbar);
navbar.innerHTML = generateNavbarHtml();

// To add footer
// Selecting the footer
var footer = document.querySelector('footer');

// To generate footer HTML
var generateFooterHtml = function generateFooterHtml() {
	return '<div class="row align-items-center">\n\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t<a class="footer-link d-inline-block mb-2" href="contact-about.html"\n\t\t\t\t\t\t>Contact Us</a\n\t\t\t\t\t>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a href="#" class="footer-link">\n\t\t\t\t\t\t\t<i class="fab fa-facebook-f"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href="#" class="footer-link">\n\t\t\t\t\t\t\t<i class="fab fa-twitter"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href="#" class="footer-link">\n\t\t\t\t\t\t\t<i class="fab fa-youtube"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t<p class="footer-copyright">\n\t\t\t\t\t\tCopyright &copy;\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\thref="https://walterselvakumar.com/"\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t\trel="noreferrer noopener"\n\t\t\t\t\t\t\tclass="footer-link"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tWalter Vetrivel Selvakumar\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t' + new Date().getFullYear() + '. All rights reserved.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>';
};

// To add Bootstrap classes to footer
var addFooterClasses = function addFooterClasses(footer) {
	var footerClasses = ['footer', 'container-fluid', 'p-5', 'bg-dark', 'text-light'];
	footerClasses.forEach(function (footerClass) {
		return footer.classList.add(footerClass);
	});
};

addFooterClasses(footer);
footer.innerHTML = generateFooterHtml();