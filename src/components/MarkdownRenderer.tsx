import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  isOwn?: boolean;
}

export default function MarkdownRenderer({ content, isOwn = false }: MarkdownRendererProps) {
  if (!content) return null;

  // Split content by code blocks: ```[lang]\n[code]\n```
  const parts = content.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2 text-sm sm:text-base leading-relaxed break-words whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (part.startsWith('```') && part.endsWith('```')) {
          // It's a code block
          const match = part.match(/^```(\w*)\n([\s\S]*?)```$/);
          const lang = match ? match[1] : '';
          const code = match ? match[2] : part.slice(3, -3);

          return <CodeBlock key={index} code={code.trim()} language={lang} />;
        } else {
          // It's inline text with potential headers, lists, inline code, bold, italics
          return <RichText key={index} text={part} isOwn={isOwn} />;
        }
      })}
    </div>
  );
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative my-3 rounded-lg overflow-hidden border border-gray-700 bg-gray-950 text-gray-100 shadow-md font-mono text-xs sm:text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800 text-gray-400 select-none">
        <span className="uppercase tracking-wider text-[10px] font-semibold">
          {language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 hover:text-white transition-colors duration-150 py-1 px-2 rounded hover:bg-gray-800"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-[10px] text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[10px]">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto whitespace-pre leading-normal">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function RichText({ text, isOwn }: { text: string; isOwn: boolean }) {
  // Split the text into lines to process headers, bullet points, etc.
  const lines = text.split('\n');
  const renderedLines: React.ReactNode[] = [];
  
  let inList = false;
  let listItems: string[] = [];

  const flushList = (key: number) => {
    if (listItems.length > 0) {
      renderedLines.push(
        <ul key={`list-${key}`} className="list-disc pl-5 my-2 space-y-1">
          {listItems.map((item, idx) => (
            <li key={idx} className={isOwn ? 'text-white/90' : 'text-gray-800 dark:text-gray-200'}>
              {parseInlineStyles(item, isOwn)}
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for headers
    if (line.startsWith('### ')) {
      flushList(i);
      renderedLines.push(
        <h4 key={i} className={`text-base font-bold mt-4 mb-2 ${isOwn ? 'text-white' : 'text-blue-900'}`}>
          {parseInlineStyles(line.slice(4), isOwn)}
        </h4>
      );
    } else if (line.startsWith('## ')) {
      flushList(i);
      renderedLines.push(
        <h3 key={i} className={`text-lg font-bold mt-5 mb-2 border-b pb-1 ${isOwn ? 'text-white border-white/10' : 'text-blue-900 border-blue-100'}`}>
          {parseInlineStyles(line.slice(3), isOwn)}
        </h3>
      );
    } else if (line.startsWith('# ')) {
      flushList(i);
      renderedLines.push(
        <h2 key={i} className={`text-xl font-bold mt-6 mb-3 ${isOwn ? 'text-white' : 'text-blue-900'}`}>
          {parseInlineStyles(line.slice(2), isOwn)}
        </h2>
      );
    } 
    // Check for bullet lists
    else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      inList = true;
      // Remove the marker
      const cleaned = line.trim().replace(/^[-*]\s+/, '');
      listItems.push(cleaned);
    } 
    // Check for numbered lists
    else if (/^\d+\.\s+/.test(line.trim())) {
      flushList(i);
      const cleaned = line.trim().replace(/^\d+\.\s+/, '');
      renderedLines.push(
        <div key={i} className="flex items-start space-x-2 my-1">
          <span className={`font-bold flex-shrink-0 ${isOwn ? 'text-white' : 'text-blue-800'}`}>{line.match(/^\d+/)?.[0]}.</span>
          <p className={`flex-1 ${isOwn ? 'text-white/95' : 'text-gray-800'}`}>{parseInlineStyles(cleaned, isOwn)}</p>
        </div>
      );
    }
    // Check for blockquotes
    else if (line.startsWith('> ')) {
      flushList(i);
      renderedLines.push(
        <blockquote key={i} className={`border-l-4 pl-4 py-1 my-2 rounded-r italic ${isOwn ? 'border-white/40 bg-white/10 text-white/90' : 'border-blue-500 bg-blue-50/50 text-gray-700'}`}>
          {parseInlineStyles(line.slice(2), isOwn)}
        </blockquote>
      );
    }
    // Empty line
    else if (line.trim() === '') {
      flushList(i);
      // Only push a spacer if the last element wasn't a spacer
      if (renderedLines.length > 0 && lines[i-1]?.trim() !== '') {
        renderedLines.push(<div key={`spacer-${i}`} className="h-2" />);
      }
    } 
    // Regular paragraph line
    else {
      if (inList) {
        // Continue list items if they are indented
        if (line.startsWith('  ')) {
          listItems[listItems.length - 1] += ' ' + line.trim();
        } else {
          flushList(i);
          renderedLines.push(
            <p key={i} className={`leading-relaxed my-1 ${isOwn ? 'text-white/95' : 'text-gray-800'}`}>
              {parseInlineStyles(line, isOwn)}
            </p>
          );
        }
      } else {
        renderedLines.push(
          <p key={i} className={`leading-relaxed my-1 ${isOwn ? 'text-white/95' : 'text-gray-800'}`}>
            {parseInlineStyles(line, isOwn)}
          </p>
        );
      }
    }
  }

  // Flush any remaining list items at the end
  flushList(lines.length);

  return <>{renderedLines}</>;
}

/**
 * Parses inline formatting like **bold**, *italic*, and `code`
 */
function parseInlineStyles(text: string, isOwn: boolean): React.ReactNode[] {
  // Regex to match **bold**, *italic*, `code`, and plain text
  const tokenRegex = /(\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
  const tokens = text.split(tokenRegex);

  return tokens.map((token, index) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return <strong key={index} className={`font-bold ${isOwn ? 'text-white font-extrabold' : 'text-gray-950 dark:text-white'}`}>{token.slice(2, -2)}</strong>;
    } else if (token.startsWith('*') && token.endsWith('*')) {
      return <em key={index} className={`italic ${isOwn ? 'text-white/90' : 'text-gray-800 dark:text-gray-200'}`}>{token.slice(1, -1)}</em>;
    } else if (token.startsWith('`') && token.endsWith('`')) {
      return (
        <code key={index} className={`px-1.5 py-0.5 mx-0.5 rounded font-mono text-xs sm:text-sm font-medium ${
          isOwn 
            ? 'bg-blue-700/50 border border-blue-500/30 text-blue-100' 
            : 'bg-blue-100/60 border border-blue-200/50 text-blue-900'
        }`}>
          {token.slice(1, -1)}
        </code>
      );
    } else {
      return token;
    }
  });
}
