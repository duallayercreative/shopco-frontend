import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <Home />
          </Layout>
        } 
      />
      <Route 
        path="*" 
        element={
          <Layout>
            <NotFound />
          </Layout>
        } 
      />
    </Routes>
  );
}
