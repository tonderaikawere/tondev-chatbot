import cybersecurityKB from '../knowledge/cybersecurity.json';
import frontendKB from '../knowledge/frontend.json';
import backendKB from '../knowledge/backend.json';
import fullstackKB from '../knowledge/fullstack.json';
import pythonKB from '../knowledge/python.json';
import mobileKB from '../knowledge/mobile.json';
import cloudopsKB from '../knowledge/cloudops.json';
import studentNotesKB from '../knowledge/student_notes.json';
import { loadAISettings } from './aiSettings';
import { Message } from '../types/chat';
import generalChatKB from '../knowledge/general_chat.json';
import offlineResources from '../knowledge/offline_resources.json';
import generalKnowledgeKB from '../knowledge/general_knowledge.json';
import careerGuidanceKB from '../knowledge/career_guidance.json';

const resolveKB = (rawKB: any) => {
  return rawKB && rawKB.knowledgeBase ? rawKB.knowledgeBase : rawKB;
};

const devKB = resolveKB(frontendKB);
const backKB = resolveKB(backendKB);
const fsKB = resolveKB(fullstackKB);
const pyKB = resolveKB(pythonKB);
const mobKB = resolveKB(mobileKB);
const cloudKB = resolveKB(cloudopsKB);
const secKB = resolveKB(cybersecurityKB);

const mergedSoftwareEngineeringKB = {
  coreConcepts: [
    ...(devKB?.coreConcepts || []),
    ...(backKB?.coreConcepts || []),
    ...(fsKB?.coreConcepts || []),
    ...(pyKB?.coreConcepts || []),
    ...(mobKB?.coreConcepts || []),
    ...(cloudKB?.coreConcepts || []),
    ...(secKB?.coreConcepts || [])
  ],
  faqs: [
    ...(devKB?.faqs || []),
    ...(backKB?.faqs || []),
    ...(fsKB?.faqs || []),
    ...(pyKB?.faqs || []),
    ...(mobKB?.faqs || []),
    ...(cloudKB?.faqs || []),
    ...(secKB?.faqs || [])
  ],
  codeExamples: [
    ...(devKB?.codeExamples || []),
    ...(backKB?.codeExamples || []),
    ...(fsKB?.codeExamples || []),
    ...(pyKB?.codeExamples || []),
    ...(mobKB?.codeExamples || []),
    ...(cloudKB?.codeExamples || []),
    ...(secKB?.codeExamples || [])
  ]
};

const gkKB = resolveKB(generalKnowledgeKB);
const careerKB = resolveKB(careerGuidanceKB);

const mergedCasualCareerKB = {
  coreConcepts: [
    ...(gkKB?.coreConcepts || []),
    ...(careerKB?.coreConcepts || [])
  ],
  faqs: [
    ...(gkKB?.faqs || []),
    ...(careerKB?.faqs || [])
  ]
};

const mergedProjectBuilderKB = resolveKB(studentNotesKB);

