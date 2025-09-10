import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              M.ESTEVAM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contato
            </button>
            
            <div className="flex items-center space-x-4 ml-6">
              <a href="https://github.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@dev.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Experiência
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contato
              </button>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a href="https://github.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contato@dev.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;