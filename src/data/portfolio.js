/**
 * Edit this file to personalize the site. Keep claims accurate and current.
 * Leave a link as an empty string until you have a public URL you want to share.
 */
export const profile = {
  firstName: 'Richard',
  role: 'Computer Science student',
  university: 'Vellore Institute of Technology, Vellore',
  location: 'Kerala, India',
  email: 'richardmattjacob@gmail.com', // Add a professional email only if you want it publicly visible.
  github: 'https://github.com/Richard-Matt', // Example: https://github.com/your-username
  linkedin: 'https://www.linkedin.com/in/richard-matt-jacob-007436330/', // Add your profile URL if you have one.
  resume: '', // Optional PDF URL. Leave empty until you have a final resume.
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Software', href: '#software' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Beyond code', href: '#beyond-code' },
];

export const skills = [
  { name: 'Python', note: 'Programming' },
  { name: 'Java', note: 'Programming' },
  { name: 'C', note: 'Programming' },
  { name: 'MySQL', note: 'Database fundamentals' },
  { name: 'GitHub', note: 'Version control' },
  { name: 'VS Code', note: 'Development environment' },
  { name: 'LeetCode', note: 'Coding practice' },
  { name: 'HTML', note: 'Web development' },
];

export const softwareProjects = [
  {
    number: '01',
    name: 'Nebula',
    type: 'Personal technology experiment',
    description:
      'An experimental voice-enabled assistant exploring how software, AI services and connected hardware can work together. The backend brings together speech transcription, AI responses, text-to-speech, weather data and device-related endpoints.',
    stack: ['Node.js', 'Gemini API', 'Deepgram', 'Open-Meteo', 'ESP32 exploration'],
    status: 'Completed',
    image: '/images/nebula-dashboard.png',
    imageAlt: 'Authentic screenshot of the Nebula project interface',
    visual: 'nebula',
  },
  {
    number: '02',
    name: 'Python calculator',
    type: 'Programming project',
    description:
      'A beginner programming project built to practise core Python concepts and translate simple requirements into working logic.',
    stack: ['Python'],
    status: 'Completed',
    image: '/images/python-calculator.png',
    imageAlt: 'Authentic screenshot of the Python calculator project',
    visual: 'calculator',
  },
];

export const learningTopics = [
  'Data structures and algorithms',
  'Artificial intelligence and machine learning',
  'Software engineering',
  'Embedded systems and electronics',
  'Image processing and object recognition',
  'Cloud computing',
];

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Malayalam', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'German', level: 'Learning' },
  { name: 'Sorani Kurdish', level: 'Learning' },
];
