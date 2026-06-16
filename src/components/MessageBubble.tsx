
import { Check, CheckCheck } from 'lucide-react';
import { Message } from '../types/chat';
import MarkdownRenderer from './MarkdownRenderer';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
}

const MessageBubble = ({ message, isOwn }: MessageBubbleProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2 px-2 sm:px-0`}>
      <div
        className={`max-w-[85%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl transition-all duration-200 animate-fade-in ${
          isOwn
            ? 'bg-[#2563EB] text-white rounded-br-none shadow-sm'
            : 'bg-white text-[#0B132B] rounded-bl-none shadow-sm border border-slate-200 hover:shadow-md'
        }`}
      >
        <MarkdownRenderer content={message.text} isOwn={isOwn} />
        <div className={`flex items-center justify-end mt-1.5 space-x-1 ${
          isOwn ? 'text-blue-200/80' : 'text-slate-400'
        }`}>
          <span className="text-[10px] font-medium">{formatTime(message.timestamp)}</span>
          {isOwn && (
            <div className="ml-0.5 flex-shrink-0">
              {message.isRead ? (
                <CheckCheck size={13} className="text-blue-300" />
              ) : (
                <Check size={13} className="text-slate-300" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
