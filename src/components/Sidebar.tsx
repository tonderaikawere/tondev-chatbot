import { Search, Code2, Cpu, Menu, X, Settings } from 'lucide-react';
import { Contact } from '../types/chat';
import ContactItem from './ContactItem';
import { useState, useEffect } from 'react';
import SettingsDialog from './SettingsDialog';
import { loadAISettings } from '../utils/aiSettings';

interface SidebarProps {
  contacts: Contact[];
  activeContact: string | null;
  onContactSelect: (contactId: string) => void;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ contacts, activeContact, onContactSelect, isCollapsed = false, onToggle }: SidebarProps) => {
  const [currentMode, setCurrentMode] = useState<string>('fallback');

  useEffect(() => {
    const settings = loadAISettings();
    setCurrentMode(settings.aiMode);
  }, []);
  return (
    <div className={`${isCollapsed ? 'w-0 lg:w-16' : 'w-80'} transition-all duration-300 bg-[#0B132B] border-r border-[#1C2541] flex flex-col shadow-xl overflow-hidden`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1C2541] via-[#0B132B] to-[#1C2541] text-white p-3 flex items-center justify-between min-h-[56px] border-b border-[#243B6B]/20">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-white bg-opacity-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Code2 className="w-5 h-5 text-blue-400" />
            </div>
            <span className="font-bold text-base truncate tracking-tight">AI Dev Mentors</span>
          </div>
        )}
        {onToggle && (
          <button
            onClick={onToggle}
            className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        )}
      </div>

      {!isCollapsed && (
        <>
          {/* Search */}
          <div className="p-2 bg-[#1C2541]/40 border-b border-[#243B6B]/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={16} />
              <input
                type="text"
                placeholder="Search mentors or topics..."
                className="w-full bg-[#0B132B]/60 text-white rounded-lg pl-9 pr-3 py-2 border border-[#243B6B]/30 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 transition-all duration-200 shadow-inner text-sm placeholder-slate-400"
              />
            </div>
          </div>

          {/* Mentors Info - compact single line */}
          <div className="px-3 py-1.5 bg-gradient-to-r from-[#1C2541] to-[#0B132B] text-slate-300 text-xs flex items-center justify-between border-b border-[#243B6B]/30">
            <span className="font-semibold text-slate-200">Expert AI Mentors</span>
            <span className="text-blue-400 font-bold ml-2 bg-[#1C2541] px-2 py-0.5 rounded border border-[#243B6B]/30">{contacts.length} Active</span>
          </div>

          {/* Contacts List */}
          <div className="flex-1 overflow-y-auto bg-[#0B132B]/20 divide-y divide-[#1C2541]/30">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-center">
                <ContactItem
                  contact={contact}
                  isActive={contact.id === activeContact}
                  onClick={() => onContactSelect(contact.id)}
                />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 bg-[#1C2541] text-center border-t border-[#243B6B]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">AI Engine:</span>
              <span className="text-[10px] font-bold text-blue-400 uppercase px-1.5 py-0.5 rounded bg-[#0B132B] border border-[#243B6B]/30">
                {currentMode === 'gemini' ? 'Gemini (Online)' : currentMode === 'ollama' ? 'Ollama (Local)' : currentMode === 'chrome' ? 'Chrome AI' : 'Fallback (Offline)'}
              </span>
            </div>
            <SettingsDialog 
              onSettingsSaved={() => setCurrentMode(loadAISettings().aiMode)}
              trigger={
                <button className="w-full flex items-center justify-center space-x-2 text-xs text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-all border border-blue-500 hover:border-blue-400 shadow-md cursor-pointer active:scale-98 font-semibold">
                  <Settings className="w-3.5 h-3.5 text-white animate-spin-slow" />
                  <span>Configure AI Brain</span>
                </button>
              }
            />
          </div>
        </>
      )}

      {isCollapsed && (
        <div className="flex-1 flex flex-col items-center py-4 space-y-4 bg-[#0B132B]">
          {contacts.slice(0, 5).map((contact) => (
            <div key={contact.id} className="flex flex-col items-center">
              <button
                onClick={() => onContactSelect(contact.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 ${
                  contact.id === activeContact 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-[#1C2541] hover:bg-blue-900/30 text-slate-300'
                }`}
                title={contact.name}
              >
                {contact.avatar}
              </button>
              {/* Info button for collapsed sidebar */}
              <span className="mt-1">
                <ContactItem
                  contact={contact}
                  isActive={contact.id === activeContact}
                  onClick={() => {}}
                />
              </span>
            </div>
          ))}
          <div className="pt-4 border-t border-[#1C2541] w-full flex justify-center">
            <SettingsDialog 
              onSettingsSaved={() => setCurrentMode(loadAISettings().aiMode)}
              trigger={
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1C2541] hover:bg-blue-600 hover:text-white text-blue-400 transition-all duration-200"
                  title="Configure AI Settings"
                >
                  <Settings className="w-5 h-5" />
                </button>
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
