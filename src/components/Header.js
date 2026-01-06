import React from 'react';

// Header Component
function Header({ name }) {
  return (
    <header style={{ 
      borderBottom: '2px solid #e0e0e0', 
      padding: '20px 40px',
      marginBottom: '20px'
    }}>
      <h1 style={{ 
        margin: 0, 
        fontSize: '2.5rem',
        color: '#333'
      }}>
        {name}
      </h1>
    </header>
  );
}
export default App;