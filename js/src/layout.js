(() => {
	const navbar = document.querySelector('.navbar');

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

		return navItems.reduce(
			(navItemsHtml, navItem) =>
				`${navItemsHtml}<li class="nav-item${
					location.includes(navItem.url) ? ' active' : ''
				}"><a href="${navItem.url}" class="nav-link">${navItem.label}</a></li>`,
			''
		);
	};

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

	const addNavbarClasses = () => {
		const navbarClasses = ['navbar-expand-lg', 'navbar-dark', 'bg-primary'];
		navbarClasses.forEach(navbarClass => navbar.classList.add(navbarClass));
	};

	addNavbarClasses();
	navbar.innerHTML = generateNavbarHtml();
})();
