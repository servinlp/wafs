(function() {
	'use strict';
	// Initialize appliciation
  	var app = {
		init: function() {
			location.hash && sections.toggle(location.hash)
			routes.init();
			// Global app stuff
		}
	}
	// Handle routes and states
	var routes = {
		init: function() {
			window.addEventListener( 'hashchange', () => {
				// What's the hash?
				sections.toggle(location.hash);
			} )
		}
	}
	// Render / toggle sections
	var sections = {
		toggle: function(route) {
			document.querySelectorAll('section').forEach((section) => {
				section.classList.add('no-display')
			});

		document.querySelector(route).classList.remove('no-display')
			// Toggle this particular section
		}
	}
	// Start Application
	app.init();
})()