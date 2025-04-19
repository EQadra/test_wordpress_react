import React, { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto
const WordPressContext = createContext();

// Proveedor del contexto
export const WordPressProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch de los posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://wordpress.org/news/wp-json/wp/v2/posts?_embed");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching WordPress posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <WordPressContext.Provider value={{ posts, loading }}>
      {children}
    </WordPressContext.Provider>
  );
};

// Hook para usar el contexto más fácilmente
export const useWordPress = () => useContext(WordPressContext);
