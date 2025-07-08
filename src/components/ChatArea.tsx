import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Contact, Message } from '../types/chat';
import MessageBubble from './MessageBubble';
import { groupMessagesByDate } from '../utils/storage';
import { Link, useNavigate } from "react-router-dom";

interface ChatAreaProps {
  contact: Contact;
  messages: Message[];
  onSendMessage: (text: string) => void;
  onClearMessages: () => void;
}

const ChatArea = ({ contact, messages, onSendMessage }: ChatAreaProps) => {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  const groupedMessages = groupMessagesByDate(messages);
  const dates = Object.keys(groupedMessages).sort();

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50 h-full max-h-screen overflow-hidden">
      {/* Mobile Mentor Header */}
      <div className="lg:hidden bg-gradient-to-r from-blue-800 to-blue-900 text-white p-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
            <span className="text-sm">{contact.avatar}</span>
          </div>
          <div className="min-w-0">
            <span className="font-semibold text-sm truncate block">{contact.name}</span>
            <span className="text-xs text-blue-200 truncate block">{contact.specialty} • {contact.isOnline ? 'Online & Ready' : 'Last seen recently'}</span>
            <span className="text-xs text-yellow-300 font-medium block">AI Mentor • Expert Level</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 lg:p-4 space-y-4 min-h-0 overscroll-contain">
        {dates.map((date) => (
          <div key={date}>
            <div className="text-center mb-4 sticky top-0 z-10">
              <span className="bg-white px-3 py-2 rounded-full text-xs text-blue-700 shadow-md border border-blue-200 backdrop-blur-sm">
                {new Date(date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="space-y-2">
              {groupedMessages[date].map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isOwn={message.senderId === 'me'}
                />
              ))}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-blue-200 p-3 lg:p-4 shadow-lg safe-area-inset-bottom">
        <div className="flex items-end space-x-2 max-w-6xl mx-auto">
          <div className="flex-1 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 overflow-hidden shadow-sm">
            <div className="flex items-end px-3 py-2">
              <User className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mb-1" />
              <textarea
                ref={textareaRef}
                value={inputText}
                onChange={handleTextareaChange}
                onKeyPress={handleKeyPress}
                placeholder={`Ask ${contact.name} about ${contact.specialty.toLowerCase()}...`}
                className="w-full bg-transparent resize-none focus:outline-none max-h-[120px] text-sm text-blue-900 placeholder-blue-400 min-h-[1.5rem] leading-relaxed"
                rows={1}
                style={{ 
                  height: 'auto',
                  lineHeight: '1.5rem'
                }}
              />
            </div>
          </div>
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white p-2.5 rounded-xl transition-all duration-200 shadow-lg disabled:shadow-none transform hover:scale-105 disabled:transform-none flex-shrink-0 active:scale-95"
          >
            <Send size={16} />
          </button>
        </div>
        
        <div className="mt-2 text-center">
          <p className="text-xs text-blue-600">
            💡 Try: "Hi", "What is frontend?", "How are you?", "Explain JavaScript"
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-2 text-[11px] text-blue-500">
            <Link to="/terms" className="mx-1 hover:underline text-blue-700">Terms of Service</Link>
            <span className="text-blue-300">|</span>
            <Link to="/privacy" className="mx-1 hover:underline text-blue-700">Privacy Policy</Link>
            <span className="text-blue-300">|</span>
            <Link to="/guide" className="mx-1 hover:underline text-blue-700">User Guide</Link>
            <span className="ml-2 text-blue-400">&copy; {new Date().getFullYear()} Tonde Kawere (Tondev)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
