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
  isGenerating?: boolean;
}

const ChatArea = ({ contact, messages, onSendMessage, isGenerating = false }: ChatAreaProps) => {
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
    <div className="flex-1 flex flex-col bg-[#F4F5F7] h-full max-h-screen overflow-hidden">
      {/* Mobile Mentor Header */}
      <div className="lg:hidden bg-[#0B132B] text-white p-3 flex items-center justify-between shadow-md border-b border-[#1C2541]">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-[#1C2541] rounded-full flex items-center justify-center border border-blue-500/30">
            <span className="text-sm">{contact.avatar}</span>
          </div>
          <div className="min-w-0">
            <span className="font-bold text-sm truncate block">{contact.name}</span>
            <span className="text-[10px] text-blue-400 font-semibold truncate block">{contact.specialty} • {contact.isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 lg:p-4 space-y-4 min-h-0 overscroll-contain">
        {dates.map((date) => (
          <div key={date}>
            <div className="text-center mb-4 sticky top-0 z-10">
              <span className="bg-white px-3 py-1.5 rounded-full text-xs text-[#0B132B] font-semibold shadow-sm border border-slate-200/60 backdrop-blur-sm">
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
        {isGenerating && (
          <div className="flex justify-start mb-2 px-2 sm:px-0 animate-pulse">
            <div className="bg-white text-[#0B132B] px-4 py-3 rounded-2xl rounded-bl-md shadow-md border border-slate-200 flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="text-xs text-slate-500 font-medium ml-1.5">{contact.name} is thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-slate-200 p-3 lg:p-4 shadow-lg safe-area-inset-bottom">
        <div className="flex items-end space-x-2 max-w-6xl mx-auto">
          <div className="flex-1 bg-slate-50 rounded-xl border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all overflow-hidden shadow-sm">
            <div className="flex items-end px-3 py-2">
              <User className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mb-1" />
              <textarea
                ref={textareaRef}
                value={inputText}
                onChange={handleTextareaChange}
                onKeyPress={handleKeyPress}
                disabled={isGenerating}
                placeholder={isGenerating ? `${contact.name} is writing a response...` : `Ask ${contact.name} about ${contact.specialty.toLowerCase()}...`}
                className="w-full bg-transparent resize-none focus:outline-none max-h-[120px] text-sm text-[#0B132B] placeholder-slate-400 min-h-[1.5rem] leading-relaxed disabled:opacity-55"
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
            disabled={!inputText.trim() || isGenerating}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white p-2.5 rounded-xl transition-all duration-200 shadow-md disabled:shadow-none transform hover:scale-102 disabled:transform-none flex-shrink-0 active:scale-95 cursor-pointer"
          >
            <Send size={16} />
          </button>
        </div>
        
        <div className="mt-2 text-center">
          <p className="text-xs text-slate-500">
            💡 Try: "Hi", "What is frontend?", "How are you?", or click the settings gear to link models.
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400">
            <Link to="/terms" className="mx-1 hover:underline hover:text-blue-600 transition-colors">Terms of Service</Link>
            <span className="text-slate-300">|</span>
            <Link to="/privacy" className="mx-1 hover:underline hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <span className="text-slate-300">|</span>
            <Link to="/guide" className="mx-1 hover:underline hover:text-blue-600 transition-colors">User Guide</Link>
            <span className="ml-2 text-slate-400">&copy; {new Date().getFullYear()} Tonde Kawere (Tondev)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
