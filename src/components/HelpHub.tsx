import { useState } from 'react';
import { X, BookOpen, ShieldCheck, FileText, ChevronRight, HelpCircle, HardDrive, Key, Cpu, AlertTriangle, Scale, Lock, RefreshCw, Layers } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

interface HelpHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpHub({ isOpen, onClose }: HelpHubProps) {
  const [activeTab, setActiveTab] = useState<'guide' | 'privacy' | 'terms' | 'compliance'>('guide');

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] h-[85vh] sm:h-[80vh] bg-[#0B132B] border border-[#243B6B]/40 text-white p-0 overflow-hidden flex flex-col shadow-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">Help, Terms and Privacy Hub</DialogTitle>
        <DialogDescription className="sr-only">Comprehensive User Guide, Privacy Policies, and Terms of Service for Tondev AI Mentors</DialogDescription>
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#243B6B]/20 flex items-center justify-between bg-[#0B132B] flex-shrink-0">
          <div className="min-w-0 pr-4">
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center">
              <HelpCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 animate-pulse" />
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
        <div className="px-4 py-2 border-b border-[#1C2541] bg-[#1C2541]/20 flex gap-1.5 overflow-x-auto scrollbar-none whitespace-nowrap flex-shrink-0">
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

          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
              activeTab === 'compliance'
                ? 'bg-blue-600 text-white border border-blue-500 shadow-sm'
                : 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Compliance & Safety</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0B132B]/50 leading-relaxed text-xs sm:text-sm text-slate-300 scrollbar-thin">
          
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
                  Last Updated: June 17, 2026. This policy applies to Tondev AI Mentors, developed by Tonde Kawere and sponsored by Kawerify Tech.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section className="space-y-2 bg-[#1C2541]/20 border border-[#243B6B]/20 p-3 rounded-lg">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">1. Local-First & Data Minimization Philosophy</h4>
                  <p>
                    Unlike traditional cloud-hosted platforms, Tondev AI Mentors prioritizes client-side execution to ensure the highest degree of security and confidentiality:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs">
                    <li><strong>Local Storage Systems</strong>: All chat histories, settings, configurations, and session information are saved locally inside your browser's persistent storage (specifically LocalStorage and IndexedDB). No data is stored on external developer databases.</li>
                    <li><strong>API Key Storage</strong>: Your Google Gemini API Key is stored only within your local client browser session, allowing you to bypass any centralized intermediary. We never collect, transmit, or audit your key on any servers owned by Tonde Kawere or Kawerify Tech.</li>
                    <li><strong>Total Control Over Erasure</strong>: Because the application processes data locally, you retain complete sovereignty over your data. Wiping your browser site data or clearing cache instantly deletes all local databases.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">2. Information We Collect and Process</h4>
                  <p>
                    We do not collect any personally identifiable information (PII) or usage analytics. However, the system utilizes local storage to store:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                    <li>Custom AI Configuration settings (mode chosen, Ollama URLs, LLM model choice, API keys).</li>
                    <li>Chat thread history, including message content, sender tags, timestamps, and active session state.</li>
                    <li>User login profile caches (local username, encrypted local password hash, and profile configurations).</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">3. Transmission of Data (API Requests)</h4>
                  <p>
                    Depending on the selected AI Brain mode, conversational prompts may be transmitted as follows:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs">
                    <li><strong>Google Gemini API Mode</strong>: Prompt payloads are sent directly to the Google API endpoint (`generativelanguage.googleapis.com`) using secure HTTPS. This communication is governed entirely by Google's Developer API Terms of Service.</li>
                    <li><strong>Ollama (Local) Mode</strong>: Prompt payloads remain fully offline and are routed to your local machine loopback address (typically `http://localhost:11434`), meaning no network requests exit your local machine.</li>
                    <li><strong>Chrome Built-in AI Mode</strong>: Queries are processed locally on-device by Chrome's native Gemini Nano engine, requiring no external network requests.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">4. Security of Locally Stored Secrets</h4>
                  <p>
                    While we avoid central server databases, local storage in browsers is not encrypted by default. Anyone with physical access to your device or browser console may be able to inspect and extract your stored API keys or chat history.
                  </p>
                  <p className="text-amber-400 flex items-start text-xs bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-lg">
                    <Lock className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Important Safety Note:</strong> You are strongly advised to secure your device with access passcodes, log out of your profile when leaving the computer unattended, and refrain from running this tool on shared, public, or unverified machines.
                    </span>
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">5. GDPR & CCPA Compliance (Your Privacy Rights)</h4>
                  <p>
                    We fully respect the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Because all data operations occur on the client-side, your rights are fulfilled directly:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                    <li><strong>Right to Access & Portability</strong>: You can inspect all data stored by opening developer console storage.</li>
                    <li><strong>Right to Rectification</strong>: You can modify settings, configurations, or profiles instantly within the app UI.</li>
                    <li><strong>Right to Erasure</strong>: Clicking "Logout" or clearing browser site cookies and data permanently deletes all records. We retain zero backups of your deleted threads.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">6. Children's Privacy</h4>
                  <p>
                    This application does not knowingly target, solicit, or collect information from children under the age of 13. If you believe a child has input credentials or keys into their local browser instance of this app, you can easily delete it by clearing the browser cache.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">7. Contact Information</h4>
                  <p>
                    For questions or concerns regarding these privacy practices, you can reach out to our sponsor, Kawerify Tech, at <a href="https://kawerifytech.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">kawerifytech.com</a>.
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
                  Effective Date: June 17, 2026. Please read these Terms of Service carefully before utilizing the software.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section className="space-y-2 bg-[#1C2541]/20 border border-[#243B6B]/20 p-3 rounded-lg">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">1. Agreement to Terms</h4>
                  <p>
                    By accessing or using Tondev AI Mentors, you represent that you are at least 18 years of age (or the age of majority in your jurisdiction) and that you agree to be bound by these Terms of Service. If you do not accept these terms in their entirety, you are strictly prohibited from using the platform.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">2. License Grant & Restrictions</h4>
                  <p>
                    We grant you a non-exclusive, non-transferable, revocable, personal license to run and interact with Tondev AI Mentors for educational, study, and software engineering development purposes. Under this license:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                    <li>You shall not scrape, extract, disassemble, or commercially redistribute the 90 technical training modules or general knowledge databases offline.</li>
                    <li>You shall not attempt to reverse engineer the spelling preprocessor or proprietary heuristic fallback algorithms.</li>
                    <li>You shall not use the tool to generate malicious code, spam, or perform illegal operations.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">3. User Intellectual Property Ownership</h4>
                  <p>
                    We believe in developer sovereignty. Any code, architecture blueprints, system designs, or documentation you generate while chatting with the AI mentors belongs entirely to you. Tonde Kawere and Kawerify Tech assert no ownership rights, royalties, or intellectual property claims over your generated code outputs.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">4. AI Heuristics & Content Limitations</h4>
                  <p>
                    You acknowledge that the virtual mentors are powered by large language models and local heuristics. AI is subject to "hallucinations," which can produce incorrect, outdated, or security-flawed code. You must independently compile, test, and audit all code recommendations before usage.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">5. Strict Disclaimer of Warranties</h4>
                  <div className="text-red-400 bg-red-950/20 border border-red-500/20 p-3 rounded-lg space-y-2 text-xs">
                    <p className="font-bold uppercase flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      WARRANTY DISCLAIMER CLAUSE
                    </p>
                    <p>
                      TONDEV AI MENTORS IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST PERMISSIBLE PURSUANT TO APPLICABLE LAW, TONDE KAWERE AND KAWERIFY TECH DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SYSTEM INTEGRITY, NON-INFRINGEMENT, AND LACK OF VIRUSES. WE DO NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
                    </p>
                  </div>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">6. Absolute Limitation of Liability</h4>
                  <div className="text-red-400 bg-red-950/20 border border-red-500/20 p-3 rounded-lg space-y-2 text-xs">
                    <p className="font-bold uppercase flex items-center">
                      <Scale className="w-4 h-4 mr-2" />
                      LIMITATION OF LIABILITY
                    </p>
                    <p>
                      IN NO EVENT SHALL TONDE KAWERE, KAWERIFY TECH, OR THEIR SPONSORS, DEVELOPERS, EMPLOYEES, AND AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARED, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE SOFTWARE. THIS INCLUDES, WITHOUT LIMITATION, ANY DAMAGES RESULTING FROM SYSTEM DOWNTIME, CORRUPTED DATABASES, LOSS OF DATA, REVENUE OR PROFITS, DATA SECURITY BREACHES, SERVER CRASHES, INTERRUPTED DEVELOPMENT PIPELINES, OR BUGS RESULTING FROM DEPLOYING AI-GENERATED IDEAS AND CODE.
                    </p>
                  </div>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">7. Indemnity</h4>
                  <p>
                    You agree to defend, indemnify, and hold harmless Tonde Kawere and Kawerify Tech from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the app; (ii) your violation of these terms; or (iii) any third-party claim that code you generated using this app caused server outages or system failure.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">8. Governing Law</h4>
                  <p>
                    These Terms of Service and any dispute arising out of or related to this application shall be governed by, and construed in accordance with, the laws of the jurisdiction of the developer (Tonde Kawere), without regard to its conflict of law principles.
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* COMPLIANCE & SAFETY TAB */}
          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center font-semibold">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  Compliance, Safety & Copyright Disclaimers
                </h3>
                <p className="text-slate-400 text-xs">
                  Important regulatory, safety, and copyright compliance statements for all users.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <section className="space-y-2 bg-[#1C2541]/20 border border-[#243B6B]/20 p-3 rounded-lg">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">1. AI Content & Safety-Critical Systems Warnings</h4>
                  <p>
                    This software is designed as an educational and code assistant platform. The following safety precautions must be followed:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs">
                    <li><strong>No Safety-Critical Reliance</strong>: Do not deploy AI-generated code directly onto systems where malfunctions could result in personal injury, property damage, or catastrophic financial failure (e.g., flight control software, safety-critical medical devices, primary financial ledgers).</li>
                    <li><strong>Security Audits Required</strong>: All code suggestions relating to password hashing, encryption, database transactions, firewall configurations, and CORS rules must be audited by qualified cybersecurity professionals.</li>
                    <li><strong>Outdated Knowledge Base</strong>: Training modules and LLM weights have cutoff dates and may recommend syntax or libraries that have known safety vulnerabilities. Validate dependencies independently.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">2. DMCA & Copyright Infringement Takedown Policy</h4>
                  <p>
                    We respect copyright law. The 90 offline modules inside our library summarize programming knowledge for study purposes. If you believe any material in our library violates your copyrights, you may request removal by submitting a DMCA Takedown Notice:
                  </p>
                  <p className="text-slate-400 text-xs">
                    Your written notice must include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                    <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed.</li>
                    <li>Specific information detailing the module index and section text you wish to have removed.</li>
                    <li>Your full legal name, physical address, email address, and telephone number.</li>
                    <li>A statement that you have a "good faith belief that use of the material in the manner complained of is not authorized."</li>
                  </ul>
                  <p className="text-slate-400 text-xs">
                    Please route all notices to our legal division via the contact details listed at <a href="https://kawerifytech.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">kawerifytech.com</a>.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">3. Cookies & Browser Native storage Audit</h4>
                  <p>
                    We do not store cookies. However, we utilize browser native storage mechanisms. Below is a detailed storage schema audit of this application:
                  </p>
                  <table className="w-full border-collapse border border-[#243B6B]/40 text-left text-xs my-2">
                    <thead>
                      <tr className="bg-[#1C2541]">
                        <th className="border border-[#243B6B]/40 p-1.5 font-semibold text-white">Storage Key</th>
                        <th className="border border-[#243B6B]/40 p-1.5 font-semibold text-white">Type</th>
                        <th className="border border-[#243B6B]/40 p-1.5 font-semibold text-white">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[#243B6B]/40 p-1.5 font-mono">ai-settings</td>
                        <td className="border border-[#243B6B]/40 p-1.5">LocalStorage</td>
                        <td className="border border-[#243B6B]/40 p-1.5 text-slate-400">Stores API keys, model selections, and endpoints.</td>
                      </tr>
                      <tr>
                        <td className="border border-[#243B6B]/40 p-1.5 font-mono">active-session</td>
                        <td className="border border-[#243B6B]/40 p-1.5">LocalStorage</td>
                        <td className="border border-[#243B6B]/40 p-1.5 text-slate-400">Maintains username and active layout state.</td>
                      </tr>
                      <tr>
                        <td className="border border-[#243B6B]/40 p-1.5 font-mono">chat-threads</td>
                        <td className="border border-[#243B6B]/40 p-1.5">IndexedDB</td>
                        <td className="border border-[#243B6B]/40 p-1.5 text-slate-400">Maintains persistent local offline chat histories.</td>
                      </tr>
                    </tbody>
                  </table>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">4. Open Source & Dependency Attributions</h4>
                  <p>
                    This application is built using modern open source libraries. We extend our gratitude and acknowledge the license terms of:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
                    <li><strong>React & Vite</strong>: Licensed under the MIT License.</li>
                    <li><strong>Tailwind CSS</strong>: Licensed under the MIT License.</li>
                    <li><strong>Radix UI (Dialog & primitives)</strong>: Licensed under the MIT License.</li>
                    <li><strong>Lucide React</strong>: Licensed under the ISC License.</li>
                  </ul>
                </section>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#243B6B]/20 bg-[#0B132B] flex items-center justify-between text-[10px] text-slate-400 px-4 sm:px-6 flex-shrink-0">
          <span>© 2026 Tonde Kawere. All rights reserved.</span>
          <span>Sponsored by <a href="https://kawerifytech.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">Kawerify Tech</a></span>
        </div>

      </DialogContent>
    </Dialog>
  );
}
