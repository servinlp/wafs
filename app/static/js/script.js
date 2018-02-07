(function() {
	'use strict';
	// Initialize appliciation
  	var app = {
		init: function() {
			window.onload = () => {
				location.hash && sections.toggle(location.hash)
			}
			routes.init();
			// Global app stuff
		}
	}
	// Handle routes and states
	var routes = {
		init: function() {
			onhashchange = () => {
				// What's the hash?
				sections.toggle(location.hash);
			}
		}
	}
	// Render / toggle sections
	var sections = {
		toggle: function(route) {
			document.querySelectorAll('section').forEach((section) => {
				section.classList.add('no-display')
			});
			
			var listItem = document.querySelectorAll ('li');
			
			for (var i = 0; i < listItem.length; i++) {
				listItem[i].addEventListener("click", function() {
					listItem[i].classList.add('lekkersicko')
				})
				console.log(listItem[i]);
			}

		document.querySelector(route).classList.remove('no-display')
			// Toggle this particular section
		}
	}
	// Start Application
	app.init();
})()