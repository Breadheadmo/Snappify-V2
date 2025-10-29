import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tech Accessories</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-accent">Home</a></li>
            <li><a href="/products" className="hover:text-accent">Products</a></li>
            <li><a href="/about" className="hover:text-accent">About</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;