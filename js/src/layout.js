// To add navbar
// Selecting the navbar
const navbar = document.querySelector('nav');

// Generating links
const generateNavItems = () => {
	const location = window.location.href;
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
const generateNavbarHtml = () => {
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
				${generateNavItems()}
			</ul>
		</div>`;

	return navbarHtml;
};

// Adding Bootstrap classes to navbar
const addNavbarClasses = navbar => {
	const navbarClasses = [
		'navbar',
		'navbar-expand-lg',
		'navbar-dark',
		'bg-primary'
	];
	navbarClasses.forEach(navbarClass => navbar.classList.add(navbarClass));
};

addNavbarClasses(navbar);
navbar.innerHTML = generateNavbarHtml();

// To add footer
// Selecting the footer
const footer = document.querySelector('footer');

// To generate footer HTML
const generateFooterHtml = () => {
	return `<div class="row align-items-center">
				<div class="col-md-6">
					<a class="footer-link d-inline-block mb-2" href="contact-about.html"
						>Contact Us</a
					>
					<p>
						<a href="#" class="footer-link">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="#" class="footer-link">
							<i class="fab fa-twitter"></i>
						</a>
						<a href="#" class="footer-link">
							<i class="fab fa-youtube"></i>
						</a>
					</p>
				</div>
				<div class="col-md-6">
					<p class="footer-copyright">
						Copyright &copy;
						<a
							href="https://walterselvakumar.com/"
							target="_blank"
							rel="noreferrer noopener"
							class="footer-link"
						>
							Walter Vetrivel Selvakumar
						</a>
						${new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
			</div>`;
};

// To add Bootstrap classes to footer
const addFooterClasses = footer => {
	const footerClasses = [
		'footer',
		'container-fluid',
		'p-5',
		'bg-dark',
		'text-light'
	];
	footerClasses.forEach(footerClass => footer.classList.add(footerClass));
};

addFooterClasses(footer);
footer.innerHTML = generateFooterHtml();
