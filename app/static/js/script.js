// Create local scope with IIFE (Immediatly Invoked Function Expression)
console.log('global scope')
(function() {
  'use strict';
	console.log('local scope')
	// Initialize appliciation
  var app = {
		init: function() {
			routs.init();

			// Global app stuff
		}
	}

	// Handle routes and states
	var routes = {
		init: function() {

			// What's the hash?
			sections.toggle(route);
		}
	}

	// Render / toggle sections
	var sections = {
		toggle: function(route) {

			// Toggle this particular section
			console.log(route)
		}
	}

	// Start Application
	app.init();

})()
