"use client";

import { useState } from "react";

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-300 hover:border-blue-300"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex md:flex-wrap md:gap-6">
          <a href="/" className="hover:text-blue-300">Home</a>
          <a href="/architecture" className="hover:text-blue-300">Solana Architecture</a>
          <a href="/requirements" className="hover:text-blue-300">Launchpad Requirements</a>
          <a href="/wallet" className="hover:text-blue-300">Wallet Architecture</a>
          <a href="/contracts" className="hover:text-blue-300">Smart Contracts</a>
          <a href="/implementation" className="hover:text-blue-300">Implementation Plan</a>
          <a href="/timeline" className="hover:text-blue-300">Timeline & Resources</a>
        </div>
        
        {/* Mobile navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:hidden mt-2`}>
          <div className="flex flex-col gap-2">
            <a href="/" className="hover:text-blue-300 py-1">Home</a>
            <a href="/architecture" className="hover:text-blue-300 py-1">Solana Architecture</a>
            <a href="/requirements" className="hover:text-blue-300 py-1">Launchpad Requirements</a>
            <a href="/wallet" className="hover:text-blue-300 py-1">Wallet Architecture</a>
            <a href="/contracts" className="hover:text-blue-300 py-1">Smart Contracts</a>
            <a href="/implementation" className="hover:text-blue-300 py-1">Implementation Plan</a>
            <a href="/timeline" className="hover:text-blue-300 py-1">Timeline & Resources</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
