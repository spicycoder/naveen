<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import '../app.postcss';
	import { Navbar } from 'spaper';
	export let data;
</script>

<div class="p-1">
	<Navbar split={false} border={false}>
		<div slot="brand" class="flex">
			<img
				src="/images/profile.png"
				alt="Naveen Kumar"
				class="h-20 lg:h-12 mr-2 border-none hover:-translate-y-1 transition-all"
			/>
			<h1 class="text-4xl flex items-end">
				<a href="/">Naveen Kumar</a>
			</h1>
		</div>
		<div class="pt-10 lg:pt-2">
			<ul class="inline items-end">
				<li><a class:active={$page.url.pathname === '/skillset'} href="/skillset">Skillset</a></li>
				<li>
					<a class:active={$page.url.pathname === '/experience'} href="/experience">Experience</a>
				</li>
				<li><a class:active={$page.url.pathname === '/about'} href="/about">About</a></li>
			</ul>
		</div>
	</Navbar>
	{#key data.url}
		<div class="my-2" in:fade={{ duration: 300, delay: 250 }} out:fade={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
</div>

<style lang="postcss">
	a.active {
		@apply bg-gray-700 text-gray-100;
	}

	a:hover {
		@apply bg-gray-900 text-gray-50;
	}
</style>
