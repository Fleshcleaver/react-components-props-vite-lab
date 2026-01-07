import React from 'react';
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside style={{
      padding: '20px 40px',
      backgroundColor: '#f9f9f9',
      marginBottom: '30px'
    }}>
      <img 
        src={image} 
        alt="blog logo"
        style={{
          width: '215px',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <p style={{ 
        lineHeight: '1.6',
        color: '#555'
      }}>
        {about}
      </p>
    </aside>
  );
}
export default About;