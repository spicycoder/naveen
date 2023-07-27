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

export const load = () => {
	return { skills: skills };
};
