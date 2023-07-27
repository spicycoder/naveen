<script lang="ts">
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
	import Website from '$lib/components/icons/Website.svelte';
	import { Article, Badge, Button } from 'spaper';
</script>

<Article title="Hi There 👋">
	<div class="text-justify text-xl">
		<p>
			I'm <b>Naveen</b>, a seasoned <em>Software Architect</em> with more than
			<em class="text-2xl">14 years</em>
			of experience specializing in developing a wide range of <Badge type="primary">Web</Badge>, <Badge
				type="primary">Desktop</Badge
			>, <Badge type="primary">Service</Badge> & <Badge type="primary">Mobile</Badge> applications
		</p>
		<p>
			My expertise lies in crafting <em>distributed applications</em> using Microsoft Technologies,
			including <Badge type="secondary">.NET</Badge>, <Badge type="secondary">DAPR</Badge> & <Badge
				type="secondary">Tye</Badge
			>. I take pride in creating end-to-end solutions that are not only portable and scalable but
			also highly maintainable
		</p>
		<p>
			Throughout my career, I have worked extensively with various databases, ranging from SQL-based
			systems like <em>MS SQL Server</em> and <em>MySQL</em> to NoSQL-based databases like
			<em>MongoDB</em>. Additionally, I have experience with Time Series databases like
			<em>InfluxDB</em>
			and <em>Prometheus</em>, as well as multi-paradigm databases like <em>Redis</em> and
			<em>Elastic Stack</em>. I am well-versed in using ORMs such as
			<em>Entity Framework</em>, <em>Dapper</em>, <em>MongoDB C# Driver</em>, and <em>Redis.OM</em>
		</p>
		<p>
			With a strong background in Agile practices, I have been following <Badge type="success"
				>Scrum</Badge
			> & <Badge type="success">Lean</Badge> methodologies for over 7 years, ensuring efficient project
			management and delivery
		</p>
		<p>
			Moreover, I have also delved into the world of JavaScript frameworks and libraries, where I
			have expertise in building component-based frontend applications using <Badge type="danger"
				>Angular</Badge
			> & <Badge type="danger">SvelteKit</Badge>
		</p>
		<p>
			Overall, my passion lies in architecting robust and innovative solutions that align with the
			latest industry trends and best practices
		</p>
	</div>

	<p slot="footer">
		<Button outline="secondary" on:click={() => window.open('https://github.com/spicycoder')}
			><GitHub height={25} width={25} /></Button
		>
		<Button outline="secondary" on:click={() => window.open('https://twitter.com/TheSpicyCoder')}
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
		@apply mt-4;
	}
</style>
