import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';


export const navLinks = [
  { name: "About", href: "/about" },
  {
    name: "Services", href: "/services",
    children: [
      { name: "HSE Consultancy and Trainings Services", href: "/HSE" },
      { name: "Environmental & Wastes Mgt services ", href: "/wastemgt" }
    ],
  },
  {
    name: "Courses", href: "/courses", children: [
      { name: "Facility Management services.", href: "/facilitymanagement" },
      { name: " Fire Fighting & Protection System Installation", href: "/Firefighting" },
    ]
  },
  { name: "Blog", href: "/blog" },
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
      { name: 'Courses', href: '/courses' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Training Calendar', href: '/training-calendar' },
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
]
