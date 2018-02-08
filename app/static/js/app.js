{
	'use strict'
	const settings = {
		sections: document.querySelectorAll('section')
	}
	const app = {
		init() {
			sections.init()
			router.init()
			router.checkHash()
		}
	}
	const router = {
		init() {
			window.addEventListener('hashchange', () => {
				sections.toggle(helpers.splitHash(location.hash))
			})
		},
		checkHash() {
			if (window.location.hash) {
				sections.toggle(helpers.splitHash(location.hash))
			} else {
				document.querySelector('#home').classList.remove('hidden')
			}
		}
	}
	const sections = {
		init() {
			settings.sections.forEach(function(el) {
				el.classList.add('hidden')
			})
		},
		toggle(route) {
			settings.sections.forEach(function(el) {
				if (el.id === route) {
					el.classList.remove('hidden')
				} else {
					el.classList.add('hidden')
				}
			})
		}
	}

	const helpers = {
		splitHash(hash) {
			return hash.split('#')[1]
		}
	}
	app.init()
}