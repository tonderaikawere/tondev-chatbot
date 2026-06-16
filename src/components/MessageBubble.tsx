
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
        className={`max-w-[85%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg px-3 sm:px-4 py-2 sm:py-3 rounded-2xl transition-all duration-200 animate-fade-in ${
          isOwn
            ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-br-md shadow-lg border border-blue-700'
            : 'bg-white text-blue-900 rounded-bl-md shadow-lg border border-blue-200 hover:shadow-xl'
        }`}
      >
        <MarkdownRenderer content={message.text} />
        <div className={`flex items-center justify-end mt-2 space-x-1 ${
          isOwn ? 'text-blue-200' : 'text-blue-500'
        }`}>
          <span className="text-xs font-medium">{formatTime(message.timestamp)}</span>
          {isOwn && (
            <div className="ml-1 flex-shrink-0">
              {message.isRead ? (
                <CheckCheck size={14} className="text-yellow-300" />
              ) : (
                <Check size={14} className="text-blue-300" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
