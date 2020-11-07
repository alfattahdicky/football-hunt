document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelectorAll('.sidenav');
	M.Sidenav.init(navbar);
	loadNav();

	function loadNav() {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState === 4) {
        if (this.status !== 200) return;
        
				document.querySelectorAll('.topnav, .sidenav').forEach(function(e)  {
					e.innerHTML = xhttp.responseText;
        });
        
				document.querySelectorAll('.sidenav a, .topnav a').forEach(function(e) {
					e.addEventListener('click', function (event) {
						const sidenav = document.querySelector('.sidenav');
						M.Sidenav.getInstance(sidenav).close();

						page = event.target.getAttribute('href').substr(1);
						loadPage(page);
					});
				});
			}
		};
		xhttp.open('GET', 'nav.html', true);
		xhttp.send();
	}
	let page = window.location.hash.substr(1);
	if (page === '') page = 'home';
	loadPage(page);

	function loadPage(page) {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState === 4) {
				const content = document.querySelector('.body-content');
				if (this.status === 200) {
					content.innerHTML = xhttp.responseText;
					if(page === 'home') {
						const slider = document.querySelectorAll('.slider');
						M.Slider.init(slider, {
							indicators: false,
							height: 450
						})
						getAllStandings();
						getAllTeamName();
					} else if(page === 'match') {
						getMatchAll();
					} else if(page === 'saved') {
						getSavedTeam();
						getDeleteTeam();
					} 
          // Slider
				} else if (this.status === 404) {
					content.innerHTML = '<p>Page not found.</p>';
				} else {
					content.innerHTML = '<p>Ups.. page cannot be access';
				}
			}
		};
		xhttp.open('GET', `pages/${page}.html`, true);
		xhttp.send();
	}
});

  
  
  