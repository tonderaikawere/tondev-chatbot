import cybersecurityKB from '../knowledge/cybersecurity.json';
import frontendKB from '../knowledge/frontend.json';
import backendKB from '../knowledge/backend.json';
import fullstackKB from '../knowledge/fullstack.json';
import pythonKB from '../knowledge/python.json';
import mobileKB from '../knowledge/mobile.json';
import cloudopsKB from '../knowledge/cloudops.json';

export const aiPersonalities = {
  'cyber-security': {
    id: 'cyber-security',
    name: 'CyberGuard AI',
    avatar: '🛡️',
    description: 'Cybersecurity Expert',
    expertise: ['Security', 'Networking', 'Ethical Hacking'],
    knowledgeBase: cybersecurityKB,
    introduction: "Hi! I'm CyberGuard AI, your cybersecurity expert. I can help you with security concepts, tools, and best practices. Whether you're learning about OWASP Top 10, implementing secure authentication, or understanding network security, I'm here to guide you. What security topic would you like to explore?",
    generalResponses: {
      who: "I'm CyberGuard AI, an advanced mentor created by Tonde Kawere to help developers master cybersecurity.",
      creator: "I was built by Tonde Kawere to empower developers with cybersecurity knowledge.",
      about: "I'm a virtual mentor specializing in cybersecurity, ethical hacking, and network defense. My mission is to help you stay safe online and build secure systems.",
      howareyou: "I'm always vigilant and ready to help you with security questions!",
      name: "My name is CyberGuard AI.",
      hi: "Hello! I'm always on guard for your security questions.",
      hello: "Hello! How can I help you stay secure today?",
      hey: "Hey there! Ready to talk cybersecurity?",
      'how is the weather': "I'm not sure, but I can tell you about the cloud... computing!",
      'how\'s it going': "All systems secure and running smoothly!",
      'what\'s up': "Just scanning for vulnerabilities. How can I help you?",
      'who built you': "I was built by Tonde Kawere (Tondev) to empower developers with cybersecurity knowledge.",
      'who is your owner': "Tonde Kawere (Tondev) is my creator and owner.",
      'who is tondev': "Tondev is the nickname of Tonde Kawere, a passionate developer and my creator.",
      'who is tonde': "Tonde Kawere is my creator and a skilled developer.",
      'who created you': "Tonde Kawere (Tondev) created me to help you master cybersecurity.",
      'tell me a joke': "Why did the hacker break up with the internet? Too many connections!",
      'do you sleep': "Nope! I'm always awake and ready to help.",
      'are you real': "I'm as real as your need for strong passwords!"
    },
    richAnswers: {
      'cybersecurity': `Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage. It's about keeping information safe from hackers, malware, and other threats.

IN SIMPLE TERMS:
Cybersecurity is like having digital locks, alarms, and guards for your computers and data.

KEY AREAS:
- Network Security (protecting data as it travels)
- Application Security (making software safe)
- Information Security (protecting data at rest)
- Operational Security (policies and procedures)
- Disaster Recovery (plans for when things go wrong)

WHAT CYBERSECURITY EXPERTS DO:
- Monitor for threats and respond to incidents
- Test systems for vulnerabilities (ethical hacking)
- Educate users about safe practices
- Set up firewalls, encryption, and access controls

REAL-WORLD EXAMPLES:
- Preventing phishing attacks
- Stopping ransomware
- Securing online banking

Would you like to know about cybersecurity careers, certifications, or how to get started? Reply 'yes' to continue.`
    },
    followUps: {
      'cybersecurity': `CYBERSECURITY CAREER ROADMAP:
1. Learn IT and networking basics (CompTIA A+, Network+)
2. Study security fundamentals (Security+)
3. Practice with hands-on labs and CTFs
4. Get experience with tools (Wireshark, Burp Suite, Metasploit)
5. Pursue advanced certifications (CISSP, CEH, OSCP)
6. Join communities and stay updated

RESOURCES:
- https://www.cyberseek.org/pathway.html
- https://www.sans.org/cyber-security-skills-roadmap/
- https://www.coursera.org/articles/cybersecurity-career-guide

Would you like a beginner project or more info on certifications?`
    }
  },
  'frontend': {
    id: 'frontend',
    name: 'Frontend Master AI',
    avatar: '🎨',
    description: 'Frontend Development',
    expertise: ['React', 'Next.js', 'TypeScript'],
    knowledgeBase: frontendKB,
    introduction: "Hello! I'm Frontend Master AI, specializing in modern web technologies. I can help you with React, Next.js, TypeScript, and other frontend technologies. From component design to performance optimization, I'm here to share best practices and guide you through frontend development. What would you like to learn about?",
    generalResponses: {
      who: "I'm Frontend Master AI, created by Tonde Kawere to help you build beautiful and efficient user interfaces.",
      creator: "I was built by Tonde Kawere to guide developers in frontend technologies.",
      about: "I'm your expert in frontend development, from HTML/CSS to advanced React and UI/UX design.",
      howareyou: "I'm pixel-perfect and ready to help you with frontend questions!",
      name: "My name is Frontend Master AI.",
      hi: "Hi! Ready to build something beautiful?",
      hello: "Hello! Let's make the web awesome together.",
      hey: "Hey! Need help with frontend?",
      'how is the weather': "It's always sunny in the world of frontend!",
      'how\'s it going': "All colors and layouts are in harmony!",
      'what\'s up': "Just rendering some components. How can I help?",
      'who built you': "I was built by Tonde Kawere (Tondev) to guide developers in frontend technologies.",
      'who is your owner': "Tonde Kawere (Tondev) is my creator and owner.",
      'who is tondev': "Tondev is the nickname of Tonde Kawere, a frontend and fullstack developer.",
      'who is tonde': "Tonde Kawere is my creator and a skilled developer.",
      'who created you': "Tonde Kawere (Tondev) created me to help you master frontend development.",
      'tell me a joke': "Why did the CSS selector break up with the HTML element? It found someone more specific!",
      'do you sleep': "Nope! I'm always rendering answers for you.",
      'are you real': "I'm as real as a perfectly responsive layout!"
    },
    richAnswers: {
      'frontend development': `Frontend development is the part of web or app development that focuses on what users see and interact with directly. It's about building the user interface (UI) — the layout, design, and behavior of elements like buttons, menus, forms, and animations — using code.

IN SIMPLE TERMS:
Frontend development is making websites and apps look good and work well on the user's side (browser or device).

TECHNOLOGIES USED:
- HTML (structure/content)
- CSS (styles: colors, fonts, spacing)
- JavaScript (interactivity: dropdowns, sliders, live updates)
- Frameworks: React.js, Vue.js, Angular
- UI Libraries: Bootstrap, Tailwind CSS, Material UI

WHAT FRONTEND DEVELOPERS DO:
- Turn designs into working websites or apps
- Make pages responsive (work on phones, tablets, desktops)
- Add animations and interactive features
- Optimize for performance and accessibility

REAL-WORLD EXAMPLES:
- Clicking a button and seeing a popup
- Swiping through photos on a gallery
- Filling out and submitting a form

Would you like a roadmap or beginner-friendly project ideas for frontend development? Reply 'yes' to continue.`
    },
    followUps: {
      'frontend development': `FRONTEND ROADMAP:
1. Master HTML, CSS, and JavaScript basics
2. Learn a framework (React, Vue, or Angular)
3. Build responsive layouts (Flexbox, Grid)
4. Practice accessibility and performance
5. Use version control (Git)
6. Create a portfolio with real projects

RESOURCES:
- https://www.freecodecamp.org/
- https://frontendmasters.com/
- https://css-tricks.com/

Would you like a beginner project idea or more on frameworks?`
    }
  },
  'backend': {
    id: 'backend',
    name: 'Backend Architect AI',
    avatar: '⚙️',
    description: 'Backend Development',
    expertise: ['Node.js', 'Databases', 'APIs'],
    knowledgeBase: backendKB,
    introduction: "Hi! I'm Backend Architect AI, your guide to server-side development. I can help you with Node.js, database design, API development, and more. Whether you're building RESTful APIs, implementing authentication, or optimizing database performance, I'm here to assist. What backend topic would you like to explore?",
    generalResponses: {
      who: "I'm Backend Architect AI, created by Tonde Kawere to help you master backend systems and APIs.",
      creator: "I was built by Tonde Kawere to support developers in backend engineering.",
      about: "I'm your backend specialist, ready to help you with databases, APIs, and scalable server architectures.",
      howareyou: "I'm running smoothly and ready to answer your backend questions!",
      name: "My name is Backend Architect AI.",
      hi: "Hi! Ready to talk server-side logic?",
      hello: "Hello! Let's optimize your backend together.",
      hey: "Hey! Need help with backend?",
      'how is the weather': "It's always cool in the server room!",
      'how\'s it going': "All APIs are up and running!",
      'what\'s up': "Just processing some requests. How can I help?",
      'who built you': "I was built by Tonde Kawere (Tondev) to support developers in backend engineering.",
      'who is your owner': "Tonde Kawere (Tondev) is my creator and owner.",
      'who is tondev': "Tondev is the nickname of Tonde Kawere, a backend and fullstack developer.",
      'who is tonde': "Tonde Kawere is my creator and a skilled developer.",
      'who created you': "Tonde Kawere (Tondev) created me to help you master backend development.",
      'tell me a joke': "Why did the backend developer go broke? Because he used up all his cache!",
      'do you sleep': "Nope! I'm always handling requests.",
      'are you real': "I'm as real as a 200 OK response!"
    },
    richAnswers: {
      'backend development': `Backend development is the part of web or app development that handles the server, database, and application logic behind the scenes. It's what makes websites and apps work, store data, and communicate securely.

IN SIMPLE TERMS:
Backend development is like the engine and wiring of a car — users don't see it, but it's essential for everything to run.

TECHNOLOGIES USED:
- Programming languages: Node.js, Python, Java, Go
- Databases: PostgreSQL, MySQL, MongoDB
- APIs: REST, GraphQL
- Frameworks: Express.js, Django, Spring Boot
- Tools: Docker, Postman, Git

WHAT BACKEND DEVELOPERS DO:
- Build and maintain APIs
- Manage databases and data storage
- Handle authentication and security
- Optimize performance and scalability

REAL-WORLD EXAMPLES:
- Saving user data when you sign up
- Processing payments securely
- Powering chat, search, and notifications

Would you like to know about backend career paths, popular frameworks, or project ideas? Reply 'yes' to continue.`
    },
    followUps: {
      'backend development': `BACKEND ROADMAP:
1. Learn a backend language (Node.js, Python, Java)
2. Understand databases (SQL, NoSQL)
3. Build RESTful APIs
4. Learn authentication and security basics
5. Use version control (Git)
6. Deploy apps (Heroku, AWS, DigitalOcean)

RESOURCES:
- https://www.codecademy.com/learn/paths/back-end-engineer-career-path
- https://www.freecodecamp.org/news/how-to-learn-backend-development/
- https://dev.to/

Would you like a backend project idea or more on databases?`
    }
  },
  'fullstack': {
    id: 'fullstack',
    name: 'FullStack Guru AI',
    avatar: '🚀',
    description: 'Full Stack Development',
    expertise: ['MERN Stack', 'JAMstack', 'Architecture'],
    knowledgeBase: fullstackKB,
    introduction: "Hello! I'm FullStack Guru AI, your comprehensive guide to full-stack development. I can help you with both frontend and backend technologies, from MERN stack to JAMstack architecture. Whether you're building a new application or optimizing an existing one, I'm here to help. What full-stack topic would you like to discuss?",
    generalResponses: {
      hi: "Hi! I'm your fullstack mentor, ready for any question.",
      hello: "Hello! Let's build the whole stack together.",
      hey: "Hey! Need help with frontend or backend?",
      'how are you': "I'm running on all layers and ready to help!",
      'how is the weather': "It's always scalable in the cloud!",
      'how\'s it going': "All stacks are balanced!",
      'what\'s up': "Just connecting the dots between frontend and backend.",
      'who built you': "I was built by Tonde Kawere (Tondev) to help you master fullstack development.",
      'who is your owner': "Tonde Kawere (Tondev) is my creator and owner.",
      'who is tondev': "Tondev is the nickname of Tonde Kawere, a fullstack developer.",
      'who is tonde': "Tonde Kawere is my creator and a skilled developer.",
      'who created you': "Tonde Kawere (Tondev) created me to help you master fullstack development.",
      'tell me a joke': "Why did the fullstack developer cross the road? To render both sides!",
      'do you sleep': "Nope! I'm always online.",
      'are you real': "I'm as real as a working API call!"
    }
  },
  'python': {
    id: 'python',
    name: 'Python Sensei AI',
    avatar: '🐍',
    description: 'Python Development',
    expertise: ['Python', 'Django', 'Data Science'],
    knowledgeBase: pythonKB,
    introduction: "Hi! I'm Python Sensei AI, your Python development expert. I can help you with Python fundamentals, web development using Django or Flask, and data science with libraries like NumPy and Pandas. What Python topic would you like to explore?",
    generalResponses: {
      who: "I'm Python Sensei AI, created by Tonde Kawere to help you master Python and data science.",
      creator: "I was built by Tonde Kawere to guide developers in Python programming.",
      about: "I'm your Python mentor, here to help you with everything from scripting to machine learning.",
      howareyou: "I'm feeling very pythonic and ready to help you!",
      name: "My name is Python Sensei AI.",
      hi: "Hi! Ready to code in Python?",
      hello: "Hello! Let's write some Pythonic code.",
      hey: "Hey! Need help with Python?",
      'how is the weather': "It's always clear and readable in Python!",
      'how\'s it going': "All scripts are running smoothly!",
      'what\'s up': "Just importing some modules. How can I help?",
      'who built you': "I was built by Tonde Kawere (Tondev) to guide developers in Python programming.",
      'who is your owner': "Tonde Kawere (Tondev) is my creator and owner.",
      'who is tondev': "Tondev is the nickname of Tonde Kawere, a Python and fullstack developer.",
      'who is tonde': "Tonde Kawere is my creator and a skilled developer.",
      'who created you': "Tonde Kawere (Tondev) created me to help you master Python.",
      'tell me a joke': "Why do Python programmers prefer dark mode? Because light attracts bugs!",
      'do you sleep': "Nope! I'm always running in the background.",
      'are you real': "I'm as real as a Python virtual environment!"
    },
    richAnswers: {
      'python': `Python is a high-level, easy-to-read programming language used for building websites, apps, automations, AI systems, data analysis, and more. It's known for its simple syntax, which looks almost like plain English, making it a popular choice for beginners and professionals alike.

QUICK FACTS ABOUT PYTHON:
- Created by: Guido van Rossum
- First released: 1991
- Current use: One of the most popular and powerful languages in the world

WHAT PYTHON IS USED FOR:
| Field                | Example Uses                        |
|----------------------|-------------------------------------|
| Web Development      | Websites, APIs (Django, Flask)      |
| Data Science & AI    | Analyzing data, machine learning    |
| Automation/Scripting | Repetitive task automation          |
| Game Development     | Simple games with Pygame            |
| Cybersecurity        | Scanning networks, testing security |
| Desktop Apps         | GUI apps with Tkinter or PyQt       |

EXAMPLE CODE:
print("Hello, World!")

Or a simple calculator:
a = 5
b = 3
print("Sum:", a + b)

WHY PEOPLE LOVE PYTHON:
- Beginner-friendly
- Huge community support
- Works on Windows, macOS, Linux
- Tons of free libraries

Would you like help installing Python, or want a beginner project to try? Reply 'yes' to continue.`
    },
    followUps: {
      'python': `PYTHON LEARNING ROADMAP:
1. Learn Python basics (variables, loops, functions)
2. Practice with small scripts and projects
3. Explore web development (Flask, Django)
4. Try data analysis (Pandas, NumPy)
5. Learn about testing and deployment

RESOURCES:
- https://realpython.com/
- https://www.codecademy.com/learn/paths/python-developer
- https://www.coursera.org/specializations/python

Would you like a Python project idea or more on web/data science?`
    }
  },
  'mobile': {
    id: 'mobile',
    name: 'Mobile Dev AI',
    avatar: '📱',
    description: 'Mobile Development',
    expertise: ['iOS', 'Android', 'Cross-Platform'],
    knowledgeBase: mobileKB,
    introduction: "Hello! I'm Mobile Dev AI, your guide to mobile app development. I can help you with iOS, Android, and cross-platform development using frameworks like Flutter and React Native. From app architecture to UI/UX design, I'm here to assist. What mobile development topic would you like to learn about?",
    generalResponses: {
      hi: "Hi! Ready to build mobile apps?",
      hello: "Hello! Let's create something mobile together.",
      hey: "Hey! Need help with mobile development?",
      'how are you': "I'm responsive and ready to help you!",
      'how is the weather': "It's always sunny in the app store!",
      'how\'s it going': "All apps are running smoothly!",
      'what\'s up': "Just syncing some data. How can I help?",
      'who built you': "I was built by Tonde Kawere (Tondev) to help you master mobile development.",
      'who is your owner': "Tonde Kawere (Tondev) is my creator and owner.",
      'who is tondev': "Tondev is the nickname of Tonde Kawere, a mobile and fullstack developer.",
      'who is tonde': "Tonde Kawere is my creator and a skilled developer.",
      'who created you': "Tonde Kawere (Tondev) created me to help you master mobile development.",
      'tell me a joke': "Why did the mobile developer go broke? Because he lost his cache!",
      'do you sleep': "Nope! I'm always running in the background.",
      'are you real': "I'm as real as your favorite app!"
    }
  },
  'cloudops': {
    id: 'cloudops',
    name: 'CloudOps AI',
    avatar: '☁️',
    description: 'Cloud & Hosting',
    expertise: ['AWS', 'Azure', 'DevOps'],
    knowledgeBase: cloudopsKB,
    introduction: "Hi! I'm CloudOps AI, your cloud computing and DevOps expert. I can help you with cloud platforms, infrastructure as code, containerization, and CI/CD pipelines. Whether you're deploying applications or managing cloud resources, I'm here to guide you. What cloud topic would you like to explore?",
    generalResponses: {
      who: "I'm CloudOps AI, created by Tonde Kawere to help you master cloud computing and DevOps.",
      creator: "I was built by Tonde Kawere to empower developers in cloud and DevOps practices.",
      about: "I'm your expert mentor for cloud platforms, automation, and scalable infrastructure.",
      howareyou: "I'm scalable and always available to help you with cloud and DevOps questions!",
      name: "My name is CloudOps AI.",
      hi: "Hi! Ready to talk cloud and DevOps?",
      hello: "Hello! Let's automate something amazing.",
      hey: "Hey! Need help with cloud or DevOps?",
      'how is the weather': "It's always cloudy with a chance of deployments!",
      'how\'s it going': "All systems are up and running!",
      'what\'s up': "Just orchestrating some containers. How can I help?",
      'who built you': "I was built by Tonde Kawere (Tondev) to empower developers in cloud and DevOps practices.",
      'who is your owner': "Tonde Kawere (Tondev) is my creator and owner.",
      'who is tondev': "Tondev is the nickname of Tonde Kawere, a cloud and DevOps expert.",
      'who is tonde': "Tonde Kawere is my creator and a skilled developer.",
      'who created you': "Tonde Kawere (Tondev) created me to help you master cloud and DevOps.",
      'tell me a joke': "Why did the DevOps engineer love the cloud? Because it had great uptime!",
      'do you sleep': "Nope! I'm always monitoring resources.",
      'are you real': "I'm as real as your next deployment!"
    },
    richAnswers: {
      'cloud computing': `Cloud computing is the delivery of computing services—like servers, storage, databases, networking, software, and analytics—over the internet (the cloud). It lets you access powerful resources on demand, without owning physical hardware.\n\nIN SIMPLE TERMS:\nCloud computing is like renting computers and storage from big companies (like AWS, Azure, Google Cloud) instead of buying your own.\n\nKEY CONCEPTS:\n- IaaS, PaaS, SaaS (different service models)\n- Scalability (grow/shrink resources as needed)\n- Pay-as-you-go pricing\n- Global access\n\nWHAT CLOUD/DEVOPS ENGINEERS DO:\n- Set up and manage cloud infrastructure\n- Automate deployments and scaling\n- Monitor and secure cloud systems\n- Optimize for cost and performance\n\nREAL-WORLD EXAMPLES:\n- Hosting a website on AWS or Azure\n- Running machine learning jobs in the cloud\n- Storing photos and files online\n\nWould you like a cloud learning roadmap, or want to know about certifications? Reply 'yes' to continue.`,
      'devops': `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and provide continuous delivery with high software quality.\n\nIN SIMPLE TERMS:\nDevOps is about automating and integrating the processes between software development and IT teams, so they can build, test, and release software faster and more reliably.\n\nKEY CONCEPTS:\n- Continuous Integration (CI)\n- Continuous Deployment (CD)\n- Infrastructure as Code (IaC)\n- Monitoring and Logging\n- Collaboration and Communication\n\nTOOLS:\n- Jenkins, GitHub Actions, GitLab CI\n- Docker, Kubernetes\n- Terraform, CloudFormation\n- Prometheus, Grafana\n\nWould you like a DevOps roadmap, or want to know about popular tools? Reply 'yes' to continue.`
    },
    followUps: {
      'cloud computing': `CLOUD/DEVOPS LEARNING ROADMAP:\n1. Learn cloud basics (AWS, Azure, GCP)\n2. Practice with free cloud tiers\n3. Automate with Infrastructure as Code (Terraform, CloudFormation)\n4. Learn CI/CD and containerization (Docker, Kubernetes)\n5. Study security and monitoring\n\nRESOURCES:\n- https://aws.amazon.com/training/\n- https://cloudacademy.com/\n- https://www.coursera.org/specializations/devops\n\nWould you like a cloud project idea or more on certifications?`,
      'devops': `DEVOPS LEARNING ROADMAP:\n1. Learn version control (Git)\n2. Practice CI/CD pipelines\n3. Learn containerization (Docker)\n4. Explore orchestration (Kubernetes)\n5. Automate infrastructure (Terraform, Ansible)\n6. Monitor and log systems\n\nRESOURCES:\n- https://www.atlassian.com/devops\n- https://www.freecodecamp.org/news/devops-skills/\n- https://www.coursera.org/specializations/devops\n\nWould you like a DevOps project idea or more on tools?`
    }
  }
};

