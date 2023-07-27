<script lang="ts">
	import { Card, Table } from 'spaper';
	export let data;
</script>

<div class="about">
	<Card title="Professional Qualification" subTitle={data.professionalQualification.college}>
		<p>Year of passing: {data.professionalQualification.yearOfPassing}</p>
		<p>Aggregate: {data.professionalQualification.aggregate}</p>
	</Card>
</div>
<div class="about">
	<Card title="Academic Qualification" subTitle={`Schooling: ${data.academicQualification.school}`}>
		<Table data={data.academicQualification.qualifications} />
	</Card>
</div>
<div class="about">
	<Card title="Personal Information" subTitle="Contact me">
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
		@apply mt-4;
	}
</style>
