import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Tech Accessories</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Example Product Cards */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;