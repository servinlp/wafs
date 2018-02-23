import * as THREE from './THREE/three.module'
import OrbitControls from './THREE/OrbitControls'

export default class PolyProject {

	constructor( obj ) {

		this.object = obj

		this.thumbnail = this.thumbnail()
		this.element = this.page()

		this.render = this.render.bind( this )

	}

	thumbnail() {

		const a = document.createElement( 'a' ),
			figure = document.createElement( 'figure' ),
			img = document.createElement( 'img' ),
			figcaption = document.createElement( 'figcaption' )

		a.setAttribute( 'href', `/project/${ this.object.slug }` )

		img.setAttribute( 'src', this.object.thumbnail.url )
		img.setAttribute( 'alt', this.object.displayName )

		figcaption.textContent = this.object.displayName

		figure.appendChild( img )
		figure.appendChild( figcaption )

		a.appendChild( figure )

		return a

	}

	page() {

		const main = document.createElement( 'main' ),
			section = document.createElement( 'section' ),
			h1 = document.createElement( 'h1' ),
			author = document.createElement( 'p' ),
			description = document.createElement( 'p' )

		this.renderer = new THREE.WebGLRenderer( { alpha: true } )

		h1.textContent = this.object.displayName
		author.textContent = this.object.authorName
		description.textContent = this.object.description

		section.classList.add( 'project' )

		section.appendChild( this.renderer.domElement )
		section.appendChild( h1 )
		section.appendChild( author )
		section.appendChild( description )

		main.appendChild( section )

		return main

	}

	initCanvas() {

		console.log( this.object )

		const box = this.renderer.domElement.parentNode.getBoundingClientRect()
		this.width = box.width - 80
		this.height = ( ( box.width - 80 ) / 16 ) * 9

		this.renderer.setSize( this.width, this.height )
		this.renderer.setPixelRatio( window.devicePixelRatio )

		this.scene = new THREE.Scene()
		this.scene.background = new THREE.Color( 0x222222 )
		this.scene.add( new THREE.GridHelper( 10, 10 ) )

		this.camera = new THREE.PerspectiveCamera( 60, this.width / this.height, 0.1, 100 )
		this.camera.position.set( 5, 3, 5 );
		this.camera.lookAt( 0, 1.5, 0 )

		this.ambient = new THREE.HemisphereLight( 0xbbbbff, 0x886666, 0.75 )
		this.ambient.position.set( -0.5, 0.75, -1 )
		this.scene.add( this.ambient )

		this.light = new THREE.DirectionalLight( 0xffffff, 0.75 )
		this.light.position.set( 1, 0.75, 0.5 )
		this.scene.add( this.light )

		this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement )
		this.controls.autoRotate = true

		this.sortObjectRendering()

		this.renderer.animate( this.render )

	}

	sortObjectRendering() {

		this.OBJ = new THREE.Object3D()
		this.scene.add( this.OBJ )

		this.object.formats.forEach( el => {

			switch ( el.formatType ) {

				case 'OBJ':
					this.loadOBJ( el )
					break
				case 'GLTF':
					this.loadGLTF( el )
					break
				default:
					console.log( `No match for ${ el.formatType }` )
					console.log( 'el', el )

			}

		} )

	}

	loadOBJ( el )  {

		const obj = el.root,
			mtl = el.resources.find( resource => resource.endsWith( 'mtl' ) ),
			path = obj.url.slice( 0, obj.url.indexOf( obj.relativePath ) ),

			mtlLoader = new THREE.MTLLoader()

		mtlLoader.setCrossOrigin( true )
		mtlLoader.setTexturePath( path )

		mtlLoader.load( mtl.url, materials => {

			materials.preload()

			const objLoader = new THREE.OBJLoader()

			objLoader.setMaterials( materials )
			objLoader.load( obj.url, object => {

				const box = new THREE.Box3()
				box.setFromObject( object )

				// re-center

				const center = box.getCenter()
				center.y = box.min.y
				object.position.sub( center )

				// scale

				const scaler = new THREE.Group()
				scaler.add( object )
				scaler.scale.setScalar( 6 / box.getSize().length() )
				scaler.rotate
				this.OBJ.add( scaler )
				// this.scene.add( object )

			} )

		} )

	}

	loadGLTF( el )  {

		const obj = el.root,
			mtl = el.resources.find( resource => resource.endsWith( 'mtl' ) ),
			path = obj.url.slice( 0, obj.url.indexOf( obj.relativePath ) ),

			loader = new THREE.LegacyGLTFLoader()

		loader.setCrossOrigin( true )

		loader.load( obj.url, gltf => {

			console.log( gltf )

			const box = new THREE.Box3()
			box.setFromObject( gltf.scene )

			// re-center

			const center = box.getCenter()
			center.y = box.min.y
			gltf.scene.position.sub( center )

			// scale

			const scaler = new THREE.Group()
			scaler.add( gltf.scene )
			scaler.scale.setScalar( 6 / box.getSize().length() )
			this.OBJ.add( scaler )

		} )

	}

	render() {

		this.controls.update()

		this.renderer.render( this.scene, this.camera )

	}

	stopRendering() {

		this.renderer.animate( null )

	}

}