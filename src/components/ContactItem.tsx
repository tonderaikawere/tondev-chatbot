import { Contact } from '../types/chat';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { aiPersonalities } from '../utils/aiPersonalities';
import { useState } from 'react';

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
    <div className="relative">
      <div
        onClick={onClick}
        className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
          isActive ? 'bg-green-50 border-r-4 border-green-500' : ''
        }`}
      >
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl">
            {contact.avatar}
          </div>
          {contact.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        
        <div className="ml-3 flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900 truncate">
              {contact.name}
            </h3>
            <span className="text-xs text-gray-500">
              {formatTime(contact.lastSeen)}
            </span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-blue-600 font-medium truncate">
                {contact.specialty}
              </p>
              <p className="text-sm text-gray-600 truncate">
                {contact.lastMessage}
              </p>
            </div>
            {contact.unreadCount > 0 && (
              <div className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                {contact.unreadCount}
              </div>
            )}
            {/* Dialog trigger button */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  className="ml-2 px-2 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded shadow"
                  onClick={e => { e.stopPropagation(); setOpen(true); }}
                  title={`Show ${contact.name}'s knowledge`}
                >
                  Info
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-2">
                    <span className="text-2xl">{contact.avatar}</span>
                    <span>{contact.name}</span>
                  </DialogTitle>
                  <DialogDescription>
                    <div className="text-blue-700 font-medium mb-2">{contact.specialty}</div>
                    <div className="mb-2 text-gray-700">{contact.description}</div>
                    {personality?.introduction && <div className="mb-2 text-sm text-blue-600">{personality.introduction}</div>}
                    {/* Core Concepts */}
                    {kb.coreConcepts && kb.coreConcepts.length > 0 && (
                      <div className="mb-2">
                        <div className="font-semibold text-blue-800 mb-1">Core Concepts:</div>
                        <ul className="list-disc ml-5 text-sm">
                          {kb.coreConcepts.slice(0, 5).map((c, i) => (
                            <li key={i}><b>{c.question}</b>: {c.description}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* FAQs */}
                    {kb.faqs && kb.faqs.length > 0 && (
                      <div className="mb-2">
                        <div className="font-semibold text-blue-800 mb-1">FAQs:</div>
                        <ul className="list-disc ml-5 text-sm">
                          {kb.faqs.slice(0, 3).map((f, i) => (
                            <li key={i}><b>{f.question}</b>: {f.answer}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Code Examples */}
                    {kb.codeExamples && kb.codeExamples.length > 0 && (
                      <div className="mb-2">
                        <div className="font-semibold text-blue-800 mb-1">Code Examples:</div>
                        <ul className="list-disc ml-5 text-sm">
                          {kb.codeExamples.slice(0, 2).map((ex, i) => (
                            <li key={i}><b>{ex.name}</b>: {ex.description}
                              <pre className="bg-gray-100 rounded p-2 mt-1 text-xs overflow-x-auto"><code>{ex.code}</code></pre>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Best Practices */}
                    {kb.bestPractices && (
                      <div className="mb-2">
                        <div className="font-semibold text-blue-800 mb-1">Best Practices:</div>
                        {Object.entries(kb.bestPractices).map(([section, items], i) => (
                          <div key={i} className="mb-1">
                            <div className="font-medium text-blue-700">{section}:</div>
                            <ul className="list-disc ml-5 text-sm">
                              {Array.isArray(items) && items.slice(0, 3).map((item, j) => (
                                <li key={j}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Resources */}
                    {kb.resources && (
                      <div className="mb-2">
                        <div className="font-semibold text-blue-800 mb-1">Resources:</div>
                        {Object.entries(kb.resources).map(([section, items], i) => (
                          <div key={i} className="mb-1">
                            <div className="font-medium text-blue-700">{section}:</div>
                            <ul className="list-disc ml-5 text-sm">
                              {Array.isArray(items) && items.slice(0, 3).map((item, j) => (
                                <li key={j}><a href={item} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{item}</a></li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
