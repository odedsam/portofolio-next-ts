import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type CodeBlockProps = {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  wrapLines?: boolean;
  customStyle?: React.CSSProperties;
  className?: string;
};

export default function CodeBlock({
  code,
  language = 'typescript',
  showLineNumbers = false,
  wrapLines = true,
  customStyle,
  className,
}: CodeBlockProps) {
  return (
    <div className={`rounded-lg overflow-x-auto mb-6 ${className ?? ''}`}>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers={showLineNumbers}
        wrapLines={wrapLines}
        customStyle={{ margin: 0, padding: '1rem', ...customStyle }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
