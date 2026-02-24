import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ setCurrentPage, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Product', id: 'product' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-content flex items-center justify-between">
        <div 
          className={`text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-2 ${isScrolled ? 'text-brand-blue' : 'text-white'}`}
          onClick={() => setCurrentPage('home')}
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center rotate-12 shadow-lg">
            <span className="text-brand-blue -rotate-12">Q</span>
          </div>
          QVANTO AI
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-brand-dark hover:text-brand-blue' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${isScrolled ? 'bg-brand-blue text-white hover:bg-brand-dark' : 'bg-white text-brand-blue hover:bg-brand-dark hover:text-white'}`}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-2 font-bold text-brand-dark hover:text-brand-blue"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => {
              setCurrentPage('contact');
              setIsMobileMenuOpen(false);
            }}
            className="bg-brand-blue text-white py-3 rounded-full font-bold"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
