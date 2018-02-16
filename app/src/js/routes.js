import index from '../views/index'
import fourOfour from '../views/404'

import { getProjectContainerData } from './project_container'
import Renderer from './renderer'

export default class Routes {

	constructor() {

		this.r = new Renderer()

		this.goTo( window.location.pathname )

	}

	/**
	* @param {String} path 		- Path of the current url (window.location.pathname)
	* @param {Boolean} internal - Depending on whether the page is refreshed or not
	*							  you can load or append an object
	*/
	goTo( path, internal = false ) {

		this.path = path

		const request = {
			paths: this.matchPath( this.path ),
			internal
		}

		console.log( request )

		if ( !request.paths ) {

			request.paths = this.paths[ '*' ]

		}

		if ( request.internal ) {

			const main = document.querySelector( 'main' )

			main.remove()

		}

		request.paths.go( request )

	}

	get paths() {

		return {
			'/': req => {

				req.all = true

				document.body.insertAdjacentHTML( 'beforeend', this.r.render( index, req ) )

				getProjectContainerData( 'all' )

			},
			'/blocks': req => {

				req.blocks = true

				document.body.insertAdjacentHTML( 'beforeend', this.r.render( index, req ) )

				getProjectContainerData( 'blocks' )

			},
			'/tilt-brush': req => {

				req.tiltBrush = true

				document.body.insertAdjacentHTML( 'beforeend', this.r.render( index, req ) )

				getProjectContainerData( 'tiltBrush' )

			},
			'/project/:slug': req => {

				console.log( 'run' )
				console.log( req )

			},
			'/project/hello': req => {

				console.log( 'hello' )
				console.log( req )

			},
			'/project/:slug/:lalalala': req => {

				console.log( 'run' )
				console.log( req )

			},
			'/project/:slug/:lalalala/hi': req => {

				console.log( 'hi' )
				console.log( req )

			},
			'*': req => {

				document.body.insertAdjacentHTML( 'beforeend', fourOfour, req )

			}
		}

	}

	/**
	* @return {function} - Returns the function that belonges to the path
	*/
	matchPath() {

		if ( this.paths[ this.path ] ) {

			return {
					go: this.paths[ this.path ]
				}

		}

		const URLMatches = this.matchURL( this.path ),
			variableNames = []

		console.log( 'URLMatches', URLMatches )

		if ( !URLMatches ) return

		// Resource:
		// http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash
		URLMatches.forEach( el => {

			if ( !el.includes( ':' ) ) return

			console.log( 'key', el )

			const route = el.replace( /([:*])(\w+)/g, ( full, dots, name ) => {

					variableNames.push( name )

					return '([^\/]+)'

				} ) + '(?:\/|$)',
				match = this.path.match( new RegExp( route ) )

			if ( match ) {

				console.log( 'match', match );

				const params = match.slice( 1, match.length )
						.reduce( ( params, value, index ) => {

							if ( params === null ) params = {}

							params[ variableNames[ index ] ] = value

							return params

						}, null )

				console.log( 'params', params )

			}

		} )

		console.log( variableNames )

	}

	matchURL() {

		const { path } = this,
			dashLength = path.match( /\//g || [] ).length,

			possiblePaths = Object.keys( this.paths ),
			firstPart = path.substr( 0, path.split( '/', 2 ).join( '/' ).length ),
			possibleMatches = possiblePaths.filter( el => el.includes( firstPart ) )
								.filter( el => el.match( /\//ig || [] ).length === dashLength )
								.sort( ( a, b ) => b.lastIndexOf( '/' ) > b.lastIndexOf( ':' ) )

		console.log( 'firstPart', firstPart )
		console.log( 'possiblePaths', possiblePaths )
		console.log( 'possibleMatches', possibleMatches )

		if ( possibleMatches.length === 0 ) return

		return possibleMatches.filter( el => possiblePaths.includes( el ) )

	}

}