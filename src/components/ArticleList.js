import React from 'react';
function ArticleList({ posts }) {
  return (
    <main style={{ 
      padding: '0 40px',
      maxWidth: '800px'
    }}>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}
export default App;