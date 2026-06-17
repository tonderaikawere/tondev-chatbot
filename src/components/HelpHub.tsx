import { useState } from 'react';
import { X, BookOpen, ShieldCheck, FileText, ChevronRight, HelpCircle, HardDrive, Key, Cpu, AlertTriangle } from 'lucide-react';

interface HelpHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpHub({ isOpen, onClose }: HelpHubProps) {
  const [activeTab, setActiveTab] = useState<'guide' | 'privacy' | 'terms'>('guide');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col bg-[#0B132B] w-full max-w-4xl h-[85vh] sm:h-[80vh] rounded-2xl border border-[#243B6B]/40 text-white overflow-hidden shadow-2xl animate-scale-in">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#243B6B]/20 flex items-center justify-between bg-[#0B132B]">
          <div className="min-w-0 pr-4">
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center">
              <HelpCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
              <span className="truncate">User Guide, Terms & Privacy Hub</span>
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
              Your safety, privacy, and operating instructions for Tondev AI Mentors. Sponsored by Kawerify Tech.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-4 py-2 border-b border-[#1C2541] bg-[#1C2541]/20 flex gap-1.5 overflow-x-auto scrollbar-none whitespace-nowrap">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-blue-600 text-white border border-blue-500 shadow-sm'
                : 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>User Guide</span>
          </button>
          
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-blue-600 text-white border border-blue-500 shadow-sm'
                : 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-blue-600 text-white border border-blue-500 shadow-sm'
                : 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0B132B]/50 leading-relaxed text-xs sm:text-sm text-slate-300">
          
          {/* USER GUIDE TAB */}
          {activeTab === 'guide' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center">
                  <span className="p-1 bg-blue-600/20 text-blue-400 rounded mr-2">🚀</span>
                  Getting Started with AI Mentors
                </h3>
                <p>
                  Welcome to **Tondev AI Mentors**! This platform provides specialized AI-powered virtual pair programmers
                  to help you study software engineering, debug code, design systems, and prepare for interviews.
                  The entire system is designed with a <strong>local-first architecture</strong>, letting you operate
                  securely and offline.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#1C2541] pt-4">
                <div className="bg-[#1C2541]/40 border border-[#243B6B]/30 rounded-xl p-4 space-y-2">
                  <h4 className="font-bold text-white flex items-center">
                    <Cpu className="w-4 h-4 text-blue-400 mr-2" />
                    Choosing Your AI Brain
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Configure your brain settings via the <strong>Configure AI Brain</strong> settings dialog:
                  </p>
                  <ul className="list-disc pl-4 text-xs text-slate-400 space-y-1">
                    <li><strong>Fallback (Offline)</strong>: Fully offline custom heuristic engine that resolves coding concepts using local databases.</li>
                    <li><strong>Gemini API (Online)</strong>: Connects directly to Google's Gemini LLM. Requires your own API Key.</li>
                    <li><strong>Ollama (Local)</strong>: Connects to a local server on your computer (e.g., Llama 3/Gemma 2) for offline LLM chats.</li>
                    <li><strong>Chrome Built-in AI</strong>: Runs directly in your Google Chrome browser using Gemini Nano offline.</li>
                  </ul>
                </div>

                <div className="bg-[#1C2541]/40 border border-[#243B6B]/30 rounded-xl p-4 space-y-2">
                  <h4 className="font-bold text-white flex items-center">
                    <BookOpen className="w-4 h-4 text-emerald-400 mr-2" />
                    Offline Course Library
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Click the <strong>Offline Resources Hub</strong> in the sidebar to open 90 modules covering:
                  </p>
                  <ul className="list-disc pl-4 text-xs text-slate-400 space-y-1">
                    <li>Comprehensive official reference guides and docs.</li>
                    <li>Frontend development (HTML, CSS, JS, React, Tailwind).</li>
                    <li>Backend Engineering (Node.js, databases, system design).</li>
                    <li>DevOps, CI/CD, Git workflows, and security.</li>
                    <li>Career preparation guides, resume writing, and interviews.</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-[#1C2541] pt-4 space-y-3">
                <h4 className="font-bold text-white font-semibold">How to Setup Local Offline LLM (Ollama)</h4>
                <ol className="list-decimal pl-4 space-y-2 text-xs text-slate-400">
                  <li>Download and install Ollama from <a href="https://ollama.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold">ollama.com</a>.</li>
                  <li>Run a model on your terminal (e.g. <code className="bg-[#0B132B] px-1.5 py-0.5 rounded text-red-400 font-mono font-semibold">ollama run llama3</code> or <code className="bg-[#0B132B] px-1.5 py-0.5 rounded text-red-400 font-mono font-semibold">gemma2</code>).</li>
                  <li>Make sure Ollama is running in the background (default endpoint: <code className="bg-[#0B132B] px-1.5 py-0.5 rounded text-blue-400 font-mono font-semibold">http://localhost:11434</code>).</li>
                  <li>Open <strong>Configure AI Brain</strong>, select <strong>Ollama (Local)</strong>, select your model from the dropdown, and click <strong>Test Connection</strong>.</li>
                </ol>
              </div>

              <div className="border-t border-[#1C2541] pt-4 space-y-3">
                <h4 className="font-bold text-white font-semibold">Using the High IQ & EQ AI Mentors</h4>
                <p className="text-xs text-slate-400">
                  Each AI mentor specializes in a specific style. You can chat with the Lead Developer, System Architect, Database Engineer, or Career Coach.
                  If you run into grammar mistakes or spelling issues while typing, our built-in offline spelling preprocessor will translate and correct your intents before querying the brain, keeping interactions smooth.
                </p>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY TAB */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" />
                  Privacy Policy
                </h3>
                <p className="text-slate-400 text-xs">
                  Last Updated: June 2026. This policy applies to Tondev AI Mentors, developed by Tonde Kawere and sponsored by Kawerify Tech.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section className="space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">1. Local-First & Data Minimization</h4>
                  <p>
                    We value your privacy. **Tondev AI Mentors** operates as a local-first application:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                    <li>All chat conversations, user credentials, custom settings, and API keys are stored **strictly in your browser's local storage (localStorage and IndexedDB)**.</li>
                    <li>We do not operate a remote server database that logs, compiles, or indexes your personal messages or code.</li>
                    <li>You can delete your entire chat history, user account, or settings at any time by wiping your browser site data or logging out.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">2. Security of API Keys</h4>
                  <p>
                    When using the **Gemini API Mode**, your API key is stored locally in your browser. During queries, the key is transmitted directly from your client browser to the official Google Gemini API endpoint over an encrypted HTTPS connection. 
                  </p>
                  <p className="text-amber-400 flex items-start text-xs bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-lg">
                    <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Security Warning:</strong> Because your API key is saved locally in your browser, anyone with access to your device could inspect the local storage to retrieve it. Never share your device or configure keys on public terminals.
                    </span>
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">3. Telemetry, Cookies & Analytics</h4>
                  <p>
                    This app does **not** use tracking pixels, analytics cookies, or phone-home telemetry.
                    When using **Ollama (Local)** or **Chrome Built-in AI**, all processing is performed 100% on your local hardware CPU/GPU. No internet connection is made, and no data is shared with third parties.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">4. Third-Party LLM Providers</h4>
                  <p>
                    If you use the online Gemini model, your inputs are governed by Google's API Privacy Terms. We encourage you to review Google's Developer terms regarding data usage to understand how your inputs are handled.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">5. Contact Information</h4>
                  <p>
                    For any questions regarding this policy, please visit our sponsor at <a href="https://kawerifytech.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">kawerifytech.com</a>.
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* TERMS OF SERVICE TAB */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center font-semibold">
                  <FileText className="w-5 h-5 text-amber-500 mr-2" />
                  Terms of Service
                </h3>
                <p className="text-slate-400 text-xs">
                  Effective Date: June 2026. Please read these Terms of Service carefully.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section className="space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">1. Acceptance of Terms</h4>
                  <p>
                    By accessing or using Tondev AI Mentors, you agree to comply with and be bound by these terms. If you do not agree, do not use the application.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">2. AI-Generated Output & Liability Disclaimer</h4>
                  <p>
                    You acknowledge and agree that all advice, answers, source code, tutorials, and materials provided by the AI Mentors are generated by artificial intelligence.
                  </p>
                  <div className="text-red-400 bg-red-950/20 border border-red-500/20 p-3 rounded-lg space-y-2 text-xs">
                    <p className="font-bold uppercase flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      CRITICAL DISCLAIMER OF WARRANTIES
                    </p>
                    <p>
                      THE SOFTWARE AND THE AI OUTPUTS ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. TONDE KAWERE AND KAWERIFY TECH EXPLICITLY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                    </p>
                    <p>
                      UNDER NO CIRCUMSTANCES SHALL THE DEVELOPER (TONDE KAWERE) OR THE SPONSOR (KAWERIFY TECH) BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. THIS INCLUDES BUT IS NOT LIMITED TO: COMPILATION ERRORS, PRODUCTION CODE DEPLOYMENT BUGS, SERVER DOWNTIME, SECURITY VULNERABILITIES, DATA LOSS, CORRUPTION, OR FINANCIAL LOSS RESULTING FROM THE USE OF AI-GENERATED IDEAS OR CODE.
                    </p>
                  </div>
                  <p className="text-xs text-slate-400">
                    You are solely responsible for verifying, testing, linting, and security-auditing any code produced by the AI mentors before applying it to production databases or applications.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">3. Intellectual Property Rights</h4>
                  <p>
                    Any code, architectures, or designs you create with the assistance of the AI mentors are entirely your own property. We lay no claim to any intellectual property you generate using this tool.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">4. Permitted Use</h4>
                  <p>
                    You are granted a personal, non-exclusive, non-transferable, revocable license to use this software for learning, coding assistance, and career development purposes. Scraping the offline database, copying raw modules for reselling, or hosting unauthorized mirrors of the compiled resource hub is strictly prohibited.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">5. Modification of Terms</h4>
                  <p>
                    We reserve the right to modify these terms at any time. Your continued use of the app following any changes constitutes acceptance of those changes.
                  </p>
                </section>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#243B6B]/20 bg-[#0B132B] flex items-center justify-between text-[10px] text-slate-400 px-4 sm:px-6">
          <span>© 2026 Tonde Kawere. All rights reserved.</span>
          <span>Sponsored by <a href="https://kawerifytech.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Kawerify Tech</a></span>
        </div>

      </div>
    </div>
  );
}
