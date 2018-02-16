import Routes from './routes'

export default class App {

	constructor() {

		this.routes = new Routes()
		this.handleClickEvent = this.handleClickEvent.bind( this )

		const AllLinks = Array.from( document.querySelectorAll( 'a' ) )

		AllLinks.forEach( link => {

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