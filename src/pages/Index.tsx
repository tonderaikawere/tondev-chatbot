import { useState, useEffect } from 'react';
import ChatLayout from '../components/ChatLayout';
import AuthScreen from '../components/AuthScreen';
import SplashScreen from '../components/SplashScreen';
import { Contact, Message } from '../types/chat';
import { aiPersonalities, generateAIResponse } from '../utils/aiPersonalities';
import { saveContacts, loadContacts, saveMessages, loadMessages, saveActiveContact, loadActiveContact } from '../utils/storage';

interface User {
  id: string;
  name: string;
  email: string;
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({});
  const [activeContact, setActiveContact] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  // Check for existing user session on app load
  useEffect(() => {
    const checkExistingSession = () => {
      try {
        const savedUser = localStorage.getItem('tondev_current_user');
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
          loadUserData(parsedUser.id);
        }
      } catch (error) {
        console.error('Error loading user session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkExistingSession();
  }, []);

  const loadUserData = (userId: string) => {
    const savedContacts = loadContacts();
    const savedMessages = loadMessages();
    const savedActiveContact = loadActiveContact();
    const validMentorIds = ['software-engineering', 'casual-career', 'project-builder'];
    const hasInvalidContacts = savedContacts.length === 0 || savedContacts.some(c => !validMentorIds.includes(c.id));

    if (savedContacts.length > 0 && !hasInvalidContacts) {
      const contactsWithNoUnread = savedContacts.map(contact => ({
        ...contact,
        unreadCount: 0
      }));
      
      setContacts(contactsWithNoUnread);
      setMessages(savedMessages);
      
      const newActiveContact = validMentorIds.includes(savedActiveContact || '') 
        ? savedActiveContact 
        : 'software-engineering';
      setActiveContact(newActiveContact);
      
      saveContacts(contactsWithNoUnread);
      saveActiveContact(newActiveContact);
    } else {
      initializeAIMentors();
    }
  };

  const initializeAIMentors = () => {
    const aiMentors: Contact[] = [
      {
        id: 'software-engineering',
        name: 'DevEngine AI',
        avatar: '⚙️',
        lastMessage: "Hi! I'm DevEngine AI, your Software Engineering Specialist. What software engineering or systems architecture topic would you like to master today?",
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Software Engineering',
        description: 'Software Engineering Specialist',
        expertise: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'Go', 'Rust', 'Java', 'C++', 'SQL', 'PostgreSQL', 'NoSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Terraform', 'Git', 'GitHub', 'CI/CD', 'Security', 'OWASP', 'Mobile', 'Android', 'iOS', 'Flutter', 'React Native', 'Laravel', 'PHP', 'Spring Boot', 'Ruby on Rails', 'Svelte', 'FastAPI', 'Tailwind', 'Nginx']
      },
      {
        id: 'casual-career',
        name: 'Counselor AI',
        avatar: '💬',
        lastMessage: "Hello! I'm Counselor AI, your Career Advisor & Casual Talk companion. What would you like to talk about today?",
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Career & Casual',
        description: 'Casual Talk & Career Advisor',
        expertise: ['Career Guidance', 'Mock Interviews', 'STAR Method', 'Stress & Burnout Support', 'General Knowledge', 'Mentorship', 'Small Talk']
      },
      {
        id: 'project-builder',
        name: 'Antigravity AI',
        avatar: '🤖',
        lastMessage: "Welcome! I'm Antigravity AI, your Project Builder & Advanced Code Copilot. Let's write some high-performance code together!",
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Project Construction',
        description: 'Project Builder & Code Copilot',
        expertise: ['Code Generation', 'Project Architect', 'System Design', 'Debugging', 'Refactoring', 'Event Loop', 'libuv', 'RAG Pipelines', 'Vector DB', 'Laboratory Manuals']
      }
    ];

    const initialMessages: { [key: string]: Message[] } = {};
    aiMentors.forEach(mentor => {
      const personality = aiPersonalities[mentor.id];
      if (personality) {
        initialMessages[mentor.id] = [{
          id: `intro-${mentor.id}`,
          text: personality.introduction,
          senderId: mentor.id,
          timestamp: new Date(),
          isRead: false,
          date: new Date().toISOString().split('T')[0]
        }];
      }
    });

    setContacts(aiMentors);
    setMessages(initialMessages);
    setActiveContact('software-engineering');
    
    saveContacts(aiMentors);
    saveMessages(initialMessages);
    saveActiveContact('software-engineering');
  };

  const sendMessage = async (text: string) => {
    if (!activeContact || !text.trim() || isGenerating) return;

    const now = new Date();
    const dateString = now.toISOString().split('T')[0];

    const newMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      senderId: 'me',
      timestamp: now,
      isRead: false,
      date: dateString
    };

    const updatedMessages = {
      ...messages,
      [activeContact]: [...(messages[activeContact] || []), newMessage]
    };

    setMessages(updatedMessages);
    saveMessages(updatedMessages);
    setIsGenerating(true);

    try {
      const currentHistory = updatedMessages[activeContact] || [];
      const aiResponseText = await generateAIResponse(text, activeContact, currentHistory);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        senderId: activeContact,
        timestamp: new Date(),
        isRead: false,
        date: dateString
      };
      
      const finalMessages = {
        ...updatedMessages,
        [activeContact]: [...(updatedMessages[activeContact] || []), aiResponse]
      };
      
      setMessages(finalMessages);
      saveMessages(finalMessages);

      const updatedContacts = contacts.map(contact => {
        if (contact.id === activeContact) {
          return { 
            ...contact, 
            lastMessage: aiResponseText, 
            lastSeen: new Date(),
            unreadCount: 0
          };
        }
        return contact;
      });
      
      setContacts(updatedContacts);
      saveContacts(updatedContacts);
    } catch (error) {
      console.error('Error generating AI response:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const markAsRead = (contactId: string) => {
    const updatedContacts = contacts.map(contact => 
      contact.id === contactId 
        ? { ...contact, unreadCount: 0 }
        : contact
    );
    setContacts(updatedContacts);
    saveContacts(updatedContacts);

    const updatedMessages = {
      ...messages,
      [contactId]: messages[contactId]?.map(msg => ({ ...msg, isRead: true })) || []
    };
    setMessages(updatedMessages);
    saveMessages(updatedMessages);
  };

  const handleContactSelect = (contactId: string) => {
    setActiveContact(contactId);
    saveActiveContact(contactId);
    markAsRead(contactId);
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    loadUserData(userData.id);
  };

  const handleLogout = () => {
    localStorage.removeItem('tondev_current_user');
    setUser(null);
    setContacts([]);
    setMessages({});
    setActiveContact(null);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (isLoading) {
    return (
      <div className="h-screen bg-[#0B132B] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2563EB] rounded-full mb-4 animate-pulse">
            <span className="text-2xl">🤖</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Tondev AI Mentors</h1>
          <p className="text-blue-200">Loading your AI mentors...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return (
    <div className="h-screen bg-[#F8FAFC]">
      <ChatLayout
        contacts={contacts}
        messages={messages[activeContact] || []}
        activeContact={activeContact}
        onContactSelect={handleContactSelect}
        onSendMessage={sendMessage}
        user={user}
        onLogout={handleLogout}
        isGenerating={isGenerating}
      />
    </div>
  );
};

export default Index;
