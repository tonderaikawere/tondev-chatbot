import { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from './ui/dialog';
import { 
  loadAISettings, 
  saveAISettings, 
  testGeminiConnection, 
  testOllamaConnection, 
  checkChromeAIStatus,
  AISettings 
} from '../utils/aiSettings';
import { Settings, CheckCircle, AlertCircle, RefreshCw, Key, HardDrive, Cpu, Terminal, ExternalLink } from 'lucide-react';

interface SettingsDialogProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSettingsSaved?: () => void;
}

export default function SettingsDialog({ 
  trigger, 
  open: controlledOpen, 
  onOpenChange: controlledOnOpenChange,
  onSettingsSaved
}: SettingsDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const setIsOpen = isControlled ? controlledOnOpenChange : setInternalOpen;

  const [settings, setSettings] = useState<AISettings>(loadAISettings());
  const [testingConnection, setTestingConnection] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [ollamaModels, setOllamaModels] = useState<string[]>([]);
  const [chromeStatus, setChromeStatus] = useState<{ supported: boolean; status: string; detail?: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      const activeSettings = loadAISettings();
      setSettings(activeSettings);
      setTestResult(null);
      
      // Pre-check Chrome status and load Ollama models if active
      setChromeStatus(checkChromeAIStatus());
      if (activeSettings.aiMode === 'ollama') {
        fetchOllamaModels(activeSettings.ollamaUrl);
      }
    }
  }, [isOpen]);

  const handleSave = (newSettings: AISettings) => {
    saveAISettings(newSettings);
    setSettings(newSettings);
    if (onSettingsSaved) onSettingsSaved();
  };

  const handleModeSelect = (mode: AISettings['aiMode']) => {
    const updated = { ...settings, aiMode: mode };
    setSettings(updated);
    handleSave(updated);
    setTestResult(null);
    
    if (mode === 'ollama') {
      fetchOllamaModels(updated.ollamaUrl);
    }
  };

  const fetchOllamaModels = async (url: string) => {
    try {
      const models = await testOllamaConnection(url);
      setOllamaModels(models);
      if (models.length > 0 && !models.includes(settings.ollamaModel)) {
        const updated = { ...settings, ollamaModel: models[0] };
        setSettings(updated);
        handleSave(updated);
      }
    } catch (err) {
      console.warn('Could not auto-fetch Ollama models:', err);
    }
  };

  const handleTestConnection = async () => {
    setTestingConnection(true);
    setTestResult(null);
    try {
      if (settings.aiMode === 'gemini') {
        await testGeminiConnection(settings.geminiApiKey);
        setTestResult({
          success: true,
          message: 'Successfully verified Gemini API Key! You are connected to the online Gemini model (Free Tier).'
        });
      } else if (settings.aiMode === 'ollama') {
        const models = await testOllamaConnection(settings.ollamaUrl);
        setOllamaModels(models);
        setTestResult({
          success: true,
          message: `Successfully connected to local Ollama server! Found ${models.length} model(s): ${models.join(', ')}.`
        });
      } else if (settings.aiMode === 'chrome') {
        const status = checkChromeAIStatus();
        setChromeStatus(status);
        if (status.supported) {
          setTestResult({
            success: true,
            message: `Chrome Built-in AI is ready to use offline! (${status.status})`
          });
        } else {
          throw new Error(status.detail);
        }
      } else {
        setTestResult({
          success: true,
          message: 'Smart Local Fallback is always active and works 100% offline with zero configuration.'
        });
      }
    } catch (error: any) {
      setTestResult({
        success: false,
        message: error.message || 'Connection test failed.'
      });
    } finally {
      setTestingConnection(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      
      <DialogContent className="max-w-xl bg-white border border-blue-100 rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="flex items-center space-x-2 text-2xl font-bold text-blue-900">
            <Settings className="w-6 h-6 text-blue-600 animate-spin-slow" />
            <span>AI Brain Settings</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-blue-700">
            Configure how your mentors think. Switch between online LLMs and local offline models.
          </DialogDescription>
        </DialogHeader>

        {/* AI Mode Selector Grid */}
        <div className="space-y-4">
          <label className="text-sm font-semibold text-blue-900 block">Select AI Connection Mode</label>
          <div className="grid grid-cols-2 gap-3">
            {/* Gemini Option */}
            <button
              onClick={() => handleModeSelect('gemini')}
              className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 ${
                settings.aiMode === 'gemini'
                  ? 'bg-blue-50/70 border-blue-500 shadow-md ring-2 ring-blue-100'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50/20'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <Key className={`w-4 h-4 ${settings.aiMode === 'gemini' ? 'text-blue-600' : 'text-gray-500'}`} />
                <span className="font-bold text-sm text-blue-900">Gemini API</span>
              </div>
              <p className="text-xs text-gray-500 leading-tight">
                Online. Super smart like ChatGPT, uses Gemini 1.5 Flash. Free developer tier.
              </p>
            </button>

            {/* Ollama Option */}
            <button
              onClick={() => handleModeSelect('ollama')}
              className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 ${
                settings.aiMode === 'ollama'
                  ? 'bg-purple-50/70 border-purple-500 shadow-md ring-2 ring-purple-100'
                  : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50/20'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <Terminal className={`w-4 h-4 ${settings.aiMode === 'ollama' ? 'text-purple-600' : 'text-gray-500'}`} />
                <span className="font-bold text-sm text-purple-900">Local Ollama</span>
              </div>
              <p className="text-xs text-gray-500 leading-tight">
                Offline. Run models like Llama 3 or Phi 3 locally on your computer. 100% free and private.
              </p>
            </button>

            {/* Chrome AI Option */}
            <button
              onClick={() => handleModeSelect('chrome')}
              className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 ${
                settings.aiMode === 'chrome'
                  ? 'bg-indigo-50/70 border-indigo-500 shadow-md ring-2 ring-indigo-100'
                  : 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/20'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <Cpu className={`w-4 h-4 ${settings.aiMode === 'chrome' ? 'text-indigo-600' : 'text-gray-500'}`} />
                <span className="font-bold text-sm text-indigo-900">Chrome built-in</span>
              </div>
              <p className="text-xs text-gray-500 leading-tight">
                Offline. Uses Gemini Nano built right into Chrome. Experimental, zero install required.
              </p>
            </button>

            {/* Fallback Option */}
            <button
              onClick={() => handleModeSelect('fallback')}
              className={`flex flex-col text-left p-4 rounded-xl border transition-all duration-200 ${
                settings.aiMode === 'fallback'
                  ? 'bg-emerald-50/70 border-emerald-500 shadow-md ring-2 ring-emerald-100'
                  : 'bg-white border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/20'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <HardDrive className={`w-4 h-4 ${settings.aiMode === 'fallback' ? 'text-emerald-600' : 'text-gray-500'}`} />
                <span className="font-bold text-sm text-emerald-900">Smart Fallback</span>
              </div>
              <p className="text-xs text-gray-500 leading-tight">
                Offline. Fast text search of the mentor's local files. Zero dependencies, lightweight.
              </p>
            </button>
          </div>
        </div>

        {/* Dynamic Settings Fields based on selected Mode */}
        <div className="mt-5 p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
          
          {settings.aiMode === 'gemini' && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">Google Gemini API Key</label>
                <a 
                  href="https://aistudio.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center space-x-0.5"
                >
                  <span>Get Free Key</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={settings.geminiApiKey}
                onChange={(e) => {
                  const updated = { ...settings, geminiApiKey: e.target.value };
                  setSettings(updated);
                  handleSave(updated);
                }}
                className="w-full bg-white rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 font-mono"
              />
              <p className="text-xs text-gray-500">
                🔒 Your API key is stored safely on your device (localStorage) and sent directly to Google's endpoints.
              </p>
            </div>
          )}

          {settings.aiMode === 'ollama' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">Ollama API URL</label>
                <a 
                  href="https://ollama.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-purple-600 hover:underline flex items-center space-x-0.5"
                >
                  <span>Download Ollama</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <input
                type="text"
                placeholder="http://localhost:11434"
                value={settings.ollamaUrl}
                onChange={(e) => {
                  const updated = { ...settings, ollamaUrl: e.target.value };
                  setSettings(updated);
                  handleSave(updated);
                }}
                className="w-full bg-white rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 font-mono"
              />
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block">Select Local Model</label>
                <select
                  value={settings.ollamaModel}
                  onChange={(e) => {
                    const updated = { ...settings, ollamaModel: e.target.value };
                    setSettings(updated);
                    handleSave(updated);
                  }}
                  className="w-full bg-white rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                  disabled={ollamaModels.length === 0}
                >
                  {ollamaModels.length === 0 ? (
                    <option value="">No models loaded (Test connection first)</option>
                  ) : (
                    ollamaModels.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))
                  )}
                </select>
                {ollamaModels.length > 0 && (
                  <p className="text-xs text-purple-600">
                    💡 Found {ollamaModels.length} models locally.
                  </p>
                )}
              </div>
            </div>
          )}

          {settings.aiMode === 'chrome' && (
            <div className="space-y-2">
              <span className="text-sm font-semibold text-gray-700 block">Chrome built-in status</span>
              {chromeStatus && (
                <div className={`p-3 rounded-lg text-xs leading-normal ${chromeStatus.supported ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-yellow-50 text-yellow-800 border border-yellow-200'}`}>
                  <p className="font-semibold mb-1">Status: {chromeStatus.status}</p>
                  <p>{chromeStatus.detail}</p>
                  {!chromeStatus.supported && (
                    <div className="mt-2 text-[10px] text-gray-600 space-y-1">
                      <p className="font-semibold">How to enable in Chrome:</p>
                      <p>1. Open <code className="bg-white/60 px-1 py-0.5 rounded">chrome://flags/#optimization-guide-on-device-model</code> & set to <b>Enabled BypassPerfRequirement</b>.</p>
                      <p>2. Open <code className="bg-white/60 px-1 py-0.5 rounded">chrome://flags/#prompt-api-for-gemini-nano</code> & set to <b>Enabled</b>.</p>
                      <p>3. Relaunch Chrome and wait a few minutes for Chrome to download Gemini Nano.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {settings.aiMode === 'fallback' && (
            <div className="space-y-1.5">
              <span className="text-sm font-semibold text-emerald-800 block">Local static JSON database</span>
              <p className="text-xs text-gray-600 leading-normal">
                Answers will be matched directly against our offline JSON databases of frontend, backend, cybersecurity, Python, mobile, and cloud knowledge.
              </p>
              <p className="text-xs text-emerald-600 font-semibold">
                ✓ Works offline anywhere. No setup, no key, no downloads.
              </p>
            </div>
          )}

          {/* Connection Tester */}
          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={handleTestConnection}
              disabled={testingConnection}
              className="flex items-center justify-center space-x-2 bg-[#2563EB] hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg py-2 px-4 text-sm font-medium transition-all shadow-sm active:scale-98"
            >
              {testingConnection ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying connection...</span>
                </>
              ) : (
                <span>Test Configuration</span>
              )}
            </button>

            {testResult && (
              <div className={`p-3 rounded-lg border flex items-start space-x-2 text-xs leading-normal mt-2 ${
                testResult.success 
                  ? 'bg-green-50 text-green-800 border-green-200' 
                  : 'bg-red-50 text-red-800 border-red-200'
              }`}>
                {testResult.success ? (
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1 whitespace-pre-wrap font-sans">
                  {testResult.message}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dialog Action Buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
