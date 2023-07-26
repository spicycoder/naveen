<script>
	import 'papercss/dist/paper.min.css';
	import '../app.postcss';
	import { Navbar } from 'spaper';
	export const prerender = true;
</script>

<div class="p-1">
	<Navbar split={false} border={false}>
		<h1 slot="brand" class="text-4xl">
			<a href="/">Naveen Kumar</a>
		</h1>
		<ul class="inline">
			<li><a href="/skillset">Skillset</a></li>
			<li><a href="/experience">Experience</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</Navbar>
	<div class="my-2">
		<slot />
	</div>
</div>
