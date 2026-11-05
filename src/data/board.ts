export interface BoardMember {
  name: string;
  designation: string;
  description?: string;
  readMoreContent: string;
  imageUrl: string;
  linkedin?: boolean;
  linkedinUrl?: string;
}

export const boardHero = {
  eyebrow: 'KOTHARI GROUP',
  heading: 'Strong Leadership. A Vision for the Future.',
  description:
    'The members of our team bear a wide array of competencies that help us in promoting water management with proper pipes and irrigation methods. ',
};

export const boardOfDirectors: BoardMember[] = [
  {
    name: 'Kiran S. Kothari',
    designation: 'Founder',
    description:
      'Kothari Group was established in 1997 by Mr. Kiran S. Kothari to change the water management system from the core with new solutions and techniques of agricultural activities. His passion for agricultural sciences is coupled with creativity and smart use of water sources. It can be seen in the development of Kothari Group through the years.',
    readMoreContent: `Kothari Group was established in 1997 by Mr. Kiran S. Kothari to change the water management system from the core with new solutions and techniques of agricultural activities. His passion for agricultural sciences is coupled with creativity and smart use of water sources. It can be seen in the development of Kothari Group through the years.`,
    imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Arvind-Sir.jpg',
  },
  { 
    name: 'Arvind S. Kothari',
    designation: 'Chairman',
    description:
      'Mr. Arvind S. Kothari is an alumnus of Pune University who studied mathematics. Now that he has joined the Kothari Group, he has also brought analytical and strategic skills to the company. ',
    readMoreContent: `Mr. Arvind S. Kothari is an alumnus of Pune University who studied mathematics. Now that he has joined the Kothari Group, he has also brought analytical and strategic skills to the company. `,
    imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Kiran-Sir.jpg',
  },
  {
    name: 'Ujwal S. Kothari',
    designation: 'Managing Director',
    description:
      `Mr. Ujwal S. Kothari completed his commerce studies from Pune University and has been associated with Kothari Group from the very first day. His task is to supervise the everyday going on of the organization. Moreover, he is responsible for overseeing other aspects of business promotions and the company' s products. `,
    readMoreContent: `Mr. Ujwal S. Kothari completed his commerce studies from Pune University and has been associated with Kothari Group from the very first day. His task is to supervise the everyday going on of the organization. Moreover, he is responsible for overseeing other aspects of business promotions and the company' s products.`,
    imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Ujwal-Sir.jpg',
  },
];

export const youngLeadership = {
  heading: 'OUR LEADERSHIP TEAM - THE FUTURE IS YOUNG',
  description:
    'The new phase of leadership at Kothari would be characterized by fresh views on operations. ',
  members: [
    {
      name: 'Mr. Amol Paliya',
      designation: 'Director',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/amol-paliya-7a47a7188',
      readMoreContent: `Mr. Amol Paliya has been a part of Kothari Group since 1997 and has a big amount of expertise in the field of commerce. He possesses an amazing talent to implement operational efficiency and strategic planning of business. `,
      imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/amol.png',
    }, 
    {
      name: 'Mr. Ashish Kothari',
      designation: 'Director Operations - Irrigation Division',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/ashish-kothari-42940616',
      readMoreContent: `Mr. Ashish Kothari has technical knowledge. He is an engineer and MBA from Symbiosis College, Pune. He has worked with Kothari Group since 2009 and has contributed to the irrigation operations and procurement department of the company.`,
      imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/Ashish-kothari.png',
    },
    {
      name: 'Mr. Pushkaraj Kothari',
      designation: 'Director Marketing - Irrigation Division',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/pushkaraj-kothari-6b01aa24',
      readMoreContent: `Mr. Pushkaraj Kothari has a BE in Engineering and also holds an MBA. He began his association with Kothari Group in the year 2012 as a management trainee and obtained relevant experience in the sales department. He presently leads the brands and marketing communications department.`,
      imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Pushkaraj-Sir.jpg',
    },
    {
      name: 'Mr. Gaurav Kothari',
      designation: 'Director Marketing - Pipe Division',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/gourav-kothari-8a30a714b',
      readMoreContent: `Mr. Gaurav Kothari completed his graduation in BBA and started working with Kothari Group in 2010. Since then, he has developed expertise in both sales and market development for agricultural and plumbing products. His focus on customer relationships and market knowledge helps the company become established in the industries of pipes and pipe fittings, as well as plumbing solutions. `,
      imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Gaurav-Sir.jpg',
    },
    {
      name: 'Mr. Akshay Kothari',
      designation: 'Director - Finance & HR',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/akshay-kothari-4656b7b5',
      readMoreContent: `Mr. Akshay Kothari started to work with Kothari Group in 2013. He has both BBA and MBA degrees from universities in Pune and the UK. In the company, he takes part in all finance and human resource operations. `,
      imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/10/Akshay-Sir.jpg',
    }, 
    {
      name: 'Mr. Sourabh Kothari',
      designation: 'Director - Export Division',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/sourabh-kothari-0112561b5',
      readMoreContent: `Mr. Sourabh Kothari has been working with Kothari Group for 5 years, using his expertise gained during his previous experience in Singapore. His contribution to finance and project execution is highly important in making the company effective and satisfying its customers. `,
      imageUrl: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/Sourabh-sir.png',
    },
  ] as BoardMember[],
};
