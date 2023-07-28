import type { Meta, StoryObj } from '@storybook/svelte';
import Website from '$lib/components/icons/Website.svelte';

const meta = {
	title: 'Icons/Website',
	component: Website,
	tags: ['autodocs']
} satisfies Meta<Website>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const Dimension: Story = {
	args: {
		height: 25,
		width: 25
	}
};
