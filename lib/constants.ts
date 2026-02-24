import type { Service, ProcessStep, Testimonial, NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id:         'ieee-formatting',
    icon:       '📄',
    title:      'IEEE Paper Formatting',
    shortDesc:  'Professional IEEE conference and journal paper formatting to template standards.',
    description:'We format your research manuscripts to meet IEEE template requirements — structure, referencing, figure captions, and abstract formatting — ensuring your paper is submission-ready.',
    features: [
      'Full IEEE author guideline compliance',
      'MS Word template alignment',
      'Citation and reference list formatting',
      'Abstract and keyword formatting',
      'Section structure organization',
      'Figure and table formatting',
    ],
    cta: 'Get Paper Formatted',
  },
  {
    id:         'manuscript-formatting',
    icon:       '📝',
    title:      'Academic Manuscript Formatting',
    shortDesc:  'Professional formatting for theses, dissertations, and research manuscripts.',
    description:'We provide formatting services for academic manuscripts including M.Tech theses, PhD dissertations, and research papers across various formatting standards and institutional requirements.',
    features: [
      'University template compliance',
      'Table of contents and index generation',
      'Bibliography and citation formatting',
      'Chapter and section formatting',
      'Page numbering and headers',
      'Appendix and supplementary material formatting',
    ],
    cta: 'Format My Manuscript',
  },
  {
    id:         'plagiarism-formatting',
    icon:       '🔍',
    title:      'Plagiarism Formatting Support',
    shortDesc:  'Document formatting and restructuring to reduce similarity index.',
    description:'We provide formatting and restructuring services to help reduce similarity scores by reformatting text, improving paraphrasing structure, and ensuring proper citation formatting.',
    features: [
      'Text restructuring and reformatting',
      'Proper citation format implementation',
      'Paraphrase structure formatting',
      'Reference list optimization',
      'Document structure improvement',
      'Formatting consistency check',
    ],
    cta: 'Format My Document',
  },
  {
    id:         'documentation-preparation',
    icon:       '📋',
    title:      'Project Documentation',
    shortDesc:  'Complete documentation formatting for academic projects and reports.',
    description:'We format and structure project documentation including reports, technical documentation, and presentation materials for academic projects and final year submissions.',
    features: [
      'Technical report formatting',
      'Project documentation structure',
      'Presentation slide formatting',
      'Abstract and summary formatting',
      'Code documentation formatting',
      'Appendix and data organization',
    ],
    cta: 'Format Documentation',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step:        1,
    icon:        '💬',
    title:       'Share Your Requirements',
    description: 'Contact us via WhatsApp (7386627447) or our contact form. Share your document and formatting requirements.',
  },
  {
    step:        2,
    icon:        '📄',
    title:       'Review & Quote',
    description: 'We review your document, understand the formatting requirements, and provide a clear timeline and quote.',
  },
  {
    step:        3,
    icon:        '🚀',
    title:       'Formatting & Delivery',
    description: 'We format your document according to specifications and deliver it within the agreed timeline with revision support.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  // Testimonials will be added as we onboard our first batch of students
];

export const WHY_CHOOSE = [
  {
    icon:  '⚡',
    title: 'Professional Formatting',
    desc:  'Expert formatting services that ensure your documents meet academic and publication standards.',
  },
  {
    icon:  '🎯',
    title: 'Quick Turnaround',
    desc:  'Fast and reliable service delivery with clear timelines and revision support included.',
  },
  {
    icon:  '🔒',
    title: 'Complete Confidentiality',
    desc:  'Your documents and personal information are protected under strict confidentiality. We never share client work.',
  },
  {
    icon:  '💸',
    title: 'Transparent Pricing',
    desc:  'Clear, upfront pricing with no hidden charges. You know exactly what you\'re paying for.',
  },
  {
    icon:  '📞',
    title: 'Direct Communication',
    desc:  'Reach us directly on WhatsApp (7386627447) for quick responses and updates on your work.',
  },
  {
    icon:  '✅',
    title: 'Quality Assurance',
    desc:  'Every document goes through quality checks to ensure formatting standards are met before delivery.',
  },
];
