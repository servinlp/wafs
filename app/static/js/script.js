// Create local scope with IIFE (Immediatly Invoked Function Expression)
console.log('global scope');
(function() {
  'use strict';
	console.log('local scope')
	var start = document.querySelector('#start'),
		bestPractices = document.querySelector('#best-practices');
	// Initialize appliciation
  var app = {
		init: function() {
			routes.init();

			// Global app stuff
		}
	}

	// Handle routes and states
	var routes = {
		init: function() {

			// What's the hash?
			window.addEventListener("hashchange", function(route){
				sections.toggle(route);
			})
		}
	}

	// Render / toggle sections
	var sections = {
		toggle: function(route) {
			
			// Toggle this particular section
			if (window.location.hash == '#best-practices') {
				start.classList.add('no-display');
				bestPractices.classList.remove('no-display');
			} 
			
			else if (window.location.hash == '#start') {
				bestPractices.classList.add('no-display');
				start.classList.remove('no-display');
			};
		}
	}

	// Start Application
	app.init();

})()
