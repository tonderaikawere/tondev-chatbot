
export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastSeen: Date;
  unreadCount: number;
  isOnline: boolean;
  specialty: string;
  description: string;
  expertise: string[];
}

export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: Date;
  isRead: boolean;
  date: string; // For grouping by date
}

export interface MessageGroup {
  date: string;
  messages: Message[];
}

export interface AIPersonality {
  id: string;
  introduction: string;
  teachingStyle: string;
  specialties: string[];
}
