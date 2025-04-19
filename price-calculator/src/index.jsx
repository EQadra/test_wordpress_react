import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { CalculatorProvider } from './context/CalculatorContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ImageUploader } from './components/ImageUploader';
import { ImageUploaderProvider } from './context/ImageUploaderContext';
import { WordPressPosts } from './components/WordPressPosts';
import { WordPressProvider } from './context/WordPressContext';
import { Calculator } from './components/Calculator';

import './index.css';

const rootElement = document.getElementById("price-calculator-root");
if (rootElement) {
  const root = createRoot(rootElement);
  console.log('React mounted');

  root.render(
    <ThemeProvider>
      <WordPressProvider>
        <CalculatorProvider>
          <ImageUploaderProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
              <Header />

              <main className="flex-1 px-4 md:px-8 lg:px-16 py-8 space-y-16">
                {/* POSTS */}
                <section id="posts" className="max-w-5xl mx-auto">
                  <WordPressPosts />
                </section>

                {/* IMAGE UPLOADER */}
                <section id="image-uploader" className="max-w-5xl mx-auto">
                  <ImageUploader />
                </section>

                {/* CALCULATOR */}
                <section id="calculator" className="max-w-3xl mx-auto">
                  <Calculator />
                </section>
              </main>

              <Footer />
            </div>
          </ImageUploaderProvider>
        </CalculatorProvider>
      </WordPressProvider>
    </ThemeProvider>
  );
}
