// Create local scope with IIFE (Immediatly Invoked Function Expression)
console.log('global scope')
(function() {
  'use strict';
	console.log('local scope')
	// Initialize appliciation
  var app = {
		init: function() {

		}
	}

	// Handle routes and stades
	var routes = {
		init: function() {

		}
	}

	// Render / toggle sections
	var sections = {
		toggle: {

		}
	}

	// Start Application
	app.init();

})()
