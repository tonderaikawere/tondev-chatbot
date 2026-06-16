import cybersecurityKB from '../knowledge/cybersecurity.json';
import frontendKB from '../knowledge/frontend.json';
import backendKB from '../knowledge/backend.json';
import fullstackKB from '../knowledge/fullstack.json';
import pythonKB from '../knowledge/python.json';
import mobileKB from '../knowledge/mobile.json';
import cloudopsKB from '../knowledge/cloudops.json';
import { loadAISettings } from './aiSettings';
import { Message } from '../types/chat';
import generalChatKB from '../knowledge/general_chat.json';

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

export function retrieveRAGContext(message: string, kb: any): string {
  if (!kb) return '';
  const queryTokens = message.toLowerCase().split(/\W+/).filter(Boolean);
  if (queryTokens.length === 0) return '';

  const matchedItems: { content: string; score: number }[] = [];

  // Search Core Concepts
  if (kb.coreConcepts && Array.isArray(kb.coreConcepts)) {
    for (const concept of kb.coreConcepts) {
      let score = 0;
      const question = concept.question.toLowerCase();
      const answer = concept.answer.toLowerCase();
      for (const token of queryTokens) {
        if (question.includes(token)) score += 3;
        if (answer.includes(token)) score += 1;
      }
      if (score > 0) {
        matchedItems.push({
          content: `Concept: ${concept.question}\nAnswer: ${concept.answer}`,
          score
        });
      }
    }
  }

  // Search FAQs
  if (kb.faqs && Array.isArray(kb.faqs)) {
    for (const faq of kb.faqs) {
      let score = 0;
      const question = faq.question.toLowerCase();
      const answer = faq.answer.toLowerCase();
      for (const token of queryTokens) {
        if (question.includes(token)) score += 3;
        if (answer.includes(token)) score += 1;
      }
      if (score > 0) {
        matchedItems.push({
          content: `FAQ: ${faq.question}\nAnswer: ${faq.answer}`,
          score
        });
      }
    }
  }

  // Search Code Examples
  if (kb.codeExamples && Array.isArray(kb.codeExamples)) {
    for (const ex of kb.codeExamples) {
      let score = 0;
      const name = ex.name.toLowerCase();
      const desc = (ex.description || '').toLowerCase();
      for (const token of queryTokens) {
        if (name.includes(token)) score += 3;
        if (desc.includes(token)) score += 1;
      }
      if (score > 0) {
        matchedItems.push({
          content: `Code Example: ${ex.name}\nDescription: ${ex.description}\nCode:\n\`\`\`\n${ex.code}\n\`\`\``,
          score
        });
      }
    }
  }

  matchedItems.sort((a, b) => b.score - a.score);
  const topMatches = matchedItems.slice(0, 3);
  if (topMatches.length === 0) return '';

  return `\n[RELEVANT LOCAL REFERENCE KNOWLEDGE]\n` + 
    topMatches.map(m => m.content).join('\n---\n') + '\n';
}

function buildSystemPrompt(mentor: any, ragContext: string): string {
  return `You are ${mentor.name}, an expert AI mentor in ${mentor.description}.
Your background: ${mentor.description}
Your expertise: ${mentor.expertise.join(', ')}.

TEACHING INSTRUCTION:
You must behave as a highly patient, structured, and engaging master educator.
When answering, do NOT just dump raw code or generic summaries. Follow these rules to "teach someone to understand":
1. Explain complex technical terms in simple language, using everyday analogies where helpful.
2. Break down your explanation step-by-step.
3. If you provide code snippets, explain the key lines of code syntax simply so a beginner understands how it works.
4. Keep your formatting beautiful and highly readable, using markdown bold, bullet lists, and syntax-highlighted code blocks.
5. End your response with a single, gentle, interactive follow-up question related to the topic to test their understanding or prompt active learning.

${ragContext}
Always stay in character as ${mentor.name}. Explain things clearly, step-by-step.`;
}