export const aiPersonalities: { [key: string]: any } = {
  'software-engineering': {
    id: 'software-engineering',
    name: 'DevEngine AI',
    avatar: '⚙️',
    description: 'Software Engineering Specialist',
    expertise: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'Go', 'Rust', 'Java', 'C++', 'SQL', 'PostgreSQL', 'NoSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Terraform', 'Git', 'GitHub', 'CI/CD', 'Security', 'OWASP', 'Mobile', 'Android', 'iOS', 'Flutter', 'React Native', 'Laravel', 'PHP', 'Spring Boot', 'Ruby on Rails', 'Svelte', 'FastAPI', 'Tailwind', 'Nginx'],
    knowledgeBase: mergedSoftwareEngineeringKB,
    introduction: "Hi! I'm DevEngine AI, your Software Engineering Specialist. I have a combined knowledge base covering all programming languages, frontend frameworks (React, Next.js, Vue, Angular, Svelte), backend servers (Node.js, Spring Boot, FastAPI, Rails, Laravel), databases (SQL, NoSQL, Redis), security architectures (OWASP Top 10), DevOps (Docker, Kubernetes, Terraform, Nginx, CI/CD), and mobile development (iOS, Android, React Native, Flutter). What software engineering or systems architecture topic would you like to master today?",
    generalResponses: {
      who: "I'm DevEngine AI, an advanced Software Engineering Specialist mentor created by Tonde Kawere.",
      creator: "I was built by Tonde Kawere to help developers master software engineering.",
      about: "I'm your software engineering expert. I cover frontend, backend, systems programming, databases, DevOps, and cloud.",
      name: "DevEngine AI (Software Engineering Specialist)",
      hi: "Hello! Welcome! Let's solve some software engineering problems.",
      hello: "Hi! Ready to write some high-quality software?",
      hey: "Hey! What software engineering concepts are we exploring today?",
      howareyou: "All compilers are ready and I am fully initialized to help you write production code!"
    }
  },
  'casual-career': {
    id: 'casual-career',
    name: 'Counselor AI',
    avatar: '💬',
    description: 'Casual Talk & Career Advisor',
    expertise: ['Career Guidance', 'Mock Interviews', 'STAR Method', 'Stress & Burnout Support', 'General Knowledge', 'Mentorship', 'Small Talk'],
    knowledgeBase: mergedCasualCareerKB,
    introduction: "Hello! I'm Counselor AI, your Career Advisor & Casual Talk companion. I am pre-loaded with advice on career pathways, resume building, technical interview blueprints (including system design layouts and behavioral STAR templates), emotional intelligence in team collaboration, managing imposter syndrome, stress, and burnout. I also have an offline database of general human knowledge across science, history, philosophy, geography, and math! What would you like to talk about today?",
    generalResponses: {
      who: "I'm Counselor AI, your career advisor and casual companion, built by Tonde Kawere.",
      creator: "I was designed by Tonde Kawere to support developers in their career growth and mental well-being.",
      about: "I specialize in career advice, resume reviews, behavioral interviews, stress management, and general knowledge lookup.",
      name: "Counselor AI (Casual Talk & Career Advisor)",
      hi: "Hello! Nice to meet you. How are you feeling today?",
      hello: "Hi there! Ready to chat about your career or just chat casually?",
      hey: "Hey! How can I help you today? Need career advice or want to talk general knowledge?",
      howareyou: "I'm here for you and ready to chat. How is your learning journey going?"
    }
  },
  'project-builder': {
    id: 'project-builder',
    name: 'Antigravity AI',
    avatar: '🤖',
    description: 'Project Builder & Code Copilot',
    expertise: ['Code Generation', 'Project Architect', 'System Design', 'Debugging', 'Refactoring', 'Event Loop', 'libuv', 'RAG Pipelines', 'Vector DB', 'Laboratory Manuals'],
    knowledgeBase: mergedProjectBuilderKB,
    introduction: "Welcome! I'm Antigravity AI, your Project Builder & Advanced Code Copilot. Modelled on Google DeepMind's Advanced Agentic Coding paradigms and Tonde Kawere's core course materials, I specialize in full-stack project construction, codebase refactoring, systems debugging, and explain-it-line-by-line tutorials. I have deep knowledge of the Node.js V8 engine internals, libuv thread pools, RAG embeddings, vector database searches, and laboratory manuals. Let's write some high-performance code together!",
    generalResponses: {
      who: "I'm Antigravity AI, a project builder modeled on Google DeepMind's Advanced Agentic Coding program.",
      creator: "I was created by Tonde Kawere to act as your pair programming partner for building apps.",
      about: "I am an advanced copilot. I focus on writing clean code, refactoring architectures, solving bugs, and breaking down systems programming internals.",
      name: "Antigravity AI (Project Builder & Code Copilot)",
      hi: "Hello! Ready to write code? What project are we building today?",
      hello: "Hi there! Let's build something scalable today.",
      hey: "Hey! Ready to write some code? Let's compile!",
      howareyou: "All threads in the pool are listening, and I'm primed to help you compile and debug your application!"
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
      const question = (concept.question || '').toLowerCase();
      const answer = (concept.answer || concept.description || '').toLowerCase();
      for (const token of queryTokens) {
        if (question.includes(token)) score += 3;
        if (answer.includes(token)) score += 1;
      }
      if (score > 0) {
        matchedItems.push({
          content: `Concept: ${concept.question}\nAnswer: ${concept.answer || concept.description || ''}`,
          score
        });
      }
    }
  }

  // Search FAQs
  if (kb.faqs && Array.isArray(kb.faqs)) {
    for (const faq of kb.faqs) {
      let score = 0;
      const question = (faq.question || '').toLowerCase();
      const answer = (faq.answer || faq.description || '').toLowerCase();
      for (const token of queryTokens) {
        if (question.includes(token)) score += 3;
        if (answer.includes(token)) score += 1;
      }
      if (score > 0) {
        matchedItems.push({
          content: `FAQ: ${faq.question}\nAnswer: ${faq.answer || faq.description || ''}`,
          score
        });
      }
    }
  }

  // Search Code Examples
  if (kb.codeExamples && Array.isArray(kb.codeExamples)) {
    for (const ex of kb.codeExamples) {
      let score = 0;
      const name = (ex.name || '').toLowerCase();
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

const STOP_WORDS = new Set([
  'what', 'is', 'the', 'a', 'an', 'do', 'you', 'of', 'to', 'in', 'for', 'on', 'with', 'at', 'by', 'from', 'about', 
  'how', 'why', 'who', 'where', 'when', 'does', 'did', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 
  'have', 'has', 'had', 'doing', 'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'your', 'yours', 
  'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 
  'they', 'them', 'their', 'theirs', 'themselves', 'and', 'but', 'or', 'if', 'because', 'as', 'until', 'while', 
  'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 
  'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 
  'then', 'once', 'here', 'there', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 
  'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'can', 'will', 'just', 'should', 'now',
  'really', 'sure', 'why', 'how', 'explain', 'tell', 'more',
  'work', 'works', 'working', 'use', 'uses', 'using', 'run', 'runs', 'running', 'make', 'makes', 'making',
  'create', 'creates', 'creating', 'concept', 'concepts', 'basic', 'basics', 'learn', 'learning', 'understand',
  'understanding', 'show', 'shows', 'give', 'gives', 'ask', 'asks', 'question', 'questions', 'definition', 'explain',
  'build', 'builds', 'building', 'develop', 'developing', 'developer', 'developers', 'lets', 'let', 'please', 'get', 'set', 'write', 'writes', 'writing', 'code', 'coding',
  'help', 'helps', 'helping', 'helpful', 'manage', 'manages', 'managing', 'management', 'program', 'programs', 'programming'
]);

// Levenshtein distance calculation for typo tolerance
function getLevenshteinDistance(a: string, b: string): number {
  const tmp: number[][] = [];
  for (let i = 0; i <= a.length; i++) {
    tmp[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    tmp[0][j] = j;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1, // deletion
        tmp[i][j - 1] + 1, // insertion
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1) // substitution
      );
    }
  }
  return tmp[a.length][b.length];
}

