import React, { useMemo, useState } from 'react';

interface ReadMoreProps {
  text: string;
  maxChars: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxChars }) => {
  const [ isExpanded, setIsExpanded ] = useState(false);

  const needsTruncation = text.length > maxChars;

  const handleToggleExpansion = (): void => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = useMemo(() => {
    if(!needsTruncation) { return text; }
    return text.substring(0, maxChars).trim() + '...';
  }, [ text, maxChars, needsTruncation ]);

  const paragraphs = useMemo(() => {
    return text.split('\n\n').filter(p => p.trim() !== '');
  }, [ text ]);

  const content = (
    isExpanded || !needsTruncation
      ? (
        <div>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-3" style={{ fontStyle: 'italic' }}>{paragraph.trim()}</p>
          ))}
        </div>
      )
      : (
        <p style={{ fontStyle: 'italic' }}>{truncatedText}</p>
      )
  );

  return (
    <div>
      {content}
      {needsTruncation && (
        <div className="text-center">
          <button onClick={handleToggleExpansion} className="ml-2" style={{ color: '#324F54', cursor: 'pointer', border: 'none', background: 'none', padding: 0, fontWeight: '550', fontSize: '1.2em', textDecoration: 'underline' }}>
            {isExpanded ? 'Show Less' : 'Read More' }
          </button>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
