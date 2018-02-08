import sections from './sections'

const routes = {

	init() {

		window.addEventListener( 'hashchange', sections.toggle )	

	}

}

export default routes