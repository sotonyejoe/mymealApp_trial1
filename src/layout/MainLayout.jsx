import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 shadow-md py-4 px-6">
        <h1 className="text-2xl font-bold text-white">Meal Search</h1>
      </nav>  
      <Header />

      <main className="flex-grow px-6">{children}</main>

      <Footer />
    </div>
  );
}
