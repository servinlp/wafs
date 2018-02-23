import Routes from './routes'
import { handleClickEvent } from './helper'

class App {

	constructor() {

		this.routes = new Routes()

		const allLinks = Array.from( document.querySelectorAll( 'a' ) )

		allLinks.forEach( link => {

			link.addEventListener( 'click', handleClickEvent )

		} )

	}

}

const app = new App()

export default app
export {
	App
}