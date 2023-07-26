<script lang="ts">
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
	import Website from '$lib/components/icons/Website.svelte';
	import { Article, Badge, Button } from 'spaper';
</script>

<Article title="Hi There 👋">
	<p>
		I'm <b>Naveen</b>, <em>Software Architect</em> with over <em class="text-2xl">14 years</em> of
		experience in building <Badge type="primary">Web</Badge>, <Badge type="primary">Desktop</Badge>, <Badge
			type="primary">Service</Badge
		> & <Badge type="primary">Mobile</Badge> applications
	</p>
	<p>
		Expertise in building <em>distributed applications</em>, using Microsoft Technologies including
		<Badge type="secondary">.NET</Badge>, <Badge type="secondary">DAPR</Badge> & <Badge
			type="secondary">Tye</Badge
		>. Experienced in building end to end applications, that are portable, scalable and maintainable
	</p>
	<p>
		I have worked with SQL based (MS SQL Server, MySQL), NoSQL based (MongoDB), Time Series based
		(InfluxDB, Prometheus) and multi paradigm (Redis, Elastic Stack) databases and ORMs, such as
		Entity Framework, Dapper, MongoDB C# Driver and Redis.OM
	</p>
	<p>
		I am an Agile practitioner for over 7 years now, following <Badge type="success">Scrum</Badge>
		&
		<Badge type="success">Lean</Badge> methodologies
	</p>
	<p>
		Exposure to JavaScript (meta)frameworks & libraries, building component based frontend
		applications, using <Badge type="danger">Angular</Badge> and <Badge type="danger"
			>SvelteKit</Badge
		>
	</p>

	<p slot="footer">
		<Button on:click={() => window.open('https://github.com/spicycoder')}
			><GitHub height={25} width={25} /></Button
		>
		<Button outline="secondary" on:click={() => window.open('https://twitter.com/spk2naveen')}
			><Twitter height={25} width={25} /></Button
		>
		<Button
			outline="secondary"
			on:click={() => window.open('https://www.linkedin.com/in/spk2naveen')}
			><Linkedin height={25} width={25} /></Button
		>
		<Button outline="secondary" on:click={() => window.open('https://naveenkumar.vercel.app')}
			><Website height={25} width={25} /></Button
		>
	</p>
</Article>

<style class="postcss">
	p {
		@apply text-xl mt-4;
	}
</style>
