import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com painel administrativo, pagamentos e gestão de estoque.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'API RESTful',
      description: 'API robusta para gerenciamento de usuários com autenticação JWT e documentação Swagger.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Express', 'MongoDB', 'JWT', 'Swagger'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'backend'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados com gráficos em tempo real e relatórios.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Mobile Finance App',
      description: 'Aplicativo mobile para controle financeiro pessoal com sincronização em nuvem.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'mobile'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Plataforma de blog moderna com editor rico, comentários e sistema de tags.',
      image: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      category: 'fullstack'
    }
  ];

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes 
            tecnologias e soluções criativas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                    <a
                      href={project.githubUrl}
                      className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;