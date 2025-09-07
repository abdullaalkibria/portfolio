export const PROFILE = {
  name: 'Abdulla Al‑Kibria',
  shortName: 'Kibria',
  title: 'CSE (Final Year), DUET',
  email: 'abdullaalkibria@gmail.com',
  phone: '(+88) 01829‑815967',
  location: 'Gazipur, Bangladesh',
  links: {
    linkedin: 'https://www.linkedin.com/in/kibriaalak/',
    github: 'https://github.com/abdullaalkibria',
    resume: '/CV_Abdulla_Al_Kibria.pdf'
  }
}

export const EXPERIENCE = [
  {
    role: 'Machine Learning Intern',
    org: 'Brain Station 23',
    period: '3 Mar 2025 – 27 Mar 2025',
    bullets: [
      'Explored supervised & unsupervised ML models and evaluation basics.',
      'Built a small chatbot demo using a pre‑trained Hugging Face model.',
      'Worked with Python, scikit‑learn, and basic NLP preprocessing.'
    ]
  }
]

export const EDUCATION = [
  {
    degree: 'BSc in CSE (Final Year), CGPA 3.02/4.00',
    org: 'Dhaka University of Engineering & Technology (DUET), Gazipur',
    period: 'Nov 2021 – Nov 2025'
  },
  {
    degree: 'Diploma in Computer Technology, CGPA 3.36/4.00',
    org: 'Bangladesh Sweden Polytechnic Institute, Kaptai',
    period: 'Sep 2015 – Oct 2019'
  }
]

export type Project = {
  title: string; tag: 'IoT' | 'Robotics' | 'Research';
  desc: string; links?: { href: string; label: string }[]
}

export const PROJECTS: Project[] = [
  { title: 'FANET Routing Protocol Research', tag: 'Research', desc: 'Improving routing reliability in Flying Ad‑hoc Networks.' },
  { title: 'Smart Fish Farming Monitoring System', tag: 'IoT', desc: 'ESP32 + DO/TDS/EC/Turbidity sensors with Firebase alerts.' },
  { title: 'Wildfire Monitoring & Alert (IoT)', tag: 'IoT', desc: 'Early detection using temp/flame/smoke sensors.', links: [{ href: 'https://github.com/abdullaalkibria/wild_fire_monitoring_and_alert', label: 'GitHub' }] },
  { title: 'Question Vault Security System', tag: 'IoT', desc: 'Secure vault with OTP PINs & SMS alerts.', links: [{ href: 'https://github.com/abdullaalkibria/Question_Vault_Security_Syestem', label: 'GitHub' }] },
  { title: 'MediBot', tag: 'Robotics', desc: 'Autonomous medical delivery robot (Arduino Giga).', links: [{ href: 'https://github.com/abdullaalkibria/MediBot', label: 'GitHub' }] },
  { title: 'Advance Line Follower Robot', tag: 'Robotics', desc: 'Competition‑grade line follower.', links: [{ href: 'https://github.com/abdullaalkibria/Advance_Line_Follower_Robot', label: 'GitHub' }] },
  { title: 'Smart Water Vehicle', tag: 'Robotics', desc: 'Water‑based autonomous vehicle with sonar.' },
  { title: 'IntelliGuard Access', tag: 'IoT', desc: 'ESP8266 + sensors + Firebase + Flutter app.' }
]

export const SKILLS: Record<string, string[]> = {
  'Programming & Tools': ['Arduino', 'C', 'C++', 'Python', 'SQL', 'PL/SQL', 'scikit‑learn', 'NLP basics'],
  'IoT & Robotics': ['ESP32', 'ESP8266', 'Arduino Nano/Giga', 'Flame/Temp/DO/TDS/EC sensors', 'Sonar', 'Firebase dashboards'],
  'Strengths': ['Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Quick Learner'],
  'Languages': ['Bangla (Native)', 'English (Conversational)']
}

export const AWARDS = [
  { title: 'Champion @ Line Follower Robot', org: 'Techtron 2025, University of Asia Pacific', date: '25 Apr 2025' },
  { title: '1st Runner‑up @ Line Follower Robot', org: 'Bitfest‑2025, KUET', date: '04 Jan 2025' },
  { title: 'Champion @ Line Follower Robot', org: '11th GSC National Scientist Mania‑2024', date: '23 Nov 2024' },
  { title: '1st Runner‑Up @ Maze Solver Robot', org: 'Techfest, IIT Bombay Bangladesh Zonal 2024', date: '25 Oct 2024' },
  { title: 'Champion @ Line Follower Robot', org: '6th JUSC National Science Festival‑2024', date: '21 Sep 2024' },
  { title: '2nd Runner‑up @ Advance Line Follower', org: 'DUET Techfest 2023', date: '14 Jul 2023' },
  { title: '1st Runner‑up @ Smart Water Vehicle', org: 'IDPC 2023 (Project Exhibition)', date: '26 Feb 2023' }
]

export const LEADERSHIP = [
  'Vice President of DUET Robotics Club',
  'Co‑Leader of DUET Mars Rover Squad, DUET Robotics Club',
  'Former General Secretary of DUET Robotics Club',
  'Former Additional Network & Communication Secretary of DUET Computer Society'
]