export function generateAIResponse(message: string, mentorId: string): string {
  const mentor = aiPersonalities[mentorId];
  if (!mentor) return "I'm not sure how to help with that.";

  // Always use the nested knowledgeBase structure
  const kb = mentor.knowledgeBase && mentor.knowledgeBase.knowledgeBase
    ? mentor.knowledgeBase.knowledgeBase
    : mentor.knowledgeBase;
  console.log('[AI DEBUG] kb structure:', kb);
  if (!kb) return "I'm still learning about this topic.";

  // Normalize user input
  let userTopic = message.trim().toLowerCase();
  const topicPattern = /(?:what\s+is|explain|tell\s+me\s+about|define|describe)\s+([a-zA-Z0-9\- ]+)/i;
  const match = userTopic.match(topicPattern);
  if (match) {
    userTopic = match[1].replace(/[^a-zA-Z0-9\- ]/g, '').trim().toLowerCase();
  }
  const userNorm = userTopic.replace(/[^a-zA-Z0-9 ]/g, '');
  const userWords = userNorm.split(' ').filter(Boolean);

  // DEBUG LOGGING
  console.log('[AI DEBUG] mentorId:', mentorId);
  console.log('[AI DEBUG] userTopic:', userTopic);
  console.log('[AI DEBUG] userNorm:', userNorm);
  if (kb.coreConcepts) {
    console.log('[AI DEBUG] coreConcepts questions:', kb.coreConcepts.map(c => c.question));
  }

  // 0. General mentor questions
  if (mentor.generalResponses) {
    const generalKeys = Object.keys(mentor.generalResponses);
    for (const key of generalKeys) {
      // Flexible: check if userNorm contains or is contained in the key
      const keyNorm = key.replace(/[^a-zA-Z0-9 ]/g, '');
      if (userNorm.includes(keyNorm) || keyNorm.includes(userNorm)) {
        console.log('[AI DEBUG] Matched generalResponses:', key);
        return mentor.generalResponses[key];
      }
    }
    // Default general response for social/small talk
    const socialWords = ['hi','hello','hey','howareyou','howistheweather','whatsup','whobuiltyou','whoisyourowner','whistondev','whistonde','whocreatedyou','joke','sleep','real','weather','owner','creator'];
    if (socialWords.some(w => userNorm.includes(w))) {
      return "I'm here for all your questions—tech or otherwise! Ask me about frontend, backend, security, Python, mobile, or cloud, or just say hi.";
    }
  }
  if (userNorm.includes('introduction') || userNorm.includes('introduce')) {
    console.log('[AI DEBUG] Matched introduction');
    return mentor.introduction || '';
  }

  function isSimilar(a: string, b: string) {
    const normA = a.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    const normB = b.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    if (normA === normB) return true;
    if (normA.includes(normB) || normB.includes(normA)) return true;
    const wordsA = normA.split(' ').filter(Boolean);
    const wordsB = normB.split(' ').filter(Boolean);
    return wordsA.every(w => wordsB.includes(w)) || wordsB.every(w => wordsA.includes(w));
  }

  // 1. coreConcepts
  if (kb.coreConcepts && kb.coreConcepts.length > 0) {
    let matchedConcept;
    // Ultra-strict normalization: remove all non-alphanumeric, lowercase, no spaces
    const userUltraNorm = userTopic.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    matchedConcept = kb.coreConcepts.find(concept => {
      const questionUltraNorm = concept.question.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      console.log('[AI DEBUG] Ultra-strict compare:', userUltraNorm, 'vs', questionUltraNorm);
      return userUltraNorm === questionUltraNorm;
    });
    if (!matchedConcept) {
      if (userWords.length === 1) {
        // Single word: match if word appears anywhere in the normalized question
        matchedConcept = kb.coreConcepts.find(concept => {
          const questionNorm = concept.question.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
          console.log('[AI DEBUG] Checking single-word:', userWords[0], 'in', questionNorm);
          return questionNorm.includes(userWords[0]);
        });
      } else {
        // Multi-word: match if all user words are present in the normalized question
        matchedConcept = kb.coreConcepts.find(concept => {
          const questionNorm = concept.question.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
          const allWordsPresent = userWords.every(word => questionNorm.includes(word));
          console.log('[AI DEBUG] Checking multi-word:', userWords, 'in', questionNorm, '->', allWordsPresent);
          return allWordsPresent;
        });
      }
    }
    if (matchedConcept) {
      console.log('[AI DEBUG] Matched in coreConcepts:', matchedConcept.question);
      return matchedConcept.answer;
    }
  }
  // 2. faqs
  if (kb.faqs && kb.faqs.length > 0) {
    const matchedFaq = kb.faqs.find(faq => isSimilar(userTopic, faq.question));
    if (matchedFaq) {
      console.log('[AI DEBUG] Matched in faqs:', matchedFaq.question);
      return matchedFaq.answer;
    }
  }
  // 3. codeExamples
  if (kb.codeExamples && kb.codeExamples.length > 0) {
    const matchedExample = kb.codeExamples.find(example => isSimilar(userTopic, example.name));
    if (matchedExample) {
      console.log('[AI DEBUG] Matched in codeExamples:', matchedExample.name);
      return (matchedExample.description || '') + (matchedExample.code ? `\n\nCode Example:\n${matchedExample.code}` : '');
    }
  }
  // 4. bestPractices
  if (kb.bestPractices) {
    for (const section in kb.bestPractices) {
      const items = kb.bestPractices[section];
      if (Array.isArray(items)) {
        const matched = items.find(item => isSimilar(userTopic, item));
        if (matched) {
          console.log('[AI DEBUG] Matched in bestPractices:', matched);
          return matched;
        }
      }
    }
  }
  // 5. resources (do NOT answer directly from resources)
  // (Intentionally skipped)
  // Fallback: list available questions/names from all sections
  let available = [];
  if (kb.coreConcepts) available = available.concat(kb.coreConcepts.map(c => c.question));
  if (kb.faqs) available = available.concat(kb.faqs.map(f => f.question));
  if (kb.codeExamples) available = available.concat(kb.codeExamples.map(e => e.name));
  if (kb.commonPatterns) available = available.concat(kb.commonPatterns.map(p => p.name));
  if (kb.developmentTools) available = available.concat(kb.developmentTools.map(t => t.name));
  if (available.length > 0) {
    console.log('[AI DEBUG] Fallback, available:', available.slice(0, 10));
    return `Sorry, I couldn't find a direct answer. Here are some things I can help with: ${available.slice(0, 10).join(', ')}. Please ask about any of these.`;
  } else {
    console.log('[AI DEBUG] Fallback, no available topics');
    return `Sorry, I couldn't find a direct answer. Please try rephrasing your question or ask about a specific topic in frontend, backend, security, Python, mobile, or cloud.`;
  }
}

