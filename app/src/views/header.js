export default el => `
	<nav>
		<ul>
			<li ${ el.all ? 'class="active"' : '' }><a href="/">All</a></li>
			<li ${ el.blocks ? 'class="active"' : '' }><a href="/blocks">Blocks</a></li>
			<li ${ el.tiltBrush ? 'class="active"' : '' }><a href="/tilt-brush">Tilt brush</a></li>
		</ul>
	</nav>
	`