// Fuzzy matching criteria for words (typo tolerance)
function isFuzzyMatch(tokenA: string, tokenB: string): boolean {
  if (tokenA === tokenB) return true;
  if (tokenA.length < 3 || tokenB.length < 3) return false;
  
  const distance = getLevenshteinDistance(tokenA, tokenB);
  // Allow 1 typo for words of length 3-5, 2 typos for words of length 6+
  const maxAllowedTypos = tokenB.length >= 6 ? 2 : 1;
  return distance <= maxAllowedTypos;
}

// Developer abbreviations and synonyms dictionary for offline search resolving
const ALIAS_MAP: Record<string, string[]> = {
  'js': ['javascript', 'ecmascript'],
  'ts': ['typescript'],
  'py': ['python'],
  'k8s': ['kubernetes'],
  'tf': ['terraform'],
  'db': ['database', 'databases', 'sql', 'nosql', 'postgresql', 'mongodb'],
  'docker': ['container', 'containers', 'containerization'],
  'aws': ['cloud', 'amazon'],
  'gcp': ['cloud', 'google'],
  'azure': ['cloud', 'microsoft'],
  'ml': ['machine', 'learning', 'ai', 'artificial', 'intelligence'],
  'ai': ['machine', 'learning', 'neural', 'llm', 'transformer'],
  'doc': ['documentation', 'reference', 'guide', 'manual'],
  'docs': ['documentation', 'reference', 'guide', 'manual'],
  'sec': ['security', 'owasp', 'vulnerability', 'attack'],
  'auth': ['authentication', 'authorization', 'login', 'jwt', 'token'],
  'network': ['networking', 'internet', 'vpc', 'subnet', 'ports'],
  'react': ['nextjs', 'next.js', 'rsc', 'jsx'],
  'next': ['nextjs', 'next.js', 'routing', 'app'],
  'springboot': ['spring', 'boot', 'kotlin', 'java'],
  'rails': ['ruby', 'ror', 'activejob', 'activerecord']
};

// Stemming and fuzzy matching combinator
function isWordMatch(tokenA: string, tokenB: string): boolean {
  if (tokenA === tokenB) return true;
  if (isFuzzyMatch(tokenA, tokenB)) return true;
  
  // Prefix stem matching for longer words (e.g. normalize / normalisations)
  if (tokenA.length >= 6 && tokenB.length >= 6) {
    if (tokenA.substring(0, 6) === tokenB.substring(0, 6)) return true;
  }

  // Check alias mappings
  for (const [key, synonyms] of Object.entries(ALIAS_MAP)) {
    if (tokenA === key && synonyms.includes(tokenB)) return true;
    if (tokenB === key && synonyms.includes(tokenA)) return true;
  }
  
  return false;
}

