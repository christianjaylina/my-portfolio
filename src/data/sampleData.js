// Sample data for the portfolio
export const sampleTrips = [
  {
    id: '1',
    title: 'CodeChum',
    date: '2025-11-20',
    location: 'Cebu City, Philippines',
    description: 'CodeChum is an educational technology platform based in Cebu, Philippines, designed to make learning programming accessible and engaging for students and teachers. It supports various programming languages such as C, C++, Java, Python, and JavaScript, offering tools for automatic code checking, student performance monitoring, and cheating prevention. Widely used in over 100 schools across the Philippines, CodeChum provides a mobile-friendly interface, a self-study area with Al assistance, and certification opportunities. Founded by Jermar Jude Maranga, the platform aims to enipower students and educators by simplifying coding education, enhancing teaching efficiency, and preparing Filipino youth for careers in technology.',
    photos: [
      '/images/codechum/1.jpg',
      '/images/codechum/codechum3.jpg',
      '/images/codechum/IMG_20251120_095234.jpg'
    ],
    createdAt: '2025-11-20T10:00:00.000Z'
  },
  {
    id: '2',
    title: 'Mata Technologies Inc.',
    date: '2025-11-18',
    location: 'Cebu City, Philippines',
    description: 'Mata Technologies Inc. is a proudly homegrown Philippine company specializing in virtual tours for real estate and virtual reality mapping for tourist destinations across the country. Inspired by the Filipino word “mata,” meaning “eyes,” Mata Tech provides immersive 360° previews that allow users to explore properties and notable locations as if they were truly there.',
    photos: [
      '/images/mata/1.jpg',
      '/images/mata/mata2.jpg',
      '/images/mata/mata3.jpg'
    ],
    createdAt: '2025-11-18T09:00:00.000Z'
  },
  {
    id: '3',
    title: 'Rivan IT Cebu',
    date: '2025-11-20',
    location: 'Cebu City, Philippines',
    description: 'Rivan IT Cebu is a training center. Established under the network of Rivan School off Technology Inc. (founded 1999) it specializes in IT and networking certification courses such as Cisco CCNA/CCNP, Linux, security, and VoIP. For someone in Electronics Engineering, it can be a useful complement if you are looking to build skills in networking infrastructure, or IT-hardware integration, but it may not provide the full breadth of electronics engineering topics (like analog/digital circuit design, embedded systems, power electronics), in student forums, its networking courses are noted as "good for getting your foot in the door" for IT roles. In short: good for IT/network side of electronics, less ideal if your goal is full electronics design engineering. If you like, I can check whether they have any dedicated electronics hardware/embedded systems course track.',
    photos: [
      '/images/rivan/1.jpg',
      '/images/rivan/582394091_1191112606306618_4454406432297576757_n.jpg',
      '/images/rivan/5b181603-19c0-4e82-b568-79a29907161b.jpg',
      '/images/rivan/95be963b-78ad-4e2d-ae90-ca016f3323b9.jpg',
      '/images/rivan/c1ba5dba-a442-418c-af45-7a4707acb7a3.jpg',
      '/images/rivan/IMG_20251120_145107.jpg'
    ],
    createdAt: '2025-11-20T14:00:00.000Z'
  },
  {
    id: '4',
    title: 'T.A.R.S.I.E.R 117',
    date: '2025-11-22',
    location: 'Bohol,Philippines',
    description: '7 ARSIER 117 Which stands for Tourist Assistance and Rescue Section, immediate Emergency Responders, is an emergency response and disaster management unit established by the Provincial Government of Bohol. It was created to ensure the safety and security of both locals and tourists by providing immediate assistance during emergencaes, such as accidents natural disasters, and medical snuations. Operating 24/7 through the emergency hotline 117. TARSLER. 117 is composed of trashed responders equipped for rescue, first aid, and disaster operations.',
    photos: [
      '/images/tarsier/1.jpg',
      '/images/tarsier/7c0c3712-ab24-4fde-ac89-358bf9f1b859.jpg',
      '/images/tarsier/IMG_20251122_090635.jpg',
      '/images/tarsier/tarsier6.jpg'
    ],
    createdAt: '2025-11-22T09:00:00.000Z'
  },
  {
    id: '5',
    title: 'WorldTech Conference',
    date: '2025-11-15',
    location: 'Cebu City, Philippines',
    description: 'Worldtech Information Solutions, Inc. is a Philippine-based IT consultancy and training company with offices in Cebu, Manila, and international presence in Australia and Singapore. The company specializes in IT consulting, cybersecurity solutions, and professional training, including authorized certification programs in Microsoft, Cisco, and VMware technologies. It serves a diverse client base, including banks, government agencies, schools, and large enterprises, offering both strategic IT guidance and skills development. With a team of experienced consultants and certified trainers, Worldtech emphasizes cybersecurity, operational technology protection, and capacity building for organizations seeking to enhance their IT infrastructure and workforce competencies.',
    photos: [
      '/images/worldtech/1.jpg',
      '/images/worldtech/42521da4-b7a1-4ce1-a96e-e77b3b640449.jpg',
      '/images/worldtech/a9e7f01c-11fb-47c2-8c44-ea18f786f7e8.jpg'
    ],
    createdAt: '2025-11-15T10:00:00.000Z'
  }
];

export const sampleCertificates = [
  {
    id: '1',
    title: 'Computer Hardware Basics',
    issuer: 'DICT-ITU DTC Initiative through the Cisco Networking Academy program.',
    issueDate: '2025-10-04',
    category: 'Technical',
    description: 'Comprehensive certification covering computer hardware fundamentals, components, troubleshooting, and system maintenance.',
    file: '/Computer_Hardware_Basics.jpg'
  },
  {
    id: '2',
    title: 'Relational Database',
    issuer: 'freeCodeCamp',
    issueDate: '2025-01-24',
    category: 'Technical',
    description: 'Certificate in digital marketing strategies, analytics, and campaign optimization.',
    file: '/Relational_Database_V8.png'
  },
  {
    id: '3',
    title: 'Info Session Basic Python',
    issuer: 'DICT Region V',
    issueDate: '2025-11-15',
    category: 'Academic',
    description: 'Info Session on Basic Python Programming which introduces participants to essential Python concepts—including variables, data types, operators, control structures, and functions, laying the groundwork for future programming advancement.',
    file: '/4-Hour Info Session Basic Python.jpg'
  },
  {
    id: '4',
    title: 'Information Management',
    issuer: 'CodeChum',
    issueDate: '2025-05-17',
    category: 'Academic',
    description: 'CodeChum MySQL Information Management Certification.',
    file: '/Information Management.jpg'
  }
];

// Function to initialize sample data if none exists
export const initializeSampleData = () => {
  const existingTrips = localStorage.getItem('portfolio-trips');
  const existingCertificates = localStorage.getItem('portfolio-certificates');

  if (!existingTrips) {
    localStorage.setItem('portfolio-trips', JSON.stringify(sampleTrips));
  }

  if (!existingCertificates) {
    localStorage.setItem('portfolio-certificates', JSON.stringify(sampleCertificates));
  }
};

// Function to force refresh all data (useful during development)
export const forceRefreshData = () => {
  localStorage.setItem('portfolio-trips', JSON.stringify(sampleTrips));
  localStorage.setItem('portfolio-certificates', JSON.stringify(sampleCertificates));
  console.log('Data refreshed with latest sample data!');
};
