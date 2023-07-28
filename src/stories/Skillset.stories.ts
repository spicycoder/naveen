import type { Meta, StoryObj } from '@storybook/svelte';
import Page from '../routes/skillset/+page.svelte';

const meta = {
	title: 'Pages/Skillset',
	component: Page,
	tags: ['autodocs']
} satisfies Meta<Page>;

export default meta;
type Story = StoryObj<typeof meta>;

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
	}
];

export const Default: Story = {
	args: {
		data: { skills }
	}
};
