import React, { useState } from 'react';

function ReadMore({ text, maxLength }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <p>
        {showFullText ? text : `${text.slice(0, maxLength)}...`}
        {!showFullText && (
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={toggleShowFullText}>
            Read More
          </span>
        )}
      </p>
      {showFullText && (
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={toggleShowFullText}>
          Read Less
        </span>
      )}
    </div>
  );
}

export default ReadMore;
