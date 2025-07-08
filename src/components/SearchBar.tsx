
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from './ui/input';
import { Contact } from '../types/chat';

interface SearchBarProps {
  contacts: Contact[];
  onSearchResults: (results: Contact[]) => void;
  onClearSearch: () => void;
}

const SearchBar = ({ contacts, onSearchResults, onClearSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      onClearSearch();
      return;
    }

    const searchLower = term.toLowerCase();
    const filtered = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchLower) ||
      contact.specialty.toLowerCase().includes(searchLower) ||
      contact.description.toLowerCase().includes(searchLower) ||
      contact.expertise.some(skill => skill.toLowerCase().includes(searchLower)) ||
      contact.lastMessage.toLowerCase().includes(searchLower)
    );

    onSearchResults(filtered);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onClearSearch();
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-4 w-4 z-10 pointer-events-none" />
      <Input
        type="text"
        placeholder="Search mentors or topics..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10 pr-10 bg-white/90 backdrop-blur-sm border-blue-200 focus:border-yellow-400 focus:ring-yellow-400 text-blue-900 placeholder-blue-400 rounded-xl shadow-sm h-10 sm:h-11 text-sm sm:text-base"
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors z-10"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
