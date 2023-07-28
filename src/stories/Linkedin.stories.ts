import type { Meta, StoryObj } from '@storybook/svelte';
import Linkedin from '$lib/components/icons/Linkedin.svelte';

const meta = {
	title: 'Icons/LinkedIn',
	component: Linkedin,
	tags: ['autodocs']
} satisfies Meta<Linkedin>;

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
