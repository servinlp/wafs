
const sections = {

	toggle( e ) {

		console.log( e )
		const main = document.querySelector( 'main' ),
			sections = Array.from( document.querySelectorAll( 'section' ) ),
			section = document.querySelector( window.location.hash )

		sections.forEach( el => {

			el.classList.remove( 'show' )

		} )
		section.classList.add( 'show' )

	}

}

export default sections