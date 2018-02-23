import header from './header'

export default ( el, head = false ) => `
	${ head ? header( el ) : '' }
	<main>
		<section>
			${ el }
		</section>
	</main>
`