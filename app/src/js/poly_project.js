
export default class PolyProject {

	constructor( obj ) {

		this.object = obj

	}

	get domElements() {

		return `
			<figure>
				<img src='${ this.object.thumbnail.url }' alt='${ this.object.displayName }' >
				<figcaption>${ this.object.displayName }</figcaption>
			</figure>
		`

	}

}