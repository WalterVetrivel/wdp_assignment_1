(() => {
	// Variable declaration and definition
	const navItems = [
		{
			url: 'index.html',
			label: 'Home'
		},
		{
			url: 'machine-learning.html',
			label: 'Machine Learning'
		},
		{
			url: 'data-visualisation.html',
			label: 'Data Visualisation'
		},
		{
			url: 'world-map.html',
			label: 'World Map'
		},
		{
			url: 'contact-about.html',
			label: 'Contact Us'
		}
	];
	const navbarClasses = [
		'navbar',
		'navbar-expand-lg',
		'navbar-dark',
		'bg-primary'
	];
	const footerClasses = ['footer', 'p-5', 'bg-dark', 'text-light'];
	const socialIcons = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-youtube'];

	// To add navbar
	// Selecting the navbar
	const navbar = document.querySelector('nav');

	// Generating links
	const generateNavItems = navItems => {
		const location = window.location.href;

		// Generating links based on the navItems array
		return navItems.reduce(
			(navItemsHtml, navItem) =>
				`${navItemsHtml}<li class="nav-item${
					location.indexOf(navItem.url) !== -1 ? ' active' : ''
				}"><a href="${navItem.url}" class="nav-link">${navItem.label}</a></li>`,
			''
		);
	};

	// Generating the overall HTML of navbar
	const generateNavbarHtml = navItems => {
		const navbarHtml = `<a href="index.html" class="navbar-brand">Data Science</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navItems"
			aria-controls="navItems"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navItems">
			<ul class="navbar-nav ml-auto">
				${generateNavItems(navItems)}
			</ul>
		</div>`;

		return navbarHtml;
	};

	// Adding Bootstrap classes to navbar
	const addNavbarClasses = (navbar, navbarClasses) => {
		navbarClasses.forEach(navbarClass => navbar.classList.add(navbarClass));
	};

	addNavbarClasses(navbar, navbarClasses);
	navbar.innerHTML = generateNavbarHtml(navItems);

	// To add footer
	// Selecting the footer
	const footer = document.querySelector('footer');

	// To generate footer links
	// Generating links based on the navItems array
	const generateFooterLinks = navItems =>
		navItems.reduce(
			(navItemsHtml, navItem) =>
				`${navItemsHtml}<li><a href="${navItem.url}" class="footer-link">${navItem.label}</a></li>`,
			''
		);

	// To generate social links
	// Generating links based on socialIcons array
	const generateSocialLinks = socialIcons =>
		socialIcons.reduce(
			(
				socialLinksHtml,
				socialIcon
			) => `${socialLinksHtml}<a href="#" class="footer-link">
								<i class="${socialIcon}"></i>
							</a>`,
			''
		);

	// To generate footer HTML
	const generateFooterHtml = (navItems, socialIcons) => {
		return `<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h4 class="text-uppercase text-white-50 footer-subtitle">Site Map</h4>
						<ul class="footer-links list-unstyled">
							${generateFooterLinks(navItems)}
						</ul>
					</div>
					<div class="col-md-6">
						<h4 class="text-uppercase text-white-50 footer-subtitle">
							Follow us on social media
						</h4>
						<p>
							${generateSocialLinks(socialIcons)}
						</p>
					</div>
				</div>
				<hr class="border-top" />
				<div class="row">
					<div class="col-12 text-center">
						<p class="mb-0">
							Copyright &copy;
							<a
								href="https://walterselvakumar.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Walter Vetrivel Selvakumar
							</a>
							${new Date().getFullYear()}. All rights reserved.
						</p>
					</div>
				</div>
			</div>`;
	};

	// To add Bootstrap classes to footer
	const addFooterClasses = (footer, footerClasses) => {
		footerClasses.forEach(footerClass => footer.classList.add(footerClass));
	};

	addFooterClasses(footer, footerClasses);
	footer.innerHTML = generateFooterHtml(navItems, socialIcons);
})();
