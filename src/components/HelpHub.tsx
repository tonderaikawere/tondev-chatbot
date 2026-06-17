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
                  Getting Started & Operator's Manual
                </h3>
                <p>
                  Welcome to the **Tondev AI Mentors Operator's Manual**. This system is configured as a client-side,
                  local-first pair programming interface. It bridges standard developer resources with customizable
                  AI large language model (LLM) backends, allowing developers to configure online AI brains or operate
                  100% offline.
                </p>
              </div>

              <div className="border-t border-[#1C2541] pt-4 space-y-4">
                <h4 className="font-bold text-white text-sm">1. Selecting and Configuring Your AI Engine</h4>
                <p className="text-slate-400 text-xs">
                  The application supports four operational connection modes. You can configure these in real-time by clicking
                  the <strong>"Configure AI Brain"</strong> button in the sidebar footer:
                </p>
                <div className="space-y-3 pl-3 text-xs">
                  <div>
                    <h5 className="font-bold text-slate-200">A. Smart Fallback (Offline Heuristics)</h5>
                    <p className="text-slate-400">
                      Ideal for conditions with zero internet connectivity. This mode uses local heuristic token matching
                      to search and format answers directly out of the offline knowledge bases embedded inside the application.
                      It has zero latency and runs entirely on the client.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">B. Google Gemini API (Online)</h5>
                    <p className="text-slate-400">
                      Connects directly to the Google Gemini model endpoints (Gemini 1.5 Pro/Flash). To activate:
                    </p>
                    <ol className="list-decimal pl-5 mt-1 text-slate-400 space-y-1">
                      <li>Obtain an API key from Google AI Studio.</li>
                      <li>Input the key inside the API Key configuration field.</li>
                      <li>Click "Test Connection" to verify endpoint handshake. Your key is stored locally in LocalStorage and never sent to our servers.</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">C. Ollama (Local LLM)</h5>
                    <p className="text-slate-400">
                      Allows running open-source models (Llama 3, Gemma 2, Mistral, etc.) offline on your local computer.
                    </p>
                    <ol className="list-decimal pl-5 mt-1 text-slate-400 space-y-1">
                      <li>Download and install the Ollama runner from <a href="https://ollama.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-semibold">ollama.com</a>.</li>
                      <li>Open your CLI terminal and pull a model: <code className="bg-[#0B132B] px-1 py-0.5 rounded text-red-400 font-mono">ollama pull gemma2</code>.</li>
                      <li>Verify the Ollama background daemon is active at the default loopback port: <code className="bg-[#0B132B] px-1 py-0.5 rounded text-blue-400 font-mono">http://localhost:11434</code>.</li>
                      <li>Configure your Ollama URL in the settings panel, select the pulled model from the dropdown list, and save.</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">D. Chrome Built-in AI</h5>
                    <p className="text-slate-400">
                      Utilizes Google Chrome's built-in Gemini Nano model running offline directly inside the browser sandbox:
                    </p>
                    <ul className="list-disc pl-5 mt-1 text-slate-400 space-y-1">
                      <li>Requires Google Chrome (version 127 or higher).</li>
                      <li>Ensure Chrome flag <code className="bg-[#0B132B] px-1 py-0.5 rounded text-blue-400 font-mono">chrome://flags/#optimization-guide-on-device-model</code> is set to Enabled/Bypass limit.</li>
                      <li>Verify the browser has fully downloaded the local weights by checking the Chrome AI status indicator.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#1C2541] pt-4 space-y-3">
                <h4 className="font-bold text-white text-sm">2. Interacting with AI Mentors</h4>
                <p className="text-slate-400 text-xs">
                  Each virtual mentor (Lead Developer, System Architect, Database Specialist, Career Coach) is loaded with unique prompt context rules.
                  The interface includes a built-in preprocessor to catch common syntax and grammar spelling issues on-device before submitting the prompt
                  payload, allowing the models to process your intent with maximum accuracy even if you make typos during fast drafting.
                </p>
              </div>

              <div className="border-t border-[#1C2541] pt-4 space-y-3">
                <h4 className="font-bold text-white text-sm">3. Navigating the Offline Course Library</h4>
                <p className="text-slate-400 text-xs">
                  Click the <strong>"Library"</strong> button in the sidebar footer to open the Offline Resources Hub. This hub hosts 90 technical modules
                  which can be browsed, searched, and read fully offline. Use the vertical course tree to hop between modules, click "Next Module" to navigate
                  chronologically, and click "Copy Module" to instantly copy code snippets to your clipboard.
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
                  Privacy Policy & Personal Data Statement
                </h3>
                <p className="text-slate-400 text-xs">
                  Last Updated: June 17, 2026. This comprehensive privacy policy applies to Tondev AI Mentors, developed by Tonde Kawere and sponsored by Kawerify Tech.
                </p>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                <section className="space-y-2">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold">Article 1: Scope & Local-First Philosophy</h4>
                  <p>
                    This Privacy Policy describes how we handle user data. Our primary operational philosophy is **local-first**.
                    This means we do not host centralized cloud databases that collect, compile, parse, index, or audit your conversations, code inputs, secrets, or preferences.
                    The application runs as a static client-side codebase inside your browser, executing all processes on your local hardware device.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">Article 2: Types of Data Processed</h4>
                  <p>
                    Because this application operates on-device, any data processed is stored directly inside your browser sandbox. The categories of data processed include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs">
                    <li><strong>Conversational Prompt Payloads</strong>: The text strings, code snippets, logs, and errors you input inside the chat textarea.</li>
                    <li><strong>Secret Tokens & Credentials</strong>: Google Gemini API Keys and Ollama loopback configurations.</li>
                    <li><strong>User Profiles & Sessions</strong>: Local usernames, encrypted local password hashes used to unlock chat profiles, and custom interface preferences (theme settings, active screens).</li>
                    <li><strong>Local Chat History</strong>: Persistent logs of all sent and received messages compiled into on-device indexes.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">Article 3: Transmission of Data and Third-Party API Endpoints</h4>
                  <p>
                    Depending on your selected configuration, prompts and API tokens may be sent across network connections:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs">
                    <li><strong>Google Gemini API Connections</strong>: Prompt payloads are sent directly from your browser to Google AI Studio API endpoints (`https://generativelanguage.googleapis.com`). This request is authenticated using your locally stored API Key. Your keys and prompts are processed under Google's Generative AI API Developer Terms. We do not inspect, log, or proxy this connection.</li>
                    <li><strong>Local Endpoints (Ollama / Chrome AI)</strong>: If using local mode, all data packets remain within the boundaries of your local machine. Prompts are sent to your local host port or Chrome browser memory sandbox and never transit the internet.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">Article 4: Browser Storage & Cookies Audit</h4>
                  <p>
                    We do not use tracking pixels, analytical scripts, or third-party advertising cookies. We utilize browser-native storage technologies to implement persistent offline data models:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs">
                    <li><strong>LocalStorage</strong>: Used to store key-value configurations, including the active AI brain settings key `ai-settings`, user theme parameters, and basic session profile details.</li>
                    <li><strong>IndexedDB</strong>: Utilized as a structured local database to store large text objects, including historical message records and custom prompt history index rules.</li>
                  </ul>
                  <p className="text-slate-400 text-xs">
                    You can inspect, modify, or erase these browser-native records at any time via your browser's Developer Tools (under the Application/Storage tab).
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">Article 5: Information Security & Security Warnings</h4>
                  <p>
                    Because all configurations, including API keys, are stored in plain text or unencrypted state within browser-native storage (such as LocalStorage), they are vulnerable to device extraction. 
                  </p>
                  <div className="text-amber-400 bg-amber-500/10 border border-amber-500/20 p-3 rounded-lg space-y-1.5 text-xs">
                    <p className="font-bold flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      LOCAL DATA SECURITY THREATS
                    </p>
                    <p>
                      1. Cross-Site Scripting (XSS): If the application is compromised or running in an insecure environment, malicious browser extensions or scripts might inspect LocalStorage and leak your Google Gemini API Keys.
                    </p>
                    <p>
                      2. Physical Access: Anyone with physical access to your device can open the browser developer console and extract your configurations.
                    </p>
                    <p>
                      <strong>Remediation:</strong> Do not configure your API keys on public, shared, or untrusted machines. Secure your browser profile with access locks, keep your operating system updated, and regularly audit your Gemini API billing logs.
                    </p>
                  </div>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">Article 6: GDPR & CCPA Compliance (Data Privacy Rights)</h4>
                  <p>
                    Under the General Data Protection Regulation (GDPR) (EU) and the California Consumer Privacy Act (CCPA) (US), users have specific data privacy rights. Because our architecture is decentralized, these rights are self-fulfilled directly by you:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs">
                    <li><strong>Right to Rectification</strong>: You can change, replace, or update your local usernames, credentials, and API Keys inside the Settings Dialog at any time.</li>
                    <li><strong>Right to Erasure (Right to be Forgotten)</strong>: Clearing your browser history, deleting local site data, or clicking the Logout button permanently deletes all local IndexedDB and LocalStorage variables. We do not keep back-ups of your data on any server.</li>
                    <li><strong>Right of Access & Portability</strong>: You can copy and export your chat transcript logs at any time by using the built-in copy controls or extracting data objects directly from your browser's console index.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">Article 7: Children's Online Privacy Protection Act (COPPA)</h4>
                  <p>
                    We comply with the Children's Online Privacy Protection Act (COPPA). Tondev AI Mentors is not directed to, or intended for use by, children under the age of 13. If we discover that a child has input personal data or keys into a local instance, we advise parents to immediately clear the browser cache on that device.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-blue-400 font-semibold font-semibold">Article 8: Governing Law & Policy Updates</h4>
                  <p>
                    We reserve the right to modify this Privacy Policy at any time. Updates will be reflected directly inside this application. Your continued use of the application following updates constitutes your acceptance of the updated policies.
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
                  Terms of Service Agreement
                </h3>
                <p className="text-slate-400 text-xs">
                  Effective Date: June 17, 2026. Please read these Terms of Service carefully before utilizing the software.
                </p>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                <section className="space-y-2 bg-[#1C2541]/20 border border-[#243B6B]/20 p-3 rounded-lg">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold">Article 1: Agreement & Binding Terms</h4>
                  <p>
                    By downloading, installing, launching, or accessing Tondev AI Mentors, you signify your irrevocable consent and agreement to be bound by these Terms of Service.
                    If you are accessing this application on behalf of a corporation or legal entity, you represent and warrant that you possess the authority to bind such entity.
                    If you do not accept these terms, you are not authorized to use the platform.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">Article 2: License Grant & Scope of Use</h4>
                  <p>
                    Tonde Kawere and Kawerify Tech grant you a personal, non-exclusive, non-transferable, revocable, non-sublicensable license to use the software for personal education, coding assistance, and engineering analysis:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs">
                    <li><strong>Prohibited Database Scraping</strong>: You shall not script, scrape, harvest, index, or compile the raw offline knowledge files, JSON documentation, modules, or database structures for redistribution, resale, or deployment of derivative tools.</li>
                    <li><strong>Reverse Engineering</strong>: You shall not decompile or reverse engineer the offline spelling preprocessor, matching rules, or AI personality algorithms.</li>
                    <li><strong>Abuse of API</strong>: You shall not use this interface to exploit, overload, or bypass the developer API key quota limits of third-party model providers.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">Article 3: Intellectual Property & Ownership of Outputs</h4>
                  <p>
                    We support developer ownership. You retain 100% ownership, intellectual property rights, and copyright claims over all source code, algorithms, database schema designs, and technical documents you write or generate in consultation with the AI Mentors.
                    Tonde Kawere and Kawerify Tech lay no claim to your generated software and will never require royalty payments or licensing fees for code generated using this platform.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">Article 4: AI Limitations, Hallucinations, and Verification</h4>
                  <p>
                    You acknowledge and agree that:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs">
                    <li>AI mentors are powered by large language models that are subject to "hallucinations," syntax errors, and outdated API design patterns.</li>
                    <li>All code suggestions, database scripts, and deployment instructions are generated on an experimental basis.</li>
                    <li>You must run all outputs through secondary code reviewers, linters, compilers, and security scanners before introducing them into production environments.</li>
                  </ul>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">Article 5: Complete Disclaimer of Warranties</h4>
                  <div className="text-red-400 bg-red-950/20 border border-red-500/20 p-4 rounded-lg space-y-2 text-xs">
                    <p className="font-bold uppercase flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      EXHAUSTIVE DISCLAIMER OF WARRANTIES
                    </p>
                    <p>
                      THE SOFTWARE AND ALL ASSOCIATED SERVICES, TUTORIALS, DATABASES, AND AI OUTPUTS ARE PROVIDED TO YOU "AS IS" AND "AS AVAILABLE" WITH ALL FAULTS AND DEFECTS, WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, TONDE KAWERE AND KAWERIFY TECH, ON THEIR OWN BEHALF AND ON BEHALF OF THEIR LICENSORS, SPONSORS, AND ASSOCIATES, EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND WARRANTIES THAT MAY ARISE OUT OF COURSE OF DEALING, COURSE OF PERFORMANCE, USAGE, OR TRADE PRACTICE.
                    </p>
                    <p>
                      WITHOUT LIMITATION TO THE FOREGOING, WE PROVIDE NO WARRANTY OR UNDERTAKING, AND MAKE NO REPRESENTATION OF ANY KIND THAT THE SOFTWARE WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE OR WORK WITH ANY OTHER SOFTWARE, APPLICATIONS, SYSTEMS OR SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS, OR BE ERROR-FREE OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED.
                    </p>
                  </div>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">Article 6: Limitation of Liability</h4>
                  <div className="text-red-400 bg-red-950/20 border border-red-500/20 p-4 rounded-lg space-y-2 text-xs">
                    <p className="font-bold uppercase flex items-center">
                      <Scale className="w-4 h-4 mr-2" />
                      ABSOLUTE EXEMPTION OF LIABILITY
                    </p>
                    <p>
                      TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TONDE KAWERE OR KAWERIFY TECH, OR THEIR SPONSORS, AGENTS, EMPLOYEES, AND PARTNERS, BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY SPECIAL, INCIDENTAL, INDIRECT, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER. 
                    </p>
                    <p>
                      THIS INCLUDES, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF BUSINESS OPPORTUNITY, CORRUPTION OR LOSS OF DATABASES, NETWORK OUTAGES, SERVER DOWNTIME, INTELLECTUAL PROPERTY LOSS, PRODUCTION CRASHES, SYSTEM VULNERABILITIES, SECURITY EXPLOITS, CORRUPTED LEDGERS, HARDWARE ACCELERATION BURNOUT, OR DATA BREACHES RESULTING DIRECTLY OR INDIRECTLY FROM THE ACCESS, USE, OR INABILITY TO USE THE PLATFORM OR AI-GENERATED IDEAS.
                    </p>
                    <p>
                      THIS LIMITATION APPLIES REGARDLESS OF WHETHER THE DAMAGES WERE FORESEEABLE, WHETHER THE DEVELOPER WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND REGARDLESS OF THE FORM OF ACTION (CONTRACT, TORT, OR OTHERWISE).
                    </p>
                  </div>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">Article 7: Indemnification</h4>
                  <p>
                    You agree to indemnify, defend, and hold harmless Tonde Kawere, Kawerify Tech, and their affiliates from and against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind (including reasonable attorneys' fees), arising out of or relating to: (a) your breach of this agreement; (b) your misuse of the platform; (c) any security breaches introduced into your systems as a result of using code snippets generated by the mentors.
                  </p>
                </section>

                <section className="space-y-2 border-t border-[#1C2541] pt-4">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 font-semibold font-semibold">Article 8: Severability & Governing Law</h4>
                  <p>
                    If any provision of this Agreement is held to be invalid or unenforceable, such provision will be modified to accomplish its objectives as closely as possible, and the remaining provisions will continue in full force and effect.
                    This agreement is governed by the laws of the jurisdiction where Tonde Kawere resides, without giving effect to conflicts of laws principles. Any legal actions must be brought within local courts.
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

              <div className="space-y-5 text-xs sm:text-sm">
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
                  <p className="text-slate-400 text-xs font-semibold">
                    Your written notice must include all of the following elements:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-xs">
                    <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed (including URL details or copyright registration references).</li>
                    <li>Specific identification of the module name, index, and section text you wish to have removed.</li>
                    <li>Your full legal name, physical address, email address, and telephone number.</li>
                    <li>A statement that you have a "good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law."</li>
                    <li>A statement, under penalty of perjury, that the information in your notification is accurate and that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
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
