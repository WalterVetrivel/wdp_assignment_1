(function () {
	// To add navbar
	// Selecting the navbar
	var navbar = document.querySelector('nav');
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

	var socialIcons = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-youtube'];

	// Generating links
	var generateNavItems = function generateNavItems() {
		var location = window.location.href;

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

	// To generate footer links
	// Generating links based on the navItems array
	var generateFooterLinks = function generateFooterLinks() {
		return navItems.reduce(function (navItemsHtml, navItem) {
			return navItemsHtml + '<li><a href="' + navItem.url + '" class="footer-link">' + navItem.label + '</a></li>';
		}, '');
	};

	// To generate social links
	// Generating links based on socialIcons array
	var generateSocialLinks = function generateSocialLinks() {
		return socialIcons.reduce(function (socialLinksHtml, socialIcon) {
			return socialLinksHtml + '<a href="#" class="footer-link">\n\t\t\t\t\t\t\t\t<i class="' + socialIcon + '"></i>\n\t\t\t\t\t\t\t</a>';
		}, '');
	};

	// To generate footer HTML
	var generateFooterHtml = function generateFooterHtml() {
		return '<div class="container">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t<h4 class="text-uppercase text-white-50 footer-subtitle">Site Map</h4>\n\t\t\t\t\t\t<ul class="footer-links list-unstyled">\n\t\t\t\t\t\t\t' + generateFooterLinks() + '\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t<h4 class="text-uppercase text-white-50 footer-subtitle">\n\t\t\t\t\t\t\tFollow us on social media\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t' + generateSocialLinks() + '\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr class="border-top" />\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col-12 text-center">\n\t\t\t\t\t\t<p class="mb-0">\n\t\t\t\t\t\t\tCopyright &copy;\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\thref="https://walterselvakumar.com"\n\t\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t\t\trel="noopener noreferrer"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tWalter Vetrivel Selvakumar\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t' + new Date().getFullYear() + '. All rights reserved.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';
	};

	// To add Bootstrap classes to footer
	var addFooterClasses = function addFooterClasses(footer) {
		var footerClasses = ['footer', 'p-5', 'bg-dark', 'text-light'];
		footerClasses.forEach(function (footerClass) {
			return footer.classList.add(footerClass);
		});
	};

	addFooterClasses(footer);
	footer.innerHTML = generateFooterHtml();
})();