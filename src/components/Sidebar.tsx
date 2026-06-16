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
    <div className={`${isCollapsed ? 'w-0 lg:w-16' : 'w-80'} transition-all duration-300 bg-white border-r border-gray-200 flex flex-col shadow-lg overflow-hidden`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-3 flex items-center justify-between min-h-[56px]">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-base truncate">AI Dev Mentors</span>
          </div>
        )}
        {onToggle && (
          <button
            onClick={onToggle}
            className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        )}
      </div>

      {!isCollapsed && (
        <>
          {/* Search */}
          <div className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={16} />
              <input
                type="text"
                placeholder="Search mentors or topics..."
                className="w-full bg-white rounded-lg pl-9 pr-3 py-2 border border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm text-sm"
              />
            </div>
          </div>

          {/* Mentors Info - compact single line */}
          <div className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs flex items-center justify-between border-b border-blue-700">
            <span className="font-semibold">Expert AI Mentors • Advanced knowledge systems</span>
            <span className="text-yellow-300 font-bold ml-2">{contacts.length} Active</span>
          </div>

          {/* Contacts List */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
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
          <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-center border-t border-blue-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-blue-100 font-semibold uppercase tracking-wider">AI Engine:</span>
              <span className="text-[10px] font-bold text-yellow-300 uppercase px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-sm">
                {currentMode === 'gemini' ? 'Gemini (Online)' : currentMode === 'ollama' ? 'Ollama (Local)' : currentMode === 'chrome' ? 'Chrome AI' : 'Fallback (Offline)'}
              </span>
            </div>
            <SettingsDialog 
              onSettingsSaved={() => setCurrentMode(loadAISettings().aiMode)}
              trigger={
                <button className="w-full flex items-center justify-center space-x-2 text-xs text-white bg-white/10 hover:bg-white/20 py-2 rounded-lg transition-all border border-white/15 hover:border-white/30 backdrop-blur-sm cursor-pointer shadow-sm hover:shadow active:scale-98">
                  <Settings className="w-3.5 h-3.5 text-yellow-300 animate-spin-slow" />
                  <span>Configure AI Brain</span>
                </button>
              }
            />
          </div>
        </>
      )}

      {isCollapsed && (
        <div className="flex-1 flex flex-col items-center py-4 space-y-4">
          {contacts.slice(0, 5).map((contact) => (
            <div key={contact.id} className="flex flex-col items-center">
              <button
                onClick={() => onContactSelect(contact.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 ${
                  contact.id === activeContact 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-blue-100 text-gray-600'
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
          <div className="pt-4 border-t border-gray-200 w-full flex justify-center">
            <SettingsDialog 
              onSettingsSaved={() => setCurrentMode(loadAISettings().aiMode)}
              trigger={
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-blue-100 text-gray-600 transition-all duration-200"
                  title="Configure AI Settings"
                >
                  <Settings className="w-5 h-5 text-blue-600" />
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
