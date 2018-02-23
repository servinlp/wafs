import config from './config'
import PolyProject from './poly_project'
import { handleClickEvent } from './helper'

import error from '../views/error'

function projectContainer( assets ) {

	const projects = assets.map( el => {

		const object = new PolyProject( el ),
			section = document.querySelector( 'main section' )

		object.thumbnail.addEventListener( 'click', handleClickEvent )

		section.appendChild( object.thumbnail )

		return object

	} )

}

async function getProjectContainerData( target ) {

	if ( window.localStorage.getItem( target ) ) {

		projectContainer( JSON.parse( window.localStorage.getItem( target ) ) )

	} else {

		try {

			// The Fetch request
			const request = await fetch( `${ config.api[ target ] }&key=${ config.api.key }` ),
				result = await request.json(),

				formatted = parseProjectData( result.assets )

			window.localStorage.setItem( target, JSON.stringify( formatted ) )

			if ( window.localStorage.getItem( 'all' ) ) {

				const currData = JSON.parse( window.localStorage.getItem( 'all' ) )

				currData.forEach( el => {

					const matches = formatted.filter( ell => ell.slug === el.slug )

					if ( matches.length === 0 ) {

						formatted.push( el )

					}

				} )

				window.localStorage.setItem( 'all', JSON.stringify( formatted ) )

			} else {

				window.localStorage.setItem( 'all', JSON.stringify( formatted ) )

			}

			projectContainer( formatted )


		} catch ( err ) {

			console.log( err )
			const main = document.querySelector( 'main' )
			main.remove()
			document.body.insertAdjacentHTML( 'beforeend', error( err.message ) )

		}

	}

}

function parseProjectData( data ) {

	return data.map( el => ( {
		authorName: el.authorName,
		displayName: el.displayName,
		description: el.description,
		slug: el.displayName.toLowerCase().replace( / /g, '_' ),
		formats: el.formats.filter( el => el.resources ).map( format => {

			const obj = {
				formatType: format.formatType,
				root: format.root
			}

			if ( format.resources ) {

				obj.resources = format.resources.map( elll => elll.url )

			}

			return obj

		} ),
		thumbnail: el.thumbnail
	} ) )

}

function getSingleProjectData( slug ) {

	const errObject = {
		error: true,
		message: '404 Object not found'
	}

	if ( window.localStorage.getItem( 'all' ) ) {

		const allData = JSON.parse( window.localStorage.getItem( 'all' ) ),
			data = allData.filter( el => el.slug === slug )

		if ( data.length > 0 ) {

			return data[ 0 ]

		} else {

			return errObject

		}


	} else {

		// 404
		return errObject

	}

}

export {
	getProjectContainerData,
	getSingleProjectData
}