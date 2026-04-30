import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';


export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {name: "Services", href: "/services",},
  { name: 'Contact Us', href: '/contact' },
];

export const footerData = {
  aboutUs: {
    title: 'About Us',
    description: 'Safety Bridge is a Quality, Health, Safety, Security Environmental (QHSSE) consultancy and Training Company offering services to clients anywhere in the world covering'
  },
  office: {
    title: 'Office',
    address: {
      line1: '4c Akinola Cole',
      line2: 'Cresent, Adeniyi Jones,',
      line3: 'Ikeja, Lagos, Nigeria'
    },
    email: 'info@kevrongroup.com',
    phone: '+234 201 342 4578'
  },
  quickMenu: {
    title: 'Quick Menu',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Courses', href: '/services' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ]
  },
  socialMedia: [
    { name: 'Facebook', icon: faFacebookF, href: 'https://facebook.com/kevrongroup' },
    { name: 'Twitter', icon: faTwitter, href: 'https://twitter.com/kevrongroup' },
    { name: 'LinkedIn', icon: faLinkedinIn, href: 'https://linkedin.com/company/kevrongroup' },
    { name: 'Instagram', icon: faInstagram, href: 'https://instagram.com/kevrongroup' }
  ]
};

export const SafetyBridgeData = [
  " Environmental Impact Assessment(EIA) and Compliance Monitoring",
  "Environmental & Wastes Mgt services",
  "Statutory/Lifting Equipment Calibration, Inspection and certification",
  "ISO QMS, EMS, OHSMS Certification",
  "HSE Consultancy and Trainings Services",
  "Facility Management services.",
  "Fire Fighting & Protection System Installation (Alarms & Detection Systems, Fire Hydrants, Sprinkler, Fire Extinguishers etc) ",
  "Security Systems Installation and maintenance.",
  "Personal Protective Equipment (PPE) Supplies",
  "Technical Manpower Supplies",
  "Interested in buying materials"
]

export const Safety = [
  {
    id: "1",
    title: "Environmental Impact Assessment (EIA) & Compliance Monitoring",
    description: "We provide comprehensive environmental impact assessments and ensure full regulatory compliance for projects.",
    outline: [
      "Environmental impact studies and reporting",
      "Regulatory compliance monitoring",
      "Environmental audits and risk assessments",
      "Sustainability planning and advisory",
    ],
  },
  {
    id: "2",
    title: "Statutory & Lifting Equipment Calibration, Inspection & Certification",
    description: "We ensure all equipment meets statutory safety standards through proper inspection and certification.",
    outline: [
      "Lifting equipment inspection",
      "Calibration of industrial tools",
      "Certification compliance services",
      "Routine maintenance and safety checks",
    ],
  },
  {
    id: "3",
    title: "ISO QMS, EMS & OHSMS Certification",
    description: "We help organizations achieve internationally recognized ISO certifications.",
    outline: [
      "ISO 9001 (Quality Management Systems)",
      "ISO 14001 (Environmental Management Systems)",
      "ISO 45001 (Occupational Health & Safety)",
      "Documentation and audit preparation",
    ],
  },
  {
    id: "4",
    title: "HSE Consultancy & Training Services",
    description: "Expert health, safety, and environmental consultancy with industry-focused training programs.",
    outline: [
      "Workplace safety training",
      "HSE policy development",
      "Risk assessment and hazard control",
      "Emergency response training",
    ],
  },
  {
    id: "5",
    title: "Facility Management Services",
    description: "End-to-end facility management solutions to maintain and optimize operations.",
    outline: [
      "Building maintenance",
      "Utilities management",
      "Cleaning and janitorial services",
      "Operational support services",
    ],
  },
  {
    id: "6",
    title: "Fire Fighting & Protection System Installation",
    description: "Installation and maintenance of modern fire protection systems.",
    outline: [
      "Fire alarm and detection systems",
      "Fire hydrants and sprinkler systems",
      "Fire extinguishers installation",
      "Fire safety compliance solutions",
    ],
  },
];
