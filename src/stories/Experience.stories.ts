import type { Meta, StoryObj } from '@storybook/svelte';
import Page from '../routes/experience/+page.svelte';

const meta = {
	title: 'Pages/Experience',
	component: Page,
	tags: ['autodocs']
} satisfies Meta<Page>;

export default meta;
type Story = StoryObj<typeof meta>;

const experiences = [
	{
		company: 'Microsoft Technologies',
		link: 'https://www.microsoft.com',
		time: 'April 2021 - Till Date',
		title: 'Solution Architect'
	},
	{
		company: 'Alphabet',
		link: 'https://www.google.com',
		time: 'August 2020 - April 2021',
		title: 'Senior Product Engineer'
	}
];

export const Default: Story = {
	args: {
		data: { experiences: experiences }
	}
};
