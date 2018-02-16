import Routes from './routes'

export default class App {

	constructor() {

		this.routes = new Routes()
		// This makes sure you don't need to bind this in the event listener
		this.handleClickEvent = this.handleClickEvent.bind( this )

		const allLinks = Array.from( document.querySelectorAll( 'a' ) )

		allLinks.forEach( link => {

			link.addEventListener( 'click', this.handleClickEvent )

		} )

	}

	handleClickEvent( e ) {

		if ( !e.target.href.includes( window.location.origin ) ) return

		e.preventDefault()

		if ( window.history ) {

			window.history.pushState( {}, '', e.target.getAttribute( 'href' ) )

		}

		this.routes.goTo( e.target.getAttribute( 'href' ), true )

		const activeLi = document.querySelector( 'nav li.active' )

		activeLi.classList.remove( 'active' )
		e.target.parentNode.classList.add( 'active' )

	}

}