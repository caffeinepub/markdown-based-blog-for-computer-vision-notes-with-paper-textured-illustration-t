import { useEffect, useRef } from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Parse markdown manually for security and control
    const html = parseMarkdown(content);
    containerRef.current.innerHTML = html;
  }, [content]);

  return <div ref={containerRef} className="markdown-content" />;
}

function parseMarkdown(markdown: string): string {
  let html = markdown;

  // Escape HTML to prevent XSS
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  // Code blocks (must be before inline code)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const language = lang || 'plaintext';
    return `<pre><code class="language-${language}">${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Unordered lists
  html = html.replace(/^\* (.+)$/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>');

  // Blockquotes
  html = html.replace(/^> (.+)$/gim, '<blockquote>$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr />');

  // Paragraphs (split by double newlines)
  const blocks = html.split(/\n\n+/);
  html = blocks
    .map((block) => {
      block = block.trim();
      if (!block) return '';
      // Don't wrap if already wrapped in a block element
      if (
        block.startsWith('<h') ||
        block.startsWith('<ul') ||
        block.startsWith('<ol') ||
        block.startsWith('<pre') ||
        block.startsWith('<blockquote') ||
        block.startsWith('<hr')
      ) {
        return block;
      }
      return `<p>${block}</p>`;
    })
    .join('\n');

  return html;
}
