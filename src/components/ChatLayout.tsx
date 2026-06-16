import { useState } from 'react';
import { Contact, Message } from '../types/chat';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";
import { Search } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface ChatLayoutProps {
  contacts: Contact[];
  messages: Message[];
  activeContact: string | null;
  onContactSelect: (contactId: string) => void;
  onSendMessage: (text: string) => void;
  user: User;
  onLogout: () => void;
  isGenerating?: boolean;
}

const ChatLayout = ({
  contacts,
  messages,
  activeContact,
  onContactSelect,
  onSendMessage,
  user,
  onLogout,
  isGenerating = false
}: ChatLayoutProps) => {
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);
  const [isSearching, setIsSearching] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const activeContactData = contacts.find(c => c.id === activeContact);

  const handleSearchResults = (results: Contact[]) => {
    setFilteredContacts(results);
    setIsSearching(true);
  };

  const handleClearSearch = () => {
    setFilteredContacts(contacts);
    setIsSearching(false);
  };

  const handleContactSelect = (contactId: string) => {
    onContactSelect(contactId);
    setIsMobileSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-[#F4F5F7] overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar
          contacts={filteredContacts}
          activeContact={activeContact}
          onContactSelect={handleContactSelect}
          isCollapsed={isSidebarCollapsed}
          onToggle={toggleSidebar}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className={`
        fixed lg:hidden inset-y-0 left-0 z-50
        w-80 transform transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar
          contacts={filteredContacts}
          activeContact={activeContact}
          onContactSelect={handleContactSelect}
          onToggle={() => setIsMobileSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Header - Desktop */}
        <div className="hidden lg:flex items-center bg-[#0B132B] text-white px-5 py-2.5 border-b border-[#1C2541] shadow-md relative overflow-hidden space-x-4">
          {/* Mentor Name and Specialty Badge */}
          {activeContactData && (
            <div className="flex items-center space-x-2 min-w-0">
              <span className="text-xl font-bold tracking-tight text-white truncate">{activeContactData.name}</span>
              <span className="text-[10px] bg-blue-600/20 text-blue-400 font-bold px-2 py-0.5 rounded-md border border-blue-500/30 flex-shrink-0">
                {activeContactData.specialty}
              </span>
            </div>
          )}
          {/* Search Icon and SearchBar */}
          <div className="flex items-center ml-4">
            <button
              onClick={() => setShowSearchBar((prev) => !prev)}
              className="p-1.5 rounded-lg hover:bg-[#1C2541] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              title="Search mentors or topics"
            >
              <Search className="w-4 h-4 text-slate-300" />
            </button>
            {showSearchBar && (
              <div className="ml-2 w-64 animate-fade-in">
                <SearchBar
                  contacts={contacts}
                  onSearchResults={handleSearchResults}
                  onClearSearch={handleClearSearch}
                />
              </div>
            )}
          </div>
          {/* Spacer */}
          <div className="flex-1" />
          {/* User Info and Logout on the right */}
          <div className="flex items-center space-x-3 min-w-0">
            <div className="min-w-0 text-right">
              <span className="text-white font-bold text-sm truncate block tracking-tight">{user.name}</span>
              <span className="text-slate-400 text-xs truncate block">{user.email}</span>
            </div>
            <button
              onClick={onLogout}
              className="ml-2 text-slate-300 hover:text-white text-xs bg-[#1C2541] hover:bg-blue-600 px-3.5 py-1.5 rounded-lg transition-all border border-[#243B6B]/40 hover:border-blue-500 font-semibold cursor-pointer shadow-sm active:scale-98"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden bg-[#0B132B] text-white p-3 flex items-center justify-between shadow-md border-b border-[#1C2541]">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="text-white p-1.5 hover:bg-[#1C2541] rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {activeContactData && (
              <div className="flex items-center space-x-2.5 min-w-0 flex-1">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-[#1C2541] rounded-full flex items-center justify-center border border-blue-500/30">
                  <span className="text-sm">{activeContactData.avatar}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-bold text-sm truncate text-white leading-tight">{activeContactData.name}</h2>
                  <p className="text-[10px] text-blue-400 font-semibold truncate leading-none mt-0.5">{activeContactData.specialty}</p>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={onLogout}
            className="text-slate-300 hover:text-white text-xs bg-[#1C2541] hover:bg-blue-600 px-3 py-1.5 rounded-lg border border-[#243B6B]/40 hover:border-blue-500 transition-all font-semibold"
          >
            Logout
          </button>
        </div>

        {/* Chat Area or Welcome Screen */}
        {activeContactData ? (
          <ChatArea
            contact={activeContactData}
            messages={messages}
            onSendMessage={onSendMessage}
            onClearMessages={() => {}}
            isGenerating={isGenerating}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-[#F4F5F7] p-4 sm:p-6 md:p-8">
            <div className="text-center max-w-xl mx-auto animate-fade-in">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-[#0B132B] rounded-2xl mb-4 shadow-xl border border-[#243B6B]/30">
                  <span className="text-4xl">🤖</span>
                </div>
                <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto"></div>
              </div>
              
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B132B] mb-2 tracking-tight">
                Welcome, {user.name.split(' ')[0]}!
              </h1>
              
              <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
                Select an expert AI mentor from the sidebar to begin your interactive learning journey.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: '🛡️', title: 'Cyber Security', id: 'cyber-security', desc: 'Threats & security concepts' },
                  { icon: '🎨', title: 'Frontend master', id: 'frontend', desc: 'React, layouts & UI designs' },
                  { icon: '⚙️', title: 'Backend master', id: 'backend', desc: 'Server APIs & DB queries' },
                  { icon: '🐍', title: 'Python sensei', id: 'python', desc: 'Data structures & scripts' }
                ].map((item, index) => (
                  <button
                    key={index}
                    className="bg-white p-3.5 rounded-xl border border-slate-200/70 hover:border-blue-500 hover:shadow-md transition-all duration-200 text-left flex items-center space-x-3 cursor-pointer group"
                    onClick={() => handleContactSelect(item.id)}
                  >
                    <div className="text-2xl p-1.5 bg-slate-50 rounded-lg group-hover:bg-blue-50 border border-slate-100 transition-colors">{item.icon}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-[#0B132B] group-hover:text-blue-600 transition-colors leading-tight">{item.title}</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="bg-[#0B132B] text-white p-5 rounded-2xl inline-block shadow-lg border border-[#1C2541] max-w-sm">
                <p className="text-xs font-medium text-slate-200">
                  💡 Developed with precision by{' '}
                  <span className="text-blue-400 font-bold">Tonde Kawere</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  Advanced AI mentors for software engineering excellence
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLayout;
