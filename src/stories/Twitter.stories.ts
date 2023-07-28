import type { Meta, StoryObj } from '@storybook/svelte';
import Twitter from '$lib/components/icons/Twitter.svelte';

const meta = {
	title: 'Icons/Twitter',
	component: Twitter,
	tags: ['autodocs']
} satisfies Meta<Twitter>;

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
