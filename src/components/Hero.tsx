import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
            alt="Developer"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg ring-4 ring-white"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Manoel Estevam
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Desenvolvedor Fullstack
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Especializado em React, Node.js, Python e tecnologias modernas. 
          Criando soluções digitais inovadoras que transformam ideias em realidade.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Projetos
          </button>
          
          <button className="flex items-center space-x-2 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            <Download size={20} />
            <span>Download CV</span>
          </button>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;