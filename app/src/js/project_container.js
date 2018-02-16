import config from './config'
import PolyProject from './poly_project'

function projectContainer( assets ) {

	const projects = assets.map( el => {

		const object = new PolyProject( el ),
			section = document.querySelector( 'main section' )

		section.insertAdjacentHTML( 'beforeend', object.domElements )

		return object

	} )

	console.log( projects )

}

async function getProjectContainerData( target ) {

	if ( window.localStorage.getItem( target ) ) {

		projectContainer( JSON.parse( window.localStorage.getItem( target ) ) )

	} else {

		try {

			const result = await ( await fetch( `${ config.api[ target ] }&key=${ config.api.key }` ) ).json(),
				formatted = parseProjectData( result.assets )

			window.localStorage.setItem( target, JSON.stringify( formatted ) )

			projectContainer( formatted )


		} catch ( err ) {

			console.log( err )

		}

	}

}

function parseProjectData( data ) {

	return data.map( el => ( {
		authorName: el.authorName,
		displayName: el.displayName,
		slug: el.displayName.toLowerCase().replace( / /g, '_' ),
		formats: el.formats.map( format => {

			const obj = {
				formatType: format.formatType,
				root: format.url
			}

			if ( format.resources ) {

				obj.resources = format.resources.map( elll => elll.url )

			}

			return obj

		} ),
		thumbnail: el.thumbnail
	} ) )

}

export default projectContainer
export {
	getProjectContainerData
}