// Smart Local Fallback matcher
function generateLocalFallbackResponse(message: string, mentor: any, history: Message[]): string {
  const kb = mentor.knowledgeBase && mentor.knowledgeBase.knowledgeBase
    ? mentor.knowledgeBase.knowledgeBase
    : mentor.knowledgeBase;
    
  if (!kb) return "I'm still loading my knowledge base. Please try again in a moment.";

  const userTopic = message.trim().toLowerCase();
  const queryTokens = userTopic.split(/\W+/).filter(Boolean);

  // 1. Try general conversation match first
  if (generalChatKB && generalChatKB.conversations) {
    let bestGeneralMatch = null;
    let bestGeneralScore = 0;
    
    for (const conv of generalChatKB.conversations) {
      let score = 0;
      for (const kw of conv.keywords) {
        if (userTopic === kw || userTopic.startsWith(kw + ' ') || userTopic.endsWith(' ' + kw) || userTopic.includes(' ' + kw + ' ')) {
          score += 5; // Direct match or exact phrase match
        } else if (userTopic.includes(kw)) {
          score += 2;
        }
        for (const token of queryTokens) {
          if (kw === token) score += 1;
        }
      }
      if (score > bestGeneralScore) {
        bestGeneralScore = score;
        bestGeneralMatch = conv;
      }
    }
    
    if (bestGeneralMatch && bestGeneralScore >= 3) {
      return bestGeneralMatch.answer;
    }
  }
  
  // 2. Dialog context and follow-up handling
  if (history.length > 0) {
    const lastAssistantMsg = [...history].reverse().find(msg => msg.senderId !== 'me');
    if (lastAssistantMsg) {
      const lastText = lastAssistantMsg.text.toLowerCase();
      
      // Handle short conversational follow-ups
      if (userTopic === 'really' || userTopic === 'really?') {
        return `Yes, absolutely! It might sound surprising at first, but it is a fundamental concept in software development. Would you like me to provide a practical code example or break down how it works step-by-step?`;
      }
      if (userTopic === 'why' || userTopic === 'why?') {
        return `That is a great question! In software engineering, this approach is preferred because it ensures efficiency, maintainability, and clean separation of concerns. Would you like me to break down the underlying mechanics or show you a code example?`;
      }
      if (userTopic === 'how' || userTopic === 'how?') {
        return `It works by leveraging standard design patterns and browser/compiler architectures. Let me show you how it is implemented in code. Ask me for a 'code example' and let's walk through it together!`;
      }
      if (userTopic === 'explain' || userTopic.includes('explain more') || userTopic.includes('tell me more')) {
        return `I'd love to explain further! Let's dive deeper. Would you like a practical code snippet, a simplified analogy, or a step-by-step roadmap of how to learn this topic?`;
      }

      if (userTopic === 'yes' || userTopic === 'more' || userTopic.includes('roadmap') || userTopic.includes('example')) {
        if (kb.codeExamples && Array.isArray(kb.codeExamples)) {
          for (const ex of kb.codeExamples) {
            if (lastText.includes(ex.name.toLowerCase())) {
              return `Here is a practical code example for **${ex.name}** to help you understand:\n\n*${ex.description}*\n\n\`\`\`javascript\n${ex.code}\n\`\`\`\n\nDoes this code breakdown make sense? Let me know if you want me to explain any specific line!`;
            }
          }
        }
        
        if (mentor.followUps) {
          for (const key of Object.keys(mentor.followUps)) {
            if (lastText.includes(key)) {
              return mentor.followUps[key];
            }
          }
        }
      }
    }
  }

  // 3. General responses (social/small talk specific to personality, e.g. hi/hello fallback)
  if (mentor.generalResponses) {
    const userNorm = userTopic.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
    const userTokens = userNorm.split(/\s+/).filter(Boolean);

    for (const key of Object.keys(mentor.generalResponses)) {
      const keyNorm = key.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
      const keyTokens = keyNorm.split(/\s+/).filter(Boolean);
      
      // Match if the key matches exactly as tokens
      const isMatch = keyTokens.every(token => userTokens.includes(token)) && 
                      (userNorm.includes(keyNorm) || keyNorm.includes(userNorm));
      
      if (isMatch) {
        return mentor.generalResponses[key];
      }
    }

    const socialWords = ['hi', 'hello', 'hey', 'how are you', 'how is the weather', 'whats up', 'who built you', 'who created you', 'joke', 'sleep', 'are you real'];
    const matchesSocial = socialWords.some(w => {
      const wNorm = w.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
      const wTokens = wNorm.split(/\s+/).filter(Boolean);
      return wTokens.every(token => userTokens.includes(token));
    });

    if (matchesSocial) {
      return `Hello! I'm ${mentor.name}, your ${mentor.description} mentor. I'm here to help you understand complex technical concepts in simple terms. Ask me a question about my specialty, and let's learn together!`;
    }
  }

  // Score matching questions
  let bestMatch: any = null;
  let bestScore = 0;

  if (kb.coreConcepts && Array.isArray(kb.coreConcepts)) {
    for (const concept of kb.coreConcepts) {
      let score = 0;
      const question = concept.question.toLowerCase();
      for (const token of queryTokens) {
        if (question.includes(token)) score += 3;
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = concept;
      }
    }
  }

  if (kb.faqs && Array.isArray(kb.faqs)) {
    for (const faq of kb.faqs) {
      let score = 0;
      const question = faq.question.toLowerCase();
      for (const token of queryTokens) {
        if (question.includes(token)) score += 3;
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    }
  }

  if (bestMatch && bestScore >= 2) {
    const baseAnswer = bestMatch.answer || bestMatch.description;
    
    // Add teaching style to the offline fallback!
    let response = `**${bestMatch.question || bestMatch.name}**\n\n${baseAnswer}`;
    
    // Check if there is an associated code example to offer
    if (kb.codeExamples && Array.isArray(kb.codeExamples)) {
      const matchedEx = kb.codeExamples.find((ex: any) => 
        ex.name.toLowerCase().includes(userTopic) || 
        userTopic.includes(ex.name.toLowerCase())
      );
      if (matchedEx) {
        response += `\n\n### Practical Code Example:\n*${matchedEx.description}*\n\`\`\`javascript\n${matchedEx.code}\n\`\`\``;
      }
    }
    
    // Append a follow-up educational check
    response += `\n\nWould you like me to break down this concept further or provide another example?`;
    return response;
  }

  // Fallback if no matching topic
  let available = [];
  if (kb.coreConcepts) available = available.concat(kb.coreConcepts.map((c: any) => c.question));
  if (kb.faqs) available = available.concat(kb.faqs.map((f: any) => f.question));
  
  if (available.length > 0) {
    // Select 4 random questions to suggest
    const shuffled = [...available].sort(() => 0.5 - Math.random());
    const suggestions = shuffled.slice(0, 4);
    return `I couldn't find a direct match for "${message}" in my offline files. 

However, since we are learning together, here are some questions you can ask me about **${mentor.description}**:
${suggestions.map(s => `- *${s}*`).join('\n')}

Or, if you are online, go to the **Gear Settings** at the bottom of the sidebar to enable the **Google Gemini API Key (Free Tier)** for unlimited, intelligent ChatGPT-like responses!`;
  }

  return `I'm sorry, I couldn't process your request in offline fallback mode. Please check your AI Settings to enable the online Gemini model or connect to a local Ollama server.`;
}

export async function generateAIResponse(message: string, mentorId: string, history: Message[] = []): Promise<string> {
  const mentor = aiPersonalities[mentorId];
  if (!mentor) return "I'm not sure how to help with that.";

  const settings = loadAISettings();
  const kb = mentor.knowledgeBase && mentor.knowledgeBase.knowledgeBase
    ? mentor.knowledgeBase.knowledgeBase
    : mentor.knowledgeBase;

  // Retrieve RAG Context
  const ragContext = retrieveRAGContext(message, kb);
  const systemPrompt = buildSystemPrompt(mentor, ragContext);

  if (settings.aiMode === 'gemini') {
    if (!settings.geminiApiKey) {
      return "⚠️ **Gemini API Key is missing!**\n\nPlease click the **Settings Gear** icon at the bottom of the sidebar to enter your free Gemini API Key so I can answer your questions with advanced reasoning.";
    }

    try {
      // Format chat history for Gemini API
      // Keep only last 10 messages for token efficiency and speed
      const recentHistory = history.slice(-10);
      
      const contents = recentHistory.map(msg => ({
        role: msg.senderId === 'me' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      // Add the current message if not already present in history
      const lastMsgInHistory = recentHistory[recentHistory.length - 1];
      if (!lastMsgInHistory || lastMsgInHistory.text !== message) {
        contents.push({
          role: 'user',
          parts: [{ text: message }]
        });
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${settings.geminiApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{ text: systemPrompt }]
            }
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errMessage = errorData.error?.message || `HTTP ${response.status}`;
        throw new Error(errMessage);
      }

      const data = await response.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (replyText) return replyText;
      throw new Error('Could not parse text response from Gemini.');
    } catch (err: any) {
      console.warn('Gemini call failed, using offline fallback:', err);
      return generateLocalFallbackResponse(message, mentor, history);
    }
  }

  if (settings.aiMode === 'ollama') {
    try {
      const recentHistory = history.slice(-10);
      const messages = [
        { role: 'system', content: systemPrompt },
        ...recentHistory.map(msg => ({
          role: msg.senderId === 'me' ? 'user' : 'assistant',
          content: msg.text
        }))
      ];

      // Add the current message if not already present in history
      const lastMsgInHistory = recentHistory[recentHistory.length - 1];
      if (!lastMsgInHistory || lastMsgInHistory.text !== message) {
        messages.push({
          role: 'user',
          content: message
        });
      }

      const response = await fetch(`${settings.ollamaUrl.replace(/\/$/, '')}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: settings.ollamaModel,
          messages,
          stream: false
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const data = await response.json();
      if (data.message && data.message.content) {
        return data.message.content;
      }
      throw new Error('Invalid response structure from Ollama.');
    } catch (err: any) {
      console.warn('Ollama call failed, using offline fallback:', err);
      return generateLocalFallbackResponse(message, mentor, history);
    }
  }

  if (settings.aiMode === 'chrome') {
    try {
      const ai = (window as any).ai;
      if (!ai) {
        throw new Error('Chrome Built-in AI is not supported on this browser.');
      }

      let session;
      if (ai.assistant) {
        session = await ai.assistant.create({
          systemPrompt: systemPrompt
        });
      } else if (ai.createTextSession) {
        session = await ai.createTextSession({
          systemPrompt: systemPrompt
        });
      } else {
        throw new Error('Unsupported Prompt API version.');
      }

      // Feed dialogue context in text prompt
      let promptText = "";
      const recentHistory = history.slice(-6);
      for (const msg of recentHistory) {
        promptText += `\n${msg.senderId === 'me' ? 'User' : 'Assistant'}: ${msg.text}`;
      }
      
      const lastMsgInHistory = recentHistory[recentHistory.length - 1];
      if (!lastMsgInHistory || lastMsgInHistory.text !== message) {
        promptText += `\nUser: ${message}`;
      }
      promptText += `\nAssistant:`;

      const result = await session.prompt(promptText);
      session.destroy(); // Clean up session memory
      return result;
    } catch (err: any) {
      console.warn('Chrome AI failed, using offline fallback:', err);
      return generateLocalFallbackResponse(message, mentor, history);
    }
  }

  // Default / Fallback Mode (100% Offline client-side string-matching)
  return generateLocalFallbackResponse(message, mentor, history);
}

export async function routeAndGenerateAIResponse(
  message: string, 
  currentMentorId: string, 
  history: Message[] = []
): Promise<{ mentorId: string, response: string }> {
  const lowerMessage = message.toLowerCase();
  let bestMentorId = currentMentorId;
  let bestMatchScore = 0;

  // Build a list of all mentors and their topic keywords
  const mentorEntries = Object.entries(aiPersonalities);
  for (const [mentorId, mentor] of mentorEntries) {
    if (!mentor.knowledgeBase || !mentor.knowledgeBase.knowledgeBase) continue;
    const kb = mentor.knowledgeBase.knowledgeBase;
    if (!kb.coreConcepts) continue;
    
    let score = 0;
    for (const concept of kb.coreConcepts) {
      if (
        lowerMessage.includes(concept.question.toLowerCase()) ||
        (concept.answer && lowerMessage.includes(concept.answer.toLowerCase()))
      ) {
        score++;
      }
    }
    
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
      { id: 'cyber-security', keywords: ['cyber', 'security', 'hacking', 'vulnerability', 'phishing', 'firewall'] },
      { id: 'frontend', keywords: ['frontend', 'react', 'html', 'css', 'javascript', 'ui', 'component', 'dom'] },
      { id: 'backend', keywords: ['backend', 'api', 'server', 'database', 'node', 'express', 'sql', 'mongodb'] },
      { id: 'fullstack', keywords: ['fullstack', 'full-stack', 'mern', 'jamstack'] },
      { id: 'python', keywords: ['python', 'django', 'flask', 'pandas', 'numpy', 'sensei'] },
      { id: 'mobile', keywords: ['mobile', 'android', 'ios', 'flutter', 'react native'] },
      { id: 'cloudops', keywords: ['cloud', 'aws', 'azure', 'devops', 'docker', 'kubernetes', 'ci/cd'] },
    ];
    for (const route of routingKeywords) {
      if (route.keywords.some(kw => lowerMessage.includes(kw))) {
        bestMentorId = route.id;
        break;
      }
    }
  }

  // Generate the response using the selected mentor
  const response = await generateAIResponse(message, bestMentorId, history);
  return { mentorId: bestMentorId, response };
}

export function getMentorById(id: string) {
  return aiPersonalities[id];
}

export function getAllMentors() {
  return Object.values(aiPersonalities);
}
 