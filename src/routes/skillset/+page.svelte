<script lang="ts">
	import { Card } from 'spaper';

	const skills: { category: string; items: string[] }[] = [
		{
			category: 'Web Applications',
			items: ['ASP.NET Core', 'ASP.NET Framework']
		},
		{
			category: 'Desktop Application',
			items: ['Windows Presentation Foundation (WPF)', 'Windows Forms (Win Forms)']
		},
		{
			category: 'Build Tools',
			items: ['Azure DevOps', 'Jenkins', 'Cake Script']
		},
		{
			category: 'Performance',
			items: ['NBomber', 'Benchmark.NET']
		},
		{
			category: 'Frontend Technologies',
			items: ['Svelte', 'Angular', 'TailwindCSS']
		},
		{
			category: 'Unit Test',
			items: ['nUnit', 'xUnit', 'MS Test', 'Fluent Assertions']
		},
		{
			category: 'Mock Frameworks',
			items: ['Moq', 'NSubstitute', 'WireMock.NET', 'MockHttp']
		},
		{
			category: 'Productivity Tools',
			items: ['Resharper / Rider', 'RoslynPad', 'LinqPad', 'PowerShell 7']
		},
		{
			category: 'Databases',
			items: ['MS SQL Server', 'My SQL', 'MongoDB', 'Elastic Stack', 'Redis']
		},
		{
			category: 'ORMs',
			items: ['Entity Framework', 'Dapper', 'Redis.OM']
		},
		{
			category: 'Principles & Architectures',
			items: ['SOLID', 'DRY', 'Event Driven', 'Pub / Sub']
		},
		{
			category: 'Microservices',
			items: ['DAPR', 'Tye']
		},
		{
			category: 'Message Brokers',
			items: ['Redis Stream', 'RabbitMQ']
		},
		{
			category: 'Process',
			items: ['Agile', 'BDD using SpecFlow']
		}
	];
</script>

<div class="flex flex-wrap gap-4 justify-center">
	{#each skills as skill}
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
