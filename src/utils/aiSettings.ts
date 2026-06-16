export interface AISettings {
  aiMode: 'fallback' | 'gemini' | 'ollama' | 'chrome';
  geminiApiKey: string;
  ollamaUrl: string;
  ollamaModel: string;
  customSystemPrompt?: string;
}

const DEFAULT_SETTINGS: AISettings = {
  aiMode: 'fallback',
  geminiApiKey: '',
  ollamaUrl: 'http://localhost:11434',
  ollamaModel: 'llama3',
  customSystemPrompt: ''
};

const SETTINGS_KEY = 'tondev_ai_settings_config';

export const loadAISettings = (): AISettings => {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    if (!data) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(data);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (error) {
    console.error('Failed to load AI settings:', error);
    return DEFAULT_SETTINGS;
  }
};

export const saveAISettings = (settings: AISettings): void => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Failed to save AI settings:', error);
  }
};

export const testGeminiConnection = async (apiKey: string): Promise<boolean> => {
  if (!apiKey.trim()) {
    throw new Error('API Key cannot be empty.');
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Respond with the word "OK".' }] }]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const message = errorData.error?.message || `HTTP error! status: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) return true;
    throw new Error('Unexpected API response structure.');
  } catch (error: any) {
    console.error('Gemini connection test failed:', error);
    throw new Error(error.message || 'Network error occurred when connecting to Gemini.');
  }
};

export const testOllamaConnection = async (url: string): Promise<string[]> => {
  if (!url.trim()) {
    throw new Error('Ollama URL cannot be empty.');
  }

  // Ensure url doesn't have trailing slash
  const formattedUrl = url.replace(/\/$/, '');

  try {
    // Try to fetch tags to verify connection and get list of models
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 sec timeout

    const response = await fetch(`${formattedUrl}/api/tags`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Ollama returned status ${response.status}`);
    }

    const data = await response.json();
    if (data.models && Array.isArray(data.models)) {
      return data.models.map((m: any) => m.name);
    }
    return [];
  } catch (error: any) {
    console.error('Ollama connection test failed:', error);
    if (error.name === 'AbortError') {
      throw new Error('Connection timed out. Ensure Ollama is running.');
    }
    
    // Likely CORS issue or Ollama not running
    throw new Error(
      `Failed to connect to local Ollama at ${url}.\n\n` +
      `Troubleshooting steps:\n` +
      `1. Make sure Ollama is installed and running.\n` +
      `2. Enable CORS by setting OLLAMA_ORIGINS="*" before running. On Windows, run in Command Prompt:\n` +
      `   set OLLAMA_ORIGINS=*\n` +
      `   ollama serve`
    );
  }
};

export const checkChromeAIStatus = (): { supported: boolean; status: string; detail?: string } => {
  const ai = (window as any).ai;
  if (!ai) {
    return {
      supported: false,
      status: 'Not supported',
      detail: 'Chrome Built-in AI (window.ai) is not available. Ensure you are using Chrome Dev/Canary (version 127+) and have Gemini Nano enabled in chrome://flags.'
    };
  }

  // Check if we can create a session
  if (ai.assistant) {
    return {
      supported: true,
      status: 'Ready',
      detail: 'Chrome Gemini Nano (window.ai.assistant) is available!'
    };
  }

  if (ai.createTextSession) {
    return {
      supported: true,
      status: 'Ready (Legacy API)',
      detail: 'Chrome Built-in AI (window.ai.createTextSession) is available!'
    };
  }

  return {
    supported: false,
    status: 'Unsupported API version',
    detail: 'window.ai is present, but neither assistant nor createTextSession is exposed.'
  };
};
