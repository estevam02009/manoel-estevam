import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import type { Experience } from '../types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Fullstack Developer',
      period: '2022 - Presente',
      description: 'Liderança técnica em projetos de grande escala, desenvolvimento de arquiteturas escaláveis e mentoria de desenvolvedores juniores. Responsável por implementar soluções inovadoras que aumentaram a eficiência em 40%.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      id: 2,
      company: 'Digital Innovators',
      position: 'Desenvolvedor Fullstack',
      period: '2021 - 2022',
      description: 'Desenvolvimento de aplicações web completas para diversos clientes, implementação de APIs RESTful e integração com serviços terceiros. Participação ativa em decisões de arquitetura e melhoria contínua de processos.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis', 'Git']
    },
    {
      id: 3,
      company: 'StartupTech',
      position: 'Desenvolvedor Frontend',
      period: '2020 - 2021',
      description: 'Criação de interfaces modernas e responsivas, otimização de performance e implementação de designs complexos. Colaboração estreita com equipe de UX/UI para entregar experiências excepcionais aos usuários.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Jest', 'Figma']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Minha jornada profissional construindo soluções inovadoras 
            e liderando projetos de impacto.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:text-left text-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ml-16 md:ml-0`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100">
                    <div className="flex items-center mb-4 justify-center md:justify-start">
                      <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {experience.position}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">
                      {experience.company}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;