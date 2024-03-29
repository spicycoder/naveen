const experiences: { company: string; link: string; time: string; title: string }[] = [
	{
		company: 'JustAnswer',
		link: 'https://www.justanswer.com',
		time: 'April 2021 - Till Date',
		title: 'Associate Architect'
	},
	{
		company: 'Talent Recruit',
		link: 'https://www.talentrecruit.com',
		time: 'August 2020 - April 2021',
		title: 'Vice President - Technology'
	},
	{
		company: 'JustAnswer',
		link: 'https://www.justanswer.com',
		time: 'August 2019 - August 2020',
		title: 'Software Engineer'
	},
	{
		company: 'Eurofins',
		link: 'https://www.eurofins.com',
		time: 'June 2016 - August 2019',
		title: 'Software Engineer'
	},
	{
		company: 'ABCO Advisory Services',
		link: 'https://www.advisory.com',
		time: 'October 2014 - June 2016',
		title: 'Software Engineer'
	},
	{
		company: 'Kony Labs',
		link: 'https://www.kony.com',
		time: 'June 2013 - October 2014',
		title: 'Software Engineer'
	},
	{
		company: 'ABCO Advisory Services',
		link: 'https://www.advisory.com',
		time: 'May 2012 - June 2013',
		title: 'Software Engineer'
	},
	{
		company: 'iLink-Systems',
		link: 'https://www.ilink-systems.com',
		time: 'September 2011 - May 2012',
		title: 'Software Engineer'
	},
	{
		company: 'Srinsoft Technologies',
		link: 'https://www.srinsofttech.com',
		time: 'June 2009 - May 2011',
		title: 'Team Lead'
	}
];

export const load = () => {
	return { experiences: experiences };
};
