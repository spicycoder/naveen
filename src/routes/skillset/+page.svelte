<script lang="ts">
	import { Card } from 'spaper';
	export let data;
</script>

<div class="flex flex-wrap gap-4 justify-center">
	{#each data.skills as skill}
		<div class="w-full lg:w-72">
			<Card>
				<svelte:fragment slot="subTitle">
					<h2 class="text-2xl">{skill.category}</h2>
				</svelte:fragment>
				<ul>
					{#each skill.items as item}
						<p>{item}</p>
					{/each}
				</ul>
			</Card>
		</div>
	{/each}
</div>
