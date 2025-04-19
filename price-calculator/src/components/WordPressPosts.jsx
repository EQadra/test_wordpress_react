import React from 'react';
import { useWordPress } from '../context/WordPressContext'; // ajusta el path si es necesario

export const WordPressPosts = () => {
  const { posts, loading } = useWordPress();

  if (loading) {
    return <p className="text-gray-600 dark:text-gray-300 mb-6">Cargando posts...</p>;
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Posts de WordPress.org</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const img = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

          return (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 transition hover:shadow-xl"
            >
              {img ? (
                <img
                  src={img}
                  alt={post.title.rendered}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg mb-3 text-sm text-gray-500 dark:text-gray-300">
                  Sin imagen
                </div>
              )}
              <h3
                className="text-lg font-semibold text-gray-800 dark:text-white leading-snug"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
