<script lang="ts">
	import { Card, Table } from 'spaper';
	export let data;
</script>

<div class="about">
	<Card>
		<svelte:fragment slot="title">
			<h2 class="text-2xl">Professional Qualification</h2>
		</svelte:fragment>
		<svelte:fragment slot="subTitle">
			<h2 class="text-lg">{data.professionalQualification.college}</h2>
		</svelte:fragment>
		<p>Year of passing: {data.professionalQualification.yearOfPassing}</p>
		<p>Aggregate: {data.professionalQualification.aggregate}</p>
	</Card>
</div>
<div class="about">
	<Card>
		<svelte:fragment slot="title">
			<h2 class="text-2xl">Academic Qualification</h2>
		</svelte:fragment>
		<svelte:fragment slot="subTitle">
			<h2 class="text-lg">{`Schooling: ${data.academicQualification.school}`}</h2>
		</svelte:fragment>
		<Table data={data.academicQualification.qualifications} />
	</Card>
</div>
<div class="about">
	<Card>
		<svelte:fragment slot="title">
			<h2 class="text-2xl">Personal Information</h2>
		</svelte:fragment>
		<svelte:fragment slot="subTitle">
			<h2 class="text-lg">Contact me</h2>
		</svelte:fragment>
		<p>
			email: <a href="mailto:spk2naveen@hotmail.com">{data.contact.email}</a>
		</p>
		<p>
			phone: <a href="tel:+918754960888">{data.contact.phone}</a>
		</p>
	</Card>
</div>

<style lang="postcss">
	.about {
		@apply mt-2;
	}
</style>
