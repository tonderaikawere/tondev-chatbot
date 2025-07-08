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
}

const ChatLayout = ({
  contacts,
  messages,
  activeContact,
  onContactSelect,
  onSendMessage,
  user,
  onLogout
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
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
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
        <div className="hidden lg:flex items-center bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-white px-4 py-2 border-b shadow-lg relative overflow-hidden space-x-4">
          {/* Mentor Name on the left */}
          {activeContactData && (
            <div className="font-semibold text-lg truncate" title={activeContactData.name}>
              {activeContactData.name}
            </div>
          )}
          {/* Search Icon and SearchBar */}
          <div className="flex items-center ml-4">
            <button
              onClick={() => setShowSearchBar((prev) => !prev)}
              className="p-2 rounded-full hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              title="Search mentors or topics"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
            {showSearchBar && (
              <div className="ml-2 w-64">
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
              <span className="text-white font-semibold text-base truncate block">{user.name}</span>
              <span className="text-blue-200 text-xs truncate block">{user.email}</span>
            </div>
            <button
              onClick={onLogout}
              className="ml-2 text-white/80 hover:text-white text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden bg-gradient-to-r from-blue-800 to-blue-900 text-white p-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {activeContactData && (
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">{activeContactData.avatar}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-sm truncate">{activeContactData.name}</h2>
                  <p className="text-xs text-blue-200 truncate">{activeContactData.specialty}</p>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={onLogout}
            className="text-white/80 hover:text-white text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all duration-200"
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
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4">
            <div className="text-center max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full mb-6 shadow-2xl border-4 border-yellow-400">
                  <span className="text-4xl">🤖</span>
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-800 via-yellow-500 to-blue-800 rounded-full mx-auto mb-6"></div>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 bg-clip-text text-transparent mb-4">
                Welcome {user.name.split(' ')[0]}!
              </h1>
              
              <p className="text-lg text-blue-700 mb-8 leading-relaxed">
                Select an AI mentor to unlock advanced software development knowledge
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: '🛡️', title: 'Cyber Security', id: 'cyber-security' },
                  { icon: '��', title: 'Frontend', id: 'frontend' },
                  { icon: '⚙️', title: 'Backend', id: 'backend' },
                  { icon: '🐍', title: 'Python', id: 'python' }
                ].map((item, index) => (
                  <button
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => handleContactSelect(item.id)}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium text-blue-800">{item.title}</div>
                  </button>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 rounded-xl inline-block shadow-2xl border border-yellow-400">
                <p className="text-base font-medium">
                  💡 Developed with precision by{' '}
                  <span className="text-yellow-400 font-semibold">Tonde Kawere</span>
                </p>
                <p className="text-sm opacity-90 mt-1">
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
