import type { Meta, StoryObj } from '@storybook/svelte';
import GitHub from '$lib/components/icons/GitHub.svelte';

const meta = {
	title: 'Icons/GitHub',
	component: GitHub,
	tags: ['autodocs']
} satisfies Meta<GitHub>;

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