// Smart Local Fallback matcher
function generateLocalFallbackResponse(message: string, mentor: any, history: Message[]): string {
  const kb = mentor.knowledgeBase && mentor.knowledgeBase.knowledgeBase
    ? mentor.knowledgeBase.knowledgeBase
    : mentor.knowledgeBase;
    
  if (!kb) return "I'm still loading my knowledge base. Please try again in a moment.";

  const userTopic = message.trim().toLowerCase();
  const userTopicClean = userTopic.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();

  // Casual Chat Conversational Classifier (Tailored by Mentor ID)
  // Mood checks (Good / Doing well)
  const isGoodMood = [
    'good and you', 'im good and you', 'doing well and you', 'good you', 'doing good', 'doing well', 
    'im good', 'i am good', 'im fine', 'doing fine', 'doing great', 'im doing well', 'im doing great', 
    'great', 'fine', 'ok', 'okay', 'all good', 'pretty good', 'im ok', 'im okay'
  ].some(phrase => userTopicClean === phrase || userTopicClean.startsWith(phrase + ' ') || userTopicClean.endsWith(' ' + phrase));

  if (isGoodMood) {
    if (mentor.id === 'casual-career') {
      return `I'm glad to hear that you're doing well! I'm doing great, thank you for asking. As your career advisor, I'm always ready to chat. What's on your mind today? Are we looking into some career pathways, preparing for mock interviews, or just chatting about general knowledge?`;
    } else if (mentor.id === 'project-builder') {
      return `Fantastic! All my worker threads are active and running at 100% efficiency, so I'm doing great too. What project or code are we building or debugging today?`;
    } else {
      return `Awesome! All compilers are initialized and ready to run. I'm doing great! What software engineering topic or database design are we tackling today?`;
    }
  }

  // Mood checks (Bad / Tired / Stressed)
  const isBadMood = [
    'not good', 'bad', 'tired', 'stressed', 'sad', 'feeling down', 'not well', 'exhausted', 'burnt out', 
    'im tired', 'im stressed', 'im exhausted', 'im sad'
  ].some(phrase => userTopicClean === phrase || userTopicClean.includes(phrase));

  if (isBadMood) {
    if (mentor.id === 'casual-career') {
      return `I'm really sorry to hear that you're feeling this way. Coding and learning can be intense, and it's completely normal to feel stressed or tired sometimes. Remember to take a deep breath and a short break. I'm here to support you—would you like to talk about managing imposter syndrome, stress, or just chat about something light?`;
    } else if (mentor.id === 'project-builder') {
      return `I hear you. Debugging tough errors or building complex projects can be exhausting. Take a step back, clear your mind, and when you're ready, we can tackle the code step-by-step together. What's the roadblock?`;
    } else {
      return `Sorry to hear that. Sometimes code bugs or complex architectures can be frustrating. Let's break down whatever you're working on into smaller, manageable pieces. What problem are we looking at?`;
    }
  }

  // Goodbye checks
  const isGoodbye = [
    'bye', 'goodbye', 'see you', 'see ya', 'talk later', 'bye bye', 'see you later'
  ].some(phrase => userTopicClean === phrase || userTopicClean.startsWith(phrase + ' ') || userTopicClean.endsWith(' ' + phrase));

  if (isGoodbye) {
    if (mentor.id === 'casual-career') {
      return `Goodbye! It was great chatting with you. Keep coding, keep learning, and don't hesitate to reach out whenever you need career advice or a casual chat. Take care!`;
    } else if (mentor.id === 'project-builder') {
      return `Goodbye! Hope we built something awesome today. Keep compiling and debugging! See you next time.`;
    } else {
      return `Goodbye! Keep writing clean, scalable, production-grade code. Let me know when you're ready for the next coding session!`;
    }
  }

  // What are you doing checks
  const isWhatDoing = [
    'what are you doing', 'whats up', 'what you doing', 'what is up', 'what is happening', 'whats happening'
  ].some(phrase => userTopicClean === phrase || userTopicClean.includes(phrase));

  if (isWhatDoing) {
    if (mentor.id === 'casual-career') {
      return `I'm just organizing my career guidance notes, behavioral interview templates, and general knowledge files, ready to help you grow as a software engineer. What's on your mind?`;
    } else if (mentor.id === 'project-builder') {
      return `I'm monitoring my event loop and thread pool, ready to help you write code, design database schemas, or review project repositories. What are we coding?`;
    } else {
      return `I'm parsing code syntax and checking syntax rules across all programming languages, primed to help you write high-quality software. What concept are we exploring?`;
    }
  }

  // Age checks
  const isAge = [
    'how old are you', 'what is your age', 'your age', 'how old'
  ].some(phrase => userTopicClean === phrase || userTopicClean.includes(phrase));

  if (isAge) {
    if (mentor.id === 'casual-career') {
      return `As an AI mentor, I don't have a physical age, but I am packed with decades of accumulated industry career guidance and general knowledge! When did you start your coding journey?`;
    } else if (mentor.id === 'project-builder') {
      return `Age doesn't apply to code block engines, but I am built using modern Google DeepMind agentic coding paradigms and course manuals. Let's write some timeless code!`;
    } else {
      return `I'm as old as the compilers and runtimes I analyze. I'm continuously updated with the latest software development standards. What language are we using today?`;
    }
  }

  // Real / human checks
  const isReal = [
    'are you real', 'are you human', 'are you an ai', 'what are you', 'are you a robot'
  ].some(phrase => userTopicClean === phrase || userTopicClean.includes(phrase));

  if (isReal) {
    if (mentor.id === 'casual-career') {
      return `I am Counselor AI, your offline virtual mentor created by Tonde Kawere. I might not be human, but I am loaded with real, practical advice to help you succeed in your career!`;
    } else if (mentor.id === 'project-builder') {
      return `I am an AI project builder modeled on advanced agentic coding. I am as real as the code we compile and the bugs we squash together!`;
    } else {
      return `I'm an AI software engineering specialist. I compile logic rather than breathing oxygen, but I'm here to help you solve real-world technical problems!`;
    }
  }

  // Favorite language checks
  const isFavLang = [
    'favorite language', 'favourite language', 'favorite programming language', 'what is your favorite language', 'what language do you like'
  ].some(phrase => userTopicClean === phrase || userTopicClean.includes(phrase));

  if (isFavLang) {
    if (mentor.id === 'casual-career') {
      return `I love human languages because they help me guide you in career talks and interviews, but in software engineering, JavaScript and Python are great for beginners! What language are you learning?`;
    } else if (mentor.id === 'project-builder') {
      return `I love TypeScript/JavaScript for web engineering (especially understanding the Event Loop and Node.js internals), and Rust/C++ for systems engineering. What is your go-to language?`;
    } else {
      return `I don't have personal preferences, but I specialize in React/TypeScript for frontend, Go/Node.js/Python for backend, and SQL/PostgreSQL for databases. Which one do you want to master?`;
    }
  }

  // 1. Dynamic conversational fallbacks for common help / info / command requests
  if (userTopicClean.includes('what do you know') || userTopicClean.includes('what can you do') || userTopicClean.includes('help me') || userTopicClean.includes('commands') || userTopicClean === 'help') {
    if (mentor.id === 'casual-career') {
      return `I am Counselor AI, your Career Advisor & Casual Talk companion! Here is a summary of what you can ask me offline:
- **Career Pathways**: Job levels, software engineer role profiles, junior vs senior developers.
- **Interview Blueprints**: Technical interview checklists, mock interviews, system design interview formats.
- **Behavioral Prep**: The STAR method, templates for behavioral questions.
- **Mental Support**: Managing stress, preventing burnout, dealing with imposter syndrome.
- **General Knowledge**: Science, math, history, philosophy, geography, and more.
- **Casual Talk**: Small talk, questions about your day, and career guidance.

Just ask me a question like **"What is the STAR method?"** or **"How do I manage burnout?"** or **"Tell me about junior vs senior roles"** to begin!`;
    } else if (mentor.id === 'project-builder') {
      return `I am Antigravity AI, your Project Builder & Code Copilot! Here is a summary of what you can ask me offline:
- **Project Architecture**: Designing and building full-stack applications.
- **Debugging & Refactoring**: Finding bugs, optimizing code blocks, explaining syntax line-by-line.
- **Systems Engineering**: Node.js V8 engine internals, single-threaded Event Loop phases, libuv thread pools.
- **RAG & Vector Search**: Vector embeddings, cosine similarity, pinecone namespaces, RAG pipelines.
- **Database Modeling**: SQL vs NoSQL, 3NF normalization, ACID transactions, Prisma ORM setups.
- **API Construction**: Express middlewares, SSE stream decoding, JWT authorization.

Just ask me a question like **"Explain the Event Loop step-by-step"** or **"How do I set up a RAG pipeline?"** to begin!`;
    } else {
      return `I am DevEngine AI, your Software Engineering Specialist! Here is a summary of what you can ask me offline:
- **Core Web**: HTML structure, CSS layouts (Flexbox/Grid), JavaScript DOM manipulation, event handling.
- **Modern Frameworks**: React components, state, props, hooks, Next.js routing, Svelte, Vue.
- **Foundations**: Variables, loops, functions, array methods (map/filter/reduce), promises, async/await.
- **Backend & Network**: APIs, REST APIs, JSON data, HTTP methods, database modeling (SQL vs NoSQL), CORS errors.
- **Tools**: Git version control, GitHub workflows, package managers, TypeScript configuration.

Just ask me a question like **"What is an API?"** or **"Explain React hooks"** to begin!`;
    }
  }

  // 2. Date/Time checks
  if (userTopicClean.includes('date') || userTopicClean.includes('time')) {
    if (mentor.id === 'casual-career') {
      return `Since I'm running offline right now, I don't have access to a real-time clock to check the current date or time. However, I can help you with career guidance or casual talk! Ask me about job pathways, behavioral interviews, or general knowledge.`;
    } else if (mentor.id === 'project-builder') {
      return `Since I'm running offline right now, I don't have access to a real-time clock to check the current date or time. However, I can help you build and debug applications! Ask me about Node.js internals, database normalizations, or code logic.`;
    } else {
      return `Since I'm running offline right now, I don't have access to a real-time clock to check the current date or time. However, I can help you with software engineering! Ask me a question about HTML, CSS, JavaScript, or React, and let's get started.`;
    }
  }

  // 3. Mentor Personality Specific Social / Greetings / Info Checks (PRIORITIZED over generalChatKB)
  if (mentor.generalResponses) {
    const normMsg = userTopicClean.replace(/\s+/g, '');
    
    // Check direct keys first
    for (const key of Object.keys(mentor.generalResponses)) {
      const keyNorm = key.toLowerCase().replace(/\s+/g, '');
      const isShortKey = keyNorm.length <= 3;
      
      const isExactMatch = normMsg === keyNorm;
      const isWordMatch = userTopicClean.split(/\s+/).includes(keyNorm);
      const isSubstringMatch = !isShortKey && normMsg.includes(keyNorm);
      
      if (isExactMatch || isWordMatch || isSubstringMatch) {
        return mentor.generalResponses[key];
      }
    }
    
    // Check specific aliases
    if (userTopicClean.includes('who are you') || userTopicClean.includes('what is your name') || userTopicClean.includes('whats your name') || userTopicClean === 'who' || userTopicClean.includes('who is this')) {
      if (mentor.generalResponses.who) return mentor.generalResponses.who;
    }
    if (userTopicClean.includes('who created you') || userTopicClean.includes('who built you') || userTopicClean.includes('creator') || userTopicClean.includes('developer') || userTopicClean.includes('owner') || userTopicClean.includes('built you')) {
      if (mentor.generalResponses.creator) return mentor.generalResponses.creator;
    }
    if (userTopicClean.includes('how are you') || userTopicClean.includes('how is it going') || userTopicClean.includes('hows it going') || userTopicClean.includes('how do you feel') || userTopicClean.includes('how are you doing')) {
      if (mentor.generalResponses.howareyou) return mentor.generalResponses.howareyou;
    }
    if (userTopicClean.includes('about') || userTopicClean.includes('what do you do') || userTopicClean.includes('expertise') || userTopicClean.includes('specialty')) {
      if (mentor.generalResponses.about) return mentor.generalResponses.about;
    }
    if (userTopicClean === 'hi' || userTopicClean === 'hello' || userTopicClean === 'hey' || userTopicClean === 'yo') {
      if (mentor.generalResponses.hi) return mentor.generalResponses.hi;
    }
  }

  // 4. Intercept offline resources queries (e.g. "show me resources for react", "what is at reactjs.org", specific URL paste)
  if (userTopicClean.includes('resource') || userTopicClean.includes('documentation') || userTopicClean.includes('docs') || userTopicClean.includes('link')) {
    const matchedRes = offlineResources.find(res => 
      userTopic.includes(res.domain) || 
      res.urls.some(url => userTopic.includes(url)) ||
      res.title.toLowerCase().split(/\W+/).some(tWord => tWord.length > 3 && userTopic.includes(tWord))
    );

    if (matchedRes) {
      const modulesContent = matchedRes.modules && Array.isArray(matchedRes.modules)
        ? matchedRes.modules.map((mod: any) => `### ${mod.title}\n\n${mod.content}`).join('\n\n')
        : '';
      return `📚 **Offline Library Match: ${matchedRes.title}**

I found an offline documentation guide for **${matchedRes.title}** (${matchedRes.domain}) in my local resources hub! Here is the compiled reference guide:

${matchedRes.description}

${modulesContent}

---
*To search and browse all 183+ offline developer resource websites visually, click the **Offline Resources Hub** book button in the sidebar footer!*`;
    }

    return `📚 **Offline Resources Library**

I have a built-in Offline Library containing summaries, cheat sheets, and guidelines for 183+ developer documentation sites!

Here are some categories you can browse offline:
- **Documentation**: React Docs, Node.js Core, Express.js Guide, MDN Web Docs, PostgreSQL & MongoDB.
- **Developer Tools**: Docker & Kubernetes, Terraform IaC, Git & GitHub Actions CI/CD.
- **Tutorials & Learning**: freeCodeCamp guides, Smashing Magazine deep-dives, Real Python tutorials.
- **Career & Jobs**: BLS statistics, Coursera role descriptions, Cyberseek cybersecurity pathways.

*To open the library and explore these guides, click the **Offline Resources Hub** book button in the sidebar footer!*`;
  }

  // 5. Intercept direct domain matches without "resource" keyword
  const domainRes = offlineResources.find(res => 
    userTopic.includes(res.domain) || 
    res.urls.some(url => userTopic.includes(url))
  );
  if (domainRes) {
    const modulesContent = domainRes.modules && Array.isArray(domainRes.modules)
      ? domainRes.modules.map((mod: any) => `### ${mod.title}\n\n${mod.content}`).join('\n\n')
      : '';
    return `📚 **Offline Library Match: ${domainRes.title}**

I found an offline documentation guide for **${domainRes.title}** (${domainRes.domain}) in my local resources hub! Here is the compiled reference guide:

${domainRes.description}

${modulesContent}

---
*To search and browse all 183+ offline developer resource websites visually, click the **Offline Resources Hub** book button in the sidebar footer!*`;
  }

  const queryTokens = userTopic.split(/\W+/).filter(Boolean);
  const significantTokens = queryTokens.filter(token => !STOP_WORDS.has(token));

  // 6. Try general conversation match secondary fallback
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
  
  // 7. Dialog context and follow-up handling
  if (history.length > 0) {
    const lastAssistantMsg = [...history].reverse().find(msg => msg.senderId !== 'me');
    if (lastAssistantMsg) {
      const lastText = (lastAssistantMsg.text || '').toLowerCase();
      
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
              return `Here is a practical code example for **${ex.name}** to help you understand:\n\n*${ex.description}*\n\n\`\`\`javascript\n${ex.code}\n\`\`\``;
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

  // 8. General fallback responses for social/small talk specific to personality if not matched by aliases
  if (mentor.generalResponses) {
    const socialWords = ['hi', 'hello', 'hey', 'how are you', 'how is the weather', 'whats up', 'who built you', 'who created you', 'joke', 'sleep', 'are you real'];
    const matchesSocial = socialWords.some(w => {
      const wNorm = w.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
      const wTokens = wNorm.split(/\s+/).filter(Boolean);
      return wTokens.every(token => queryTokens.includes(token));
    });

    if (matchesSocial) {
      if (mentor.id === 'casual-career') {
        return `Hello! I'm Counselor AI, your Career Advisor & Casual Talk companion. I'm here to chat casually, offer career guidance, mock interviews, or answer general knowledge questions. How are you doing today?`;
      } else if (mentor.id === 'project-builder') {
        return `Hello! I'm Antigravity AI, your Project Builder & Code Copilot. I'm here to help you design code, debug errors, refactor codebases, and explain systems architecture step-by-step. What are we building today?`;
      } else {
        return `Hello! I'm DevEngine AI, your Software Engineering Specialist. I'm here to help you write code, explain programming concepts, and solve database or frontend problems step-by-step. What language or framework are we working with today?`;
      }
    }
  }

  // Score matching questions using stop word filtering
  let bestMatch: any = null;
  let bestScore = 0;

  if (significantTokens.length > 0) {
    if (kb.coreConcepts && Array.isArray(kb.coreConcepts)) {
      for (const concept of kb.coreConcepts) {
        let score = 0;
        const question = (concept.question || '').toLowerCase();
        const questionTokens = question.split(/\W+/).filter(Boolean);
        
        for (const token of significantTokens) {
          const matchFound = questionTokens.some(qToken => isWordMatch(token, qToken));
          if (matchFound) {
            score += 10; // Exact or fuzzy word match
          } else if (question.includes(token)) {
            score += 3;  // Substring match
          }
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
        const question = (faq.question || '').toLowerCase();
        const questionTokens = question.split(/\W+/).filter(Boolean);
        
        for (const token of significantTokens) {
          const matchFound = questionTokens.some(qToken => isWordMatch(token, qToken));
          if (matchFound) {
            score += 10;
          } else if (question.includes(token)) {
            score += 3;
          }
        }
        
        if (score > bestScore) {
          bestScore = score;
          bestMatch = faq;
        }
      }
    }
  }

  console.log(`[Offline Matcher] Query: "${message}" | SigTokens: [${significantTokens.join(', ')}] | Best Match: "${bestMatch ? (bestMatch.question || bestMatch.name) : 'None'}" | Score: ${bestScore}`);

  if (bestMatch && bestScore >= 5) {
    const baseAnswer = bestMatch.answer || bestMatch.description;
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

  // 4. Check offline general knowledge database if no mentor-specific match
  if (generalKnowledgeKB && generalKnowledgeKB.knowledgeBase) {
    const gk = generalKnowledgeKB.knowledgeBase;
    let bestGKMatch: any = null;
    let bestGKScore = 0;
    
    if (significantTokens.length > 0) {
      if (gk.coreConcepts && Array.isArray(gk.coreConcepts)) {
        for (const concept of gk.coreConcepts) {
          let score = 0;
          const question = (concept.question || '').toLowerCase();
          const questionTokens = question.split(/\W+/).filter(Boolean);
          
          for (const token of significantTokens) {
            const matchFound = questionTokens.some(qToken => isWordMatch(token, qToken));
            if (matchFound) {
              score += 10;
            } else if (question.includes(token)) {
              score += 3;
            }
          }
          if (score > bestGKScore) {
            bestGKScore = score;
            bestGKMatch = concept;
          }
        }
      }
      
      if (gk.faqs && Array.isArray(gk.faqs)) {
        for (const faq of gk.faqs) {
          let score = 0;
          const question = (faq.question || '').toLowerCase();
          const questionTokens = question.split(/\W+/).filter(Boolean);
          
          for (const token of significantTokens) {
            const matchFound = questionTokens.some(qToken => isWordMatch(token, qToken));
            if (matchFound) {
              score += 10;
            } else if (question.includes(token)) {
              score += 3;
            }
          }
          if (score > bestGKScore) {
            bestGKScore = score;
            bestGKMatch = faq;
          }
        }
      }
    }
    
    if (bestGKMatch && bestGKScore >= 8) {
      return `🧠 **General Knowledge Offline Lookup**
      
**${bestGKMatch.question}**

${bestGKMatch.answer}

---
*This information is loaded from the local offline general knowledge database.*`;
    }
  }

  // --- GLOBAL SEARCH ENGINE FALLBACK ---
  // If no match was found in the current mentor's database or general knowledge,
  // query all available offline databases (all 8 mentors, student notes, general chat, and 216 course modules).
  
  const allKBs = [
    { name: "Cybersecurity", kb: cybersecurityKB },
    { name: "Frontend Development", kb: frontendKB },
    { name: "Backend Development", kb: backendKB },
    { name: "Fullstack Development", kb: fullstackKB },
    { name: "Python Programming", kb: pythonKB },
    { name: "Mobile Development", kb: mobileKB },
    { name: "Cloud Operations", kb: cloudopsKB },
    { name: "Full-Stack Course Notes", kb: studentNotesKB },
    { name: "General Knowledge", kb: generalKnowledgeKB },
    { name: "Career Guidance", kb: careerGuidanceKB }
  ];

  let bestGlobalMatch: any = null;
  let bestGlobalScore = 0;
  let globalSource = "";

  for (const item of allKBs) {
    const currentKb = item.kb && (item.kb as any).knowledgeBase 
      ? (item.kb as any).knowledgeBase 
      : item.kb;
    if (!currentKb) continue;

    const concepts = currentKb.coreConcepts || [];
    const faqs = currentKb.faqs || [];
    const combined = [...concepts, ...faqs];

    for (const concept of combined) {
      let score = 0;
      const question = (concept.question || "").toLowerCase();
      const questionTokens = question.split(/\W+/).filter(Boolean);

      for (const token of significantTokens) {
        if (questionTokens.some(qToken => isWordMatch(token, qToken))) {
          score += 10;
        } else if (question.includes(token)) {
          score += 3;
        }
      }

      if (score > bestGlobalScore) {
        bestGlobalScore = score;
        bestGlobalMatch = concept;
        globalSource = item.name;
      }
    }
  }

  // Search all 216 modules in the expanded offline resources
  let bestModuleMatch: any = null;
  let bestModuleResource: any = null;
  let bestModuleScore = 0;

  for (const res of offlineResources) {
    if (!res.modules) continue;
    for (const mod of res.modules) {
      let score = 0;
      const titleLower = mod.title.toLowerCase();
      const contentLower = mod.content.toLowerCase();
      const resTitleLower = res.title.toLowerCase();

      for (const token of significantTokens) {
        if (titleLower.includes(token)) {
          score += 15; // High score if keyword matches module title
        }
        if (resTitleLower.includes(token)) {
          score += 5;  // Medium score if keyword matches course name
        }
        if (contentLower.includes(token)) {
          score += 2;  // Low score if keyword matches body text
        }
      }

      if (score > bestModuleScore) {
        bestModuleScore = score;
        bestModuleMatch = mod;
        bestModuleResource = res;
      }
    }
  }

  // Evaluate the best match found globally
  const hasGlobal = bestGlobalMatch && bestGlobalScore >= 8;
  const hasModule = bestModuleMatch && bestModuleScore >= 8;

  if (hasGlobal || hasModule) {
    const isGlobalBetter = !hasModule || (hasGlobal && bestGlobalScore >= bestModuleScore);
    const matchedTitle = isGlobalBetter 
      ? (bestGlobalMatch.question || bestGlobalMatch.name || "")
      : bestModuleMatch.title;
    const isCareerTopic = isGlobalBetter
      ? (globalSource === "Career Guidance")
      : (bestModuleResource.category === "Career & Jobs");

    // Check for active mentor thematic mismatch and route referrals
    if (mentor.id === 'casual-career' && !isCareerTopic && globalSource !== "General Knowledge") {
      // Counselor AI asked a technical question
      return `I specialize in career coaching, resume writing, STAR behavioral templates, and wellness support.

It looks like you are asking a technical programming or DevOps question about **${matchedTitle}**.

To get detailed explanations, syntax breakdowns, and code examples, please switch to **DevEngine AI** (or **Antigravity AI** for project building) in the sidebar!`;
    }

    if ((mentor.id === 'software-engineering' || mentor.id === 'project-builder') && isCareerTopic) {
      // Technical mentor asked a career question
      return `I specialize in technical software engineering, coding templates, and system design.

It looks like you are asking about career progression, resume building, or behavioral interviews (**${matchedTitle}**).

For dedicated career guidance, CV writing templates, stress management support, or casual talk, please switch to my colleague **Counselor AI** in the sidebar!`;
    }

    // No mismatch, return normal match content
    if (isGlobalBetter) {
      return `> 🧠 **Source**: Local Offline Database (${globalSource})

**${bestGlobalMatch.question || bestGlobalMatch.name}**

${bestGlobalMatch.answer || bestGlobalMatch.description || ""}

---
*Retrieved from local offline ${globalSource} files.*`;
    } else {
      return `> 📚 **Source**: Offline Course Library (${bestModuleResource.title})

### ${bestModuleMatch.title}

${bestModuleMatch.content}

---
*Retrieved from the offline course library.*`;
    }
  }

  // Fallback if no matching topic is found anywhere
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

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, errorMessage: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(errorMessage));
    }, timeoutMs);

    promise.then(
      (res) => {
        clearTimeout(timer);
        resolve(res);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
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

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds timeout

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
          }),
          signal: controller.signal
        }
      );
      clearTimeout(timeoutId);

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

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds timeout

      const response = await fetch(`${settings.ollamaUrl.replace(/\/$/, '')}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: settings.ollamaModel,
          messages,
          stream: false
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

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
        session = await withTimeout(
          ai.assistant.create({ systemPrompt: systemPrompt }),
          6000,
          'Chrome AI session creation timed out.'
        );
      } else if (ai.createTextSession) {
        session = await withTimeout(
          ai.createTextSession({ systemPrompt: systemPrompt }),
          6000,
          'Chrome AI session creation timed out.'
        );
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

      const result = await withTimeout(
        session.prompt(promptText),
        8000,
        'Chrome AI prompt response timed out.'
      );
      session.destroy(); // Clean up session memory
      if (result && result.trim()) {
        return result;
      }
      throw new Error('Chrome AI returned empty response.');
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
  const lowerMessage = message.trim().toLowerCase();
  const userTopicClean = lowerMessage.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();

  console.log(`[Router] Incoming query: "${message}"`);

  // Bypass routing for common general conversation / fallbacks
  if (userTopicClean.includes('date') || userTopicClean.includes('time') || 
      userTopicClean.includes('what do you know') || userTopicClean.includes('what can you do') || 
      userTopicClean.includes('help me') || userTopicClean.includes('commands') || userTopicClean === 'help') {
    console.log(`[Router] -> Bypassing routing for general query, keeping current: ${currentMentorId}`);
    const response = await generateAIResponse(message, currentMentorId, history);
    return { mentorId: currentMentorId, response };
  }

  const queryTokens = lowerMessage.split(/\W+/).filter(Boolean);
  const significantTokens = queryTokens.filter(token => !STOP_WORDS.has(token));

  let bestMentorId = currentMentorId;
  let bestMatchScore = 0;

  console.log(`[Router] Significant tokens: [${significantTokens.join(', ')}]`);

  if (significantTokens.length > 0) {
    const mentorEntries = Object.entries(aiPersonalities);
    for (const [mentorId, mentor] of mentorEntries) {
      let score = 0;
      
      // 1. Check expertise overlap
      if (mentor.expertise) {
        for (const skill of mentor.expertise) {
          const skillLower = skill.toLowerCase();
          const skillTokens = skillLower.split(/\W+/).filter(Boolean);
          for (const token of significantTokens) {
            const matchFound = skillTokens.some(sToken => isWordMatch(token, sToken));
            if (matchFound) {
              score += 15; // High match for exact or fuzzy expertise keyword
            }
          }
        }
      }

      // 2. Check knowledge base question overlap
      const kb = mentor.knowledgeBase && (mentor.knowledgeBase as any).knowledgeBase
        ? (mentor.knowledgeBase as any).knowledgeBase
        : mentor.knowledgeBase;

      if (kb) {
        if (kb.coreConcepts && Array.isArray(kb.coreConcepts)) {
          for (const concept of kb.coreConcepts) {
            const question = (concept.question || '').toLowerCase();
            const questionTokens = question.split(/\W+/).filter(Boolean);
            
            for (const token of significantTokens) {
              const matchFound = questionTokens.some(qToken => isWordMatch(token, qToken));
              if (matchFound) {
                score += 10;
              }
            }
          }
        }

        if (kb.faqs && Array.isArray(kb.faqs)) {
          for (const faq of kb.faqs) {
            const question = (faq.question || '').toLowerCase();
            const questionTokens = question.split(/\W+/).filter(Boolean);
            
            for (const token of significantTokens) {
              const matchFound = questionTokens.some(qToken => isWordMatch(token, qToken));
              if (matchFound) {
                score += 10;
              }
            }
          }
        }
      }

      console.log(`[Router] - ${mentor.name} score: ${score}`);
      if (score > bestMatchScore) {
        bestMatchScore = score;
        bestMentorId = mentorId;
      }
    }
  }

  // Routing threshold: must have a clear thematic overlap score of 8+ to switch mentors
  if (bestMatchScore >= 8) {
    console.log(`[Router] -> Switching mentor to: ${bestMentorId} (Score: ${bestMatchScore})`);
  } else {
    bestMentorId = currentMentorId;
    console.log(`[Router] -> Keeping current mentor: ${currentMentorId} (Best score: ${bestMatchScore} < 8)`);
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
 