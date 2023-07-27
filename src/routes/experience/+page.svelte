<script lang="ts">
	import { Card } from 'spaper';
	export let data;
</script>

<div class="flex flex-wrap gap-4 justify-center">
	{#each data.experiences as experience}
		<div class="w-full lg:w-72">
			<Card subTitle={experience.title}>
				<svelte:fragment slot="title">
					<h3 class="text-2xl">
						<a href={experience.link} target="_blank">{experience.company}</a>
					</h3>
				</svelte:fragment>
				<p class="text-sm">{experience.time}</p>
			</Card>
		</div>
	{/each}
</div>
