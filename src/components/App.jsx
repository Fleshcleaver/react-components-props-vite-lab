import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

// App Component
function App() {
  const blogName = "My Awesome Blog";
  const blogImage = "https://via.placeholder.com/215";
  const aboutText = "Welcome to my blog! I write about technology, programming, and my journey as a developer. Join me as I share insights, tutorials, and thoughts on building amazing things with code.";
  
  const posts = [
    {
      id: 1,
      title: "Understanding React Components",
      date: "December 15, 2025",
      preview: "Components are the building blocks of React applications. In this article, we'll explore how to create reusable components and manage data flow through props.",
      minutes: 8
    },
    {
      id: 2,
      title: "The Power of JSX",
      date: "December 10, 2025",
      preview: "JSX allows us to write HTML-like syntax directly in our JavaScript code. Learn how this syntactic sugar makes React development intuitive and powerful.",
      minutes: 5
    },
    {
      id: 3,
      title: "Props vs State: What's the Difference?",
      date: "December 5, 2025",
      preview: "Understanding the distinction between props and state is crucial for React developers. This article breaks down when to use each and why it matters.",
      minutes: 12
    },
    {
      id: 4,
      title: "Building a Complete React Application",
      date: "November 28, 2025",
      preview: "From setup to deployment, this comprehensive guide walks you through creating a full-featured React application with best practices and real-world examples.",
      minutes: 45
    },
    {
      id: 5,
      title: "React Hooks Deep Dive",
      date: "November 17, 2025",
      preview: "Hooks revolutionized how we write React components. Explore useState, useEffect, and custom hooks in this detailed tutorial.",
      minutes: 3
    }
  ];

return (
  <div className="App" style={{ 
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#fff',
    minHeight: '100vh'
  }}>
    <Header name={blogName} />
    <About image={blogImage} about={aboutText} />
    <ArticleList posts={posts} />
  </div>
);
}

export default App;