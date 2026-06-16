import { Contact } from '../types/chat';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { aiPersonalities } from '../utils/aiPersonalities';
import { useState } from 'react';
import { Shield, Sparkles, BookOpen, Layers } from 'lucide-react';

interface ContactItemProps {
  contact: Contact;
  isActive: boolean;
  onClick: () => void;
}

const ContactItem = ({ contact, isActive, onClick }: ContactItemProps) => {
  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes}m`;
    } else if (hours < 24) {
      return `${hours}h`;
    } else {
      return `${days}d`;
    }
  };

  const [open, setOpen] = useState(false);
  const personality = aiPersonalities[contact.id];
  const kb = personality?.knowledgeBase?.knowledgeBase || {};

  return (
    <div className="relative w-full">
      <div
        onClick={onClick}
        className={`flex items-center p-3 cursor-pointer transition-all duration-200 ${
          isActive 
            ? 'bg-[#1C2541] border-r-4 border-blue-500 shadow-inner' 
            : 'hover:bg-[#1C2541]/45 border-r-4 border-transparent'
        }`}
      >
        <div className="relative flex-shrink-0">
          <div className="w-11 h-11 bg-[#2563EB] rounded-full flex items-center justify-center text-lg border border-[#243B6B]/40 shadow-sm">
            {contact.avatar}
          </div>
          {contact.isOnline && (
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-[#0B132B]"></div>
          )}
        </div>
        
        <div className="ml-3 flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <h3 className={`font-semibold text-sm truncate transition-colors duration-150 ${
              isActive ? 'text-white' : 'text-slate-200'
            }`}>
              {contact.name}
            </h3>
            <span className={`text-[10px] transition-colors duration-150 ${
              isActive ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {formatTime(contact.lastSeen)}
            </span>
          </div>
          <div className="flex justify-between items-center mt-0.5">
            <div className="flex-1 min-w-0">
              <p className={`text-[11px] font-semibold truncate transition-colors duration-150 ${
                isActive ? 'text-blue-400' : 'text-blue-500'
              }`}>
                {contact.specialty}
              </p>
              <p className={`text-xs truncate transition-colors duration-150 ${
                isActive ? 'text-slate-300' : 'text-slate-400'
              }`}>
                {contact.lastMessage}
              </p>
            </div>
            {contact.unreadCount > 0 && (
              <div className="bg-blue-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ml-2 shadow-sm animate-pulse">
                {contact.unreadCount}
              </div>
            )}
            
            {/* Info Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  className={`ml-2 px-2 py-1 text-[10px] font-semibold rounded transition-all duration-150 border cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/20 hover:bg-blue-600 border-blue-500/40 hover:border-blue-400 text-blue-400 hover:text-white'
                      : 'bg-[#1C2541] hover:bg-blue-600 border-[#243B6B]/60 hover:border-blue-500 text-slate-300 hover:text-white'
                  }`}
                  onClick={e => { e.stopPropagation(); setOpen(true); }}
                  title={`Show ${contact.name}'s knowledge`}
                >
                  Info
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-md bg-white border border-blue-100 rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[85vh]">
                <DialogHeader className="border-b border-gray-100 pb-3 mb-4">
                  <DialogTitle className="flex items-center space-x-2.5">
                    <span className="text-3xl p-1.5 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">{contact.avatar}</span>
                    <div>
                      <h2 className="text-xl font-bold text-blue-900">{contact.name}</h2>
                      <p className="text-xs text-blue-600 font-semibold">{contact.specialty}</p>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription asChild>
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-sans">
                    <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/40 text-blue-900 flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs italic font-medium">{contact.description}</p>
                    </div>

                    {personality?.introduction && (
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span>Introduction</span>
                        </div>
                        <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">{personality.introduction}</p>
                      </div>
                    )}

                    {/* Core Concepts */}
                    {kb.coreConcepts && kb.coreConcepts.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>Core Learning Concepts</span>
                        </div>
                        <div className="grid grid-cols-1 gap-1.5 max-h-32 overflow-y-auto pr-1">
                          {kb.coreConcepts.slice(0, 6).map((c: { question: string; answer?: string; description?: string }, i: number) => (
                            <div key={i} className="text-xs bg-gray-50 hover:bg-blue-50/20 p-2 rounded border border-gray-100 transition-colors">
                              <span className="font-semibold text-blue-950 block">{c.question}</span>
                              <span className="text-gray-500 mt-0.5 block line-clamp-2">{c.answer || c.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Best Practices */}
                    {kb.bestPractices && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
                          <Layers className="w-3.5 h-3.5 text-blue-600" />
                          <span>Best Practices Included</span>
                        </div>
                        <div className="max-h-36 overflow-y-auto pr-1 space-y-2">
                          {Object.entries(kb.bestPractices).map(([section, items], i) => (
                            <div key={i} className="text-xs bg-slate-50/60 p-2.5 rounded-lg border border-gray-200/50">
                              <span className="font-semibold text-blue-900 block mb-1">{section}</span>
                              <ul className="list-disc pl-4 space-y-0.5 text-gray-600">
                                {Array.isArray(items) && items.slice(0, 3).map((item, j) => (
                                  <li key={j} className="leading-tight">{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
