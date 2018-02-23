import header from './header'

export default el => `
	${ !el.internal ? header( el ) : '' }
	<main>
		<section>
			<canvas/><canvas>
			<h1>${ el.data.error ? el.data.message : el.data.displayName }</h1>
		</section>
	</main>
`