import { useState, useEffect } from 'react';
import ChatLayout from '../components/ChatLayout';
import AuthScreen from '../components/AuthScreen';
import SplashScreen from '../components/SplashScreen';
import { Contact, Message } from '../types/chat';
import { aiPersonalities, generateAIResponse, routeAndGenerateAIResponse } from '../utils/aiPersonalities';
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

    if (savedContacts.length > 0) {
      const contactsWithNoUnread = savedContacts.map(contact => ({
        ...contact,
        unreadCount: 0
      }));
      
      setContacts(contactsWithNoUnread);
      setMessages(savedMessages);
      setActiveContact(savedActiveContact);
      
      saveContacts(contactsWithNoUnread);
    } else {
      initializeAIMentors();
    }
  };

  const initializeAIMentors = () => {
    const aiMentors: Contact[] = [
      {
        id: 'cyber-security',
        name: 'CyberGuard AI',
        avatar: '🛡️',
        lastMessage: 'Ready to learn cybersecurity?',
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Cybersecurity Expert',
        description: 'Ethical hacking and security specialist',
        expertise: ['Penetration Testing', 'Network Security', 'Cryptography']
      },
      {
        id: 'frontend',
        name: 'Frontend Master AI',
        avatar: '🎨',
        lastMessage: 'Let\'s build beautiful UIs!',
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Frontend Development',
        description: 'React, Vue, and modern frontend specialist',
        expertise: ['React', 'Vue.js', 'CSS/SCSS', 'TypeScript']
      },
      {
        id: 'backend',
        name: 'Backend Architect AI',
        avatar: '⚙️',
        lastMessage: 'Ready to build scalable APIs?',
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Backend Development',
        description: 'Server-side and architecture specialist',
        expertise: ['Node.js', 'Python', 'Databases', 'Microservices']
      },
      {
        id: 'fullstack',
        name: 'FullStack Guru AI',
        avatar: '🚀',
        lastMessage: 'Let\'s build end-to-end!',
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Full Stack Development',
        description: 'Complete web development specialist',
        expertise: ['MERN Stack', 'DevOps', 'System Design']
      },
      {
        id: 'python',
        name: 'Python Sensei AI',
        avatar: '🐍',
        lastMessage: 'Python mastery awaits!',
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Python Development',
        description: 'Python and data science specialist',
        expertise: ['Django/Flask', 'Data Science', 'Machine Learning']
      },
      {
        id: 'mobile',
        name: 'Mobile Dev AI',
        avatar: '📱',
        lastMessage: 'Ready to build mobile apps?',
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Mobile Development',
        description: 'Cross-platform mobile specialist',
        expertise: ['React Native', 'Flutter', 'iOS/Android']
      },
      {
        id: 'hosting',
        name: 'CloudOps AI',
        avatar: '☁️',
        lastMessage: 'Let\'s deploy and scale!',
        lastSeen: new Date(),
        unreadCount: 0,
        isOnline: true,
        specialty: 'Cloud & Hosting',
        description: 'DevOps and cloud infrastructure specialist',
        expertise: ['AWS/Azure', 'Docker', 'Kubernetes', 'CI/CD']
      },
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
    setActiveContact('frontend');
    
    saveContacts(aiMentors);
    saveMessages(initialMessages);
    saveActiveContact('frontend');
  };

  const sendMessage = (text: string) => {
    if (!activeContact || !text.trim()) return;

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

    const { mentorId: routedMentorId, response: aiResponseText } = routeAndGenerateAIResponse(text, activeContact);
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: routedMentorId !== activeContact ? `${aiPersonalities[routedMentorId].name} says: ${aiResponseText}` : aiResponseText,
      senderId: routedMentorId,
      timestamp: new Date(now.getTime() + 1000),
      isRead: false,
      date: dateString
    };
    const finalMessages = {
      ...updatedMessages,
      [routedMentorId]: [...(updatedMessages[routedMentorId] || []), aiResponse]
    };
    setMessages(finalMessages);
    saveMessages(finalMessages);
    if (routedMentorId !== activeContact) {
      setActiveContact(routedMentorId);
      saveActiveContact(routedMentorId);
    }

    const updatedContacts = contacts.map(contact => {
      if (contact.id === routedMentorId) {
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
      <div className="h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 animate-pulse">
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
    <div className="h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <ChatLayout
        contacts={contacts}
        messages={messages[activeContact] || []}
        activeContact={activeContact}
        onContactSelect={handleContactSelect}
        onSendMessage={sendMessage}
        user={user}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Index;
