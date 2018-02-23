import header from './header'

export default ( el ) => `
	${ !el.internal ? header( el ) : '' }
	<main>
		<section>
			<h1 class="FourOFour">404 - Can't find this page</h1>
		</section>
	</main>
`