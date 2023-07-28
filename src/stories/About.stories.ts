import type { Meta, StoryObj } from '@storybook/svelte';
import Page from '../routes/about/+page.svelte';

const meta = {
	title: 'Pages/About',
	component: Page,
	tags: ['autodocs']
} satisfies Meta<Page>;

export default meta;
type Story = StoryObj<typeof meta>;

const academicQualification = {
	school: 'Acme Academy',
	qualifications: [
		{
			exam: 'Diploma',
			board: 'Engineering',
			year: '2012',
			score: '64%'
		}
	]
};

const contact = {
	phone: '+91-12345 67890',
	email: 'john.doe@mail.net'
};

const professionalQualification = {
	college: 'Acme School of Engineering',
	yearOfPassing: '2016',
	aggregate: '80%'
};

export const Default: Story = {
	args: {
		data: { academicQualification, contact, professionalQualification }
	}
};
