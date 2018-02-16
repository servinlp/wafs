import header from './header'
import all from './sections/all'
import blocks from './sections/block'
import tiltBrush from './sections/tilt_brush'

export default el => `
	${ !el.internal ? header( el ) : '' }
	<main>
		${ el.all ? all() : '' }

		${ el.blocks ? blocks() : '' }

		${ el.tiltBrush ? tiltBrush() : '' }

	</main>
`