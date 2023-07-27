const academicQualification = {
	school: 'Our Ladys Matriculation Hr. Sec School',
	qualifications: [
		{
			exam: '10th',
			board: 'Matriculation',
			year: '2002',
			score: '83%'
		},
		{
			exam: '12th',
			board: 'State Board',
			year: '2004',
			score: '81%'
		}
	]
};

const contact = {
	phone: '+91-87549 60888',
	email: 'spk2naveen@hotmail.com'
};

const professionalQualification = {
	college: 'Veltech Engineering College - Anna University',
	yearOfPassing: '2009',
	aggregate: '70%'
};

export const load = () => {
	return { academicQualification, contact, professionalQualification };
};