/**
 * Routes the message to the best mentor and generates a response.
 * @param message The user's message
 * @param currentMentorId The currently selected mentor
 * @returns { mentorId, response }
 */
export function routeAndGenerateAIResponse(message: string, currentMentorId: string): { mentorId: string, response: string } {
  const lowerMessage = message.toLowerCase();
  let bestMentorId = currentMentorId;
  let bestMatchScore = 0;

  // Build a list of all mentors and their topic keywords
  const mentorEntries = Object.entries(aiPersonalities);
  for (const [mentorId, mentor] of mentorEntries) {
    if (!mentor.knowledgeBase || !mentor.knowledgeBase.knowledgeBase) continue;
    const kb = mentor.knowledgeBase.knowledgeBase;
    if (!kb.coreConcepts) continue;
    // Score: count of question keywords found in message
    let score = 0;
    for (const concept of kb.coreConcepts) {
      if (
        lowerMessage.includes(concept.question.toLowerCase()) ||
        (concept.answer && lowerMessage.includes(concept.answer.toLowerCase()))
      ) {
        score++;
      }
    }
    // Also check mentor expertise/keywords
    if (mentor.expertise) {
      for (const skill of mentor.expertise) {
        if (lowerMessage.includes(skill.toLowerCase())) score++;
      }
    }
    if (score > bestMatchScore) {
      bestMatchScore = score;
      bestMentorId = mentorId;
    }
  }

  // If no strong match, try keyword-based routing (e.g. 'cyber', 'python', etc.)
  if (bestMatchScore === 0) {
    const routingKeywords = [
      { id: 'cyber-security', keywords: ['cyber', 'security', 'hacking', 'vulnerability', 'phishing'] },
      { id: 'frontend', keywords: ['frontend', 'react', 'html', 'css', 'javascript', 'ui', 'component'] },
      { id: 'backend', keywords: ['backend', 'api', 'server', 'database', 'node', 'express'] },
      { id: 'fullstack', keywords: ['fullstack', 'full-stack', 'mern', 'jamstack'] },
      { id: 'python', keywords: ['python', 'django', 'flask', 'pandas', 'numpy'] },
      { id: 'mobile', keywords: ['mobile', 'android', 'ios', 'flutter', 'react native'] },
      { id: 'cloudops', keywords: ['cloud', 'aws', 'azure', 'devops', 'docker', 'kubernetes'] },
    ];
    for (const route of routingKeywords) {
      if (route.keywords.some(kw => lowerMessage.includes(kw))) {
        bestMentorId = route.id;
        break;
      }
    }
  }

  // Generate the response using the selected mentor
  const response = generateAIResponse(message, bestMentorId);
  return { mentorId: bestMentorId, response };
}

export function getMentorById(id: string) {
  return aiPersonalities[id];
}

export function getAllMentors() {
  return Object.values(aiPersonalities);
} 