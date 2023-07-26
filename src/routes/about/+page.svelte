<script lang="ts">
	import { Card, Hero, Table } from 'spaper';
	const qualification = [
		{
			exam: '10th',
			board: 'Matriculation',
			year: '2002',
			score: '83%'
		},
		{
			exam: '12th',
			board: 'State Board',
			year: '2004',
			score: '81%'
		}
	];
</script>

<div class="about">
	<Card title="Professional Qualification" subTitle="Veltech Engineering College - Anna University">
		<p>Year of passing: 2009</p>
		<p>Aggregate: 70%</p>
	</Card>
</div>
<div class="about">
	<Card title="Academic Qualification" subTitle="Schooling: Our Ladys Matriculation Hr. Sec School">
		<Table data={qualification} />
	</Card>
</div>
<div class="about">
	<Card title="Personal Information" subTitle="Contact me">
		<p>
			email: <a href="mailto:spk2naveen@hotmail.com">spk2naveen@hotmail.com</a>
		</p>
		<p>
			phone: <a href="tel:+918754960888">+91-87549 60888</a>
		</p>
	</Card>
</div>

<style lang="postcss">
	.about {
		@apply mt-4;
	}
</style>
