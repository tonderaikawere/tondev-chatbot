import { useState, useMemo } from 'react';
import { Search, X, BookOpen, FileText, Wrench, GraduationCap, Users, Briefcase, Copy, Check, ExternalLink, ArrowLeft } from 'lucide-react';
import offlineResources from '../knowledge/offline_resources.json';
import MarkdownRenderer from './MarkdownRenderer';

interface OfflineResourcesHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OfflineResourcesHub({ isOpen, onClose }: OfflineResourcesHubProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedId, setSelectedId] = useState<string>(offlineResources[0]?.id || '');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list'); // Responsive toggle for mobile

  const categories = ['All', 'Documentation', 'Developer Tools', 'Tutorials & Learning', 'Career & Jobs'];

  // Filter resources based on search term and active category
  const filteredResources = useMemo(() => {
    return offlineResources.filter(res => {
      const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
      const matchesSearch = 
        res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.markdown.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.urls.some(url => url.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const selectedResource = useMemo(() => {
    return offlineResources.find(res => res.id === selectedId);
  }, [selectedId]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy resource content:', err);
    }
  };

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Documentation':
        return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'Developer Tools':
        return <Wrench className="w-4 h-4 text-indigo-400" />;
      case 'Tutorials & Learning':
        return <GraduationCap className="w-4 h-4 text-green-400" />;
      case 'Career & Jobs':
        return <Briefcase className="w-4 h-4 text-amber-400" />;
      default:
        return <FileText className="w-4 h-4 text-slate-400" />;
    }
  };

  const handleSelectResource = (id: string) => {
    setSelectedId(id);
    setViewMode('detail');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col bg-[#0B132B] w-full max-w-5xl h-[90vh] sm:h-[85vh] rounded-2xl border border-[#243B6B]/40 text-white overflow-hidden shadow-2xl animate-scale-in">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#243B6B]/20 flex items-center justify-between bg-[#0B132B]">
          <div className="min-w-0 pr-4">
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center">
              <BookOpen className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
              <span className="truncate">Offline Library & Resources Hub</span>
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
              Access local summaries, cheat sheets, and guidelines compiled from 183+ resource sites.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="px-4 py-2 border-b border-[#1C2541] bg-[#1C2541]/20 flex gap-1.5 overflow-x-auto scrollbar-none whitespace-nowrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                const matching = offlineResources.filter(r => cat === 'All' || r.category === cat);
                if (matching.length > 0) {
                  setSelectedId(matching[0].id);
                }
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white border border-blue-500 shadow-sm'
                  : 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Panel: List of Resources (Responsive visibility) */}
          <div className={`w-full sm:w-80 flex-shrink-0 border-r border-[#1C2541] flex flex-col bg-[#0B132B]/30 ${
            viewMode === 'detail' ? 'hidden sm:flex' : 'flex'
          }`}>
            {/* Search Input */}
            <div className="p-3 border-b border-[#1C2541] bg-[#0B132B]/50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={14} />
                <input
                  type="text"
                  placeholder="Search offline docs..."
                  className="w-full bg-[#0B132B] text-white rounded-lg pl-8.5 pr-3 py-1.5 border border-[#243B6B]/30 focus:outline-none focus:border-blue-500 text-xs placeholder-slate-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto divide-y divide-[#1C2541]/40">
              {filteredResources.length > 0 ? (
                filteredResources.map(res => (
                  <button
                    key={res.id}
                    onClick={() => handleSelectResource(res.id)}
                    className={`w-full text-left p-3.5 flex flex-col transition-all cursor-pointer ${
                      selectedId === res.id
                        ? 'bg-blue-600/20 border-l-4 border-blue-500 bg-[#1C2541]/50'
                        : 'hover:bg-white/5 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1 min-w-0">
                      <span className="font-bold text-xs text-white leading-tight mr-1.5">{res.title}</span>
                      <span className="flex-shrink-0 flex items-center justify-center p-0.5 bg-[#1C2541] rounded border border-white/5 mt-0.5">
                        {getCategoryIcon(res.category)}
                      </span>
                    </div>
                    <div className="text-[10px] text-blue-400 font-semibold">{res.domain}</div>
                    <div className="text-[10px] text-slate-300 line-clamp-2 mt-1.5 leading-normal">{res.description}</div>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-slate-500">
                  No matching resources found.
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Content Viewer (Responsive visibility) */}
          <div className={`flex-1 flex flex-col bg-[#0B132B] overflow-hidden ${
            viewMode === 'list' ? 'hidden sm:flex' : 'flex'
          }`}>
            {selectedResource ? (
              <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Viewer Header */}
                <div className="p-4 border-b border-[#1C2541] bg-[#0B132B]/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  
                  {/* Back to list button on Mobile */}
                  <div className="min-w-0 flex-1">
                    <button
                      onClick={() => setViewMode('list')}
                      className="sm:hidden flex items-center space-x-1.5 text-blue-400 hover:text-blue-300 text-xs font-semibold mb-2 cursor-pointer active:scale-95 transition-all"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Library</span>
                    </button>

                    <div className="flex items-center space-x-2 flex-wrap gap-y-1 mb-1">
                      <span className="bg-[#1C2541] text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded border border-[#243B6B]/40 uppercase tracking-wider flex items-center space-x-1.5">
                        {getCategoryIcon(selectedResource.category)}
                        <span className="ml-1">{selectedResource.category}</span>
                      </span>
                      <span className="text-slate-400 text-xs font-semibold">{selectedResource.domain}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">{selectedResource.title}</h3>
                  </div>

                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <button
                      onClick={() => handleCopy(selectedResource.markdown)}
                      className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 border border-blue-500 text-white py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer active:scale-98 shadow-sm"
                      title="Copy guide markdown"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-200" />
                          <span className="text-green-200">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Doc</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Viewer Body */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-slate-100 max-w-none bg-[#0B132B]">
                  
                  {/* Matched URLs subsection */}
                  <div className="mb-6 bg-[#1C2541]/40 rounded-xl p-4 border border-[#243B6B]/30">
                    <h4 className="text-xs font-bold text-slate-200 mb-2 flex items-center">
                      <ExternalLink className="w-3.5 h-3.5 mr-1 text-blue-400" />
                      <span>Original Documentation Links:</span>
                    </h4>
                    <div className="flex flex-col gap-1.5 max-h-24 overflow-y-auto pr-1">
                      {selectedResource.urls.map((url, idx) => (
                        <a
                          key={idx}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-blue-400 hover:text-blue-300 hover:underline break-all truncate flex items-center space-x-1 font-mono"
                        >
                          <span>• {url}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Render Markdown with isOwn={true} to force high-contrast white text */}
                  <div className="pr-1">
                    <MarkdownRenderer content={selectedResource.markdown} isOwn={true} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <BookOpen className="w-12 h-12 text-slate-600 mb-2 animate-pulse" />
                <p className="text-sm text-slate-400">Select a resource to read its guides offline.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
