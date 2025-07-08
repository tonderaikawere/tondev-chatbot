
import { Contact, Message } from '../types/chat';

const STORAGE_KEYS = {
  CONTACTS: 'ai_dev_contacts',
  MESSAGES: 'ai_dev_messages',
  ACTIVE_CONTACT: 'ai_dev_active_contact'
};

export const saveToStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to storage:', error);
  }
};

export const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error('Failed to load from storage:', error);
    return defaultValue;
  }
};

// Helper function to convert date strings back to Date objects
const reviveContacts = (contacts: any[]): Contact[] => {
  return contacts.map(contact => ({
    ...contact,
    lastSeen: new Date(contact.lastSeen)
  }));
};

// Helper function to convert date strings back to Date objects for messages
const reviveMessages = (messagesObj: { [key: string]: any[] }): { [key: string]: Message[] } => {
  const revived: { [key: string]: Message[] } = {};
  
  Object.keys(messagesObj).forEach(key => {
    revived[key] = messagesObj[key].map(message => ({
      ...message,
      timestamp: new Date(message.timestamp)
    }));
  });
  
  return revived;
};

export const saveContacts = (contacts: Contact[]): void => {
  saveToStorage(STORAGE_KEYS.CONTACTS, contacts);
};

export const loadContacts = (): Contact[] => {
  const contacts = loadFromStorage(STORAGE_KEYS.CONTACTS, []);
  return contacts.length > 0 ? reviveContacts(contacts) : [];
};

export const saveMessages = (messages: { [key: string]: Message[] }): void => {
  saveToStorage(STORAGE_KEYS.MESSAGES, messages);
};

export const loadMessages = (): { [key: string]: Message[] } => {
  const messages = loadFromStorage(STORAGE_KEYS.MESSAGES, {});
  return Object.keys(messages).length > 0 ? reviveMessages(messages) : {};
};

export const saveActiveContact = (contactId: string | null): void => {
  saveToStorage(STORAGE_KEYS.ACTIVE_CONTACT, contactId);
};

export const loadActiveContact = (): string | null => {
  return loadFromStorage(STORAGE_KEYS.ACTIVE_CONTACT, null);
};

export const groupMessagesByDate = (messages: Message[]): { [date: string]: Message[] } => {
  return messages.reduce((groups, message) => {
    const date = message.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {} as { [date: string]: Message[] });
};
