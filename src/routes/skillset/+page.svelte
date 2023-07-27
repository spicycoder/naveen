<script lang="ts">
	import { Card } from 'spaper';
	export let data;
</script>

<div class="flex flex-wrap gap-4 justify-center">
	{#each data.skills as skill}
		<div class="w-full lg:w-72">
			<Card subTitle={skill.category}>
				<ul>
					{#each skill.items as item}
						<p>{item}</p>
					{/each}
				</ul>
			</Card>
		</div>
	{/each}
</div>
