
// Comprehensive knowledge base for AI mentors
export const knowledgeBase = {
  oopConcepts: [
    { question: "What is object-oriented programming (OOP)?", answer: "OOP is a programming paradigm based on objects that contain data and methods to manipulate that data." },
    { question: "What are the four main principles of OOP?", answer: "Encapsulation, Abstraction, Inheritance, and Polymorphism." },
    { question: "What is encapsulation?", answer: "Encapsulation restricts direct access to some of an object's components and can prevent the accidental modification of data." },
    // ... more OOP concepts would be stored here
  ],
  
  webDevelopment: [
    { question: "What is software development?", answer: "Software development is the process of designing, coding, testing, and maintaining software applications." },
    { question: "What is the difference between frontend and backend development?", answer: "Frontend development deals with the user interface and experience, while backend development focuses on server, database, and application logic." },
    // ... more web dev concepts
  ],
  
  courseContent: {
    crashCourse: {
      duration: "2 months",
      topics: ["HTML, CSS & JavaScript", "Git & GitHub", "Bootstrap/Tailwind CSS", "Portfolio Project"]
    },
    frontendPath: {
      duration: "6 months", 
      topics: ["ES6 JavaScript", "ReactJS", "Firebase", "Advanced React & APIs", "Certification"]
    },
    backendPath: {
      duration: "6 months",
      topics: ["Node.js & Express", "MongoDB & Mongoose", "Backend Portfolio", "Certification"]
    }
  },
  
  instructorInfo: {
    name: "Tonde Kawere",
    portfolio: "tonde-portfolio.vercel.app",
    experience: "100+ projects",
    role: "Software Development Instructor"
  }
};

export const searchKnowledge = (query: string) => {
  const allConcepts = [
    ...knowledgeBase.oopConcepts,
    ...knowledgeBase.webDevelopment
  ];
  
  return allConcepts.filter(item => 
    item.question.toLowerCase().includes(query.toLowerCase()) ||
    item.answer.toLowerCase().includes(query.toLowerCase())
  );
};
