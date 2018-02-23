import app from './app'

function handleClickEvent( e ) {

	const link = e.target.tagName === 'A' ? e.target : e.target.parentNode.parentNode

	if ( !link.href.includes( window.location.origin ) ) return

	e.preventDefault()

	if ( window.history ) {

		window.history.pushState( {}, '', link.getAttribute( 'href' ) )

	}

	const main = document.querySelector( 'main' ),
		oldA = Array.from( document.querySelectorAll( 'main a' ) )

	oldA.forEach( el => {

		el.removeEventListener( 'click', handleClickEvent )

	} )

	main.remove()

	app.routes.goTo( link.getAttribute( 'href' ), true )

	const activeLi = document.querySelector( 'nav li.active' )

	if ( activeLi ) {

		activeLi.classList.remove( 'active' )
		link.parentNode.classList.add( 'active' )

	}

}

export {
	handleClickEvent
}