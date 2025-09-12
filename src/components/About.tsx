import React from 'react';
import { Code, Database, Server, Smartphone, Award, Users } from 'lucide-react';
import type { Skill } from '../types';

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend' as const },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Python', level: 82, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'Django', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'database' },
    { name: 'MongoDB', level: 75, category: 'database' },
    { name: 'Redis', level: 70, category: 'database' },
    { name: 'Docker', level: 78, category: 'tools' },
    { name: 'AWS', level: 72, category: 'tools' },
    { name: 'Git', level: 85, category: 'tools' },
  ];

  const stats = [
    { icon: Code, value: '3+', label: 'Anos de Experiência' },
    { icon: Award, value: '50+', label: 'Projetos Concluídos' },
    { icon: Users, value: '25+', label: 'Clientes Satisfeitos' },
  ];

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia, sempre buscando soluções inovadoras 
            e experiências excepcionais para usuários.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Minha Jornada</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Comecei minha carreira como desenvolvedor há mais de 3 anos, especializado em 
              tecnologias modernas de frontend e backend. Tenho experiência em desenvolvimento 
              de aplicações web completas, desde a concepção até a implantação.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Minha paixão por código limpo, arquiteturas escaláveis e experiência do usuário 
              me motiva a entregar sempre o melhor resultado possível em cada projeto.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Habilidades</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  Frontend
                </h4>
                <div className="space-y-3">
                  {getSkillsByCategory('frontend').map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-green-600" />
                  Backend
                </h4>
                <div className="space-y-3">
                  {getSkillsByCategory('backend').map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-purple-600" />
                  Database & Tools
                </h4>
                <div className="space-y-3">
                  {[...getSkillsByCategory('database'), ...getSkillsByCategory('tools')].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;