import React from 'react';
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getReadingTimeEmoji = () => {
    if (!minutes) return null;
    
    if (minutes < 30) {
      const coffeeCount = Math.ceil(minutes / 5);
      const coffeeEmojis = '☕️'.repeat(coffeeCount);
      return `${coffeeEmojis} ${minutes} min read`;
    } else {
      const bentoCount = Math.ceil(minutes / 10);
      const bentoEmojis = '🍱'.repeat(bentoCount);
      return `${bentoEmojis} ${minutes} min read`;
    }
  };

  return (
    <article style={{
      marginBottom: '40px',
      paddingBottom: '30px',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <h3 style={{ 
        margin: '0 0 10px 0',
        fontSize: '1.8rem',
        color: '#222'
      }}>
        {title}
      </h3>
      <small style={{ 
        color: '#999',
        fontSize: '0.9rem'
      }}>
        {date} {minutes && `• ${getReadingTimeEmoji()}`}
      </small>
      <p style={{ 
        marginTop: '15px',
        lineHeight: '1.6',
        color: '#444'
      }}>
        {preview}
      </p>
    </article>
  );
}
export default App;