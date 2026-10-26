export interface NavItem {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'EVENTS', path: '/events' },
  { label: 'COUNCIL', path: '/council' },
  { label: 'STUDENT VOICE', path: '/student-voice' },
];

export const FOOTER_LINKS = {
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About Council', path: '/about' },
    { label: 'Upcoming Events', path: '/events' },
    { label: 'Council Members', path: '/council' },
    { label: 'Student Voice & Feedback', path: '/student-voice' },
  ],
  support: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Campus Guidelines', path: '/about#guidelines' },
    { label: 'Official College Site', path: 'https://www.ppgit.ac.in', isExternal: true },
  ],
  contact: {
    institution: 'PPG Institute of Technology',
    council: 'PPGIT Student Council',
    address: 'Saravanampatti - Thudiyalur Road, Coimbatore, Tamil Nadu 641035',
    email: 'studentcouncil@ppg.edu.in',
    tagline: 'LEAD. REPRESENT. INSPIRE.',
  },
};
