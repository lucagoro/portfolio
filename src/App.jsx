import React, { useState } from 'react';
import { Mail, Phone, Code, Server, Database, Briefcase, GraduationCap, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Sistema de Microservicios",
      description: "Arquitectura de microservicios desarrollada en equipo de 5 personas, implementando servicios independientes con comunicación REST.",
      tech: ["Java", "Spring Boot", "MongoDB", "MySQL", "Docker", "JWT"],
      link: "#"
    },
    {
      title: "Gestión de Alumnos",
      description: "Aplicación full-stack para la administración y gestión de estudiantes con interfaz intuitiva y backend robusto.",
      tech: ["React", "CSS", "Java", "Spring Boot", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Portal de Juegos",
      description: "Página web interactiva de juegos desarrollada con tecnologías web fundamentales.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#"
    }
  ];

  const skills = {
    "Lenguajes": ["Java", "JavaScript", "TypeScript", "PHP"],
    "Frontend": ["React", "Angular", "HTML", "CSS", "Tailwind", "Bootstrap"],
    "Backend": ["Spring Boot", "Node.js", "Express", "APIs REST", "JWT"],
    "Bases de Datos": ["MySQL", "PostgreSQL", "MongoDB"],
    "Arquitectura": ["POO", "MVC", "Microservicios", "Cliente-Servidor", "Diseño modular"],
    "Herramientas": ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render"]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px)',
          backgroundSize: '100% 4px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md shadow-lg z-50 border-b-2 border-blue-500">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-5">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg border-2 border-blue-400 shadow-lg shadow-blue-500/50">
              LG
            </div>
            
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('sobre-mi')} className="px-4 py-2 text-sm font-semibold hover:text-blue-400 transition-all relative group">
                <span className="relative z-10">Sobre mí</span>
                <div className="absolute inset-0 bg-blue-500/10 rounded transform scale-0 group-hover:scale-100 transition-transform"></div>
              </button>
              <button onClick={() => scrollToSection('experiencia')} className="px-4 py-2 text-sm font-semibold hover:text-blue-400 transition-all relative group">
                <span className="relative z-10">Experiencia</span>
                <div className="absolute inset-0 bg-blue-500/10 rounded transform scale-0 group-hover:scale-100 transition-transform"></div>
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="px-4 py-2 text-sm font-semibold hover:text-blue-400 transition-all relative group">
                <span className="relative z-10">Proyectos</span>
                <div className="absolute inset-0 bg-blue-500/10 rounded transform scale-0 group-hover:scale-100 transition-transform"></div>
              </button>
              <button onClick={() => scrollToSection('habilidades')} className="px-4 py-2 text-sm font-semibold hover:text-blue-400 transition-all relative group">
                <span className="relative z-10">Habilidades</span>
                <div className="absolute inset-0 bg-blue-500/10 rounded transform scale-0 group-hover:scale-100 transition-transform"></div>
              </button>
              <button onClick={() => scrollToSection('contacto')} className="px-4 py-2 text-sm font-semibold hover:text-blue-400 transition-all relative group">
                <span className="relative z-10">Contacto</span>
                <div className="absolute inset-0 bg-blue-500/10 rounded transform scale-0 group-hover:scale-100 transition-transform"></div>
              </button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('sobre-mi')} className="block w-full text-left py-2 px-4 hover:bg-blue-500/20 rounded">Sobre mí</button>
              <button onClick={() => scrollToSection('experiencia')} className="block w-full text-left py-2 px-4 hover:bg-blue-500/20 rounded">Experiencia</button>
              <button onClick={() => scrollToSection('proyectos')} className="block w-full text-left py-2 px-4 hover:bg-blue-500/20 rounded">Proyectos</button>
              <button onClick={() => scrollToSection('habilidades')} className="block w-full text-left py-2 px-4 hover:bg-blue-500/20 rounded">Habilidades</button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left py-2 px-4 hover:bg-blue-500/20 rounded">Contacto</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Luca Gorosito
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <p className="text-xl md:text-2xl text-blue-300 font-semibold">Desarrollador Full-Stack</p>
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Desarrollador full-stack con más de dos años de experiencia creando aplicaciones web utilizando React, Angular, Java, Spring Boot, JavaScript, Express y Node.js
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:lucagoro10@gmail.com" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-blue-500/50 border-2 border-blue-400">
              <span className="flex items-center gap-2">
                <Mail size={20} />
                Contactar
              </span>
            </a>
            <a href="#proyectos" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold transition-all border-2 border-gray-600 hover:border-blue-500">
              Ver Proyectos
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-400" size={36} />
            <h2 className="text-4xl font-bold text-blue-400">Sobre mí</h2>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-8 border-2 border-blue-500/50 shadow-xl backdrop-blur relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Soy estudiante de la <span className="text-blue-400 font-semibold">Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas</span> en la <span className="text-blue-400 font-semibold">UNICEN - Universidad Nacional del Centro de la Provincia de Buenos Aires</span>.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Actualmente en mi último año de formación (2024-2026, finalización prevista junio 2026), me especializo en el desarrollo de soluciones web completas, desde el frontend hasta el backend, con enfoque en arquitecturas escalables y buenas prácticas de desarrollo.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi experiencia incluye trabajo con metodologías ágiles, versionado con Git, y despliegue de aplicaciones en plataformas cloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-400" size={36} />
            <h2 className="text-4xl font-bold text-blue-400">Experiencia</h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-8 border-2 border-blue-500/50 shadow-xl backdrop-blur">
            <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2">Desarrollador Full-Stack</h3>
                <p className="text-gray-400">Freelance</p>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 border border-blue-500 rounded-lg">
                <span className="text-blue-300 font-semibold">2024 - Actualidad</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-blue-400 mt-1">▹</span>
                <p className="text-gray-300">Desarrollo de aplicaciones web con React y Angular, aplicando patrones de componentes, estado global y consumo de APIs REST.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-blue-400 mt-1">▹</span>
                <p className="text-gray-300">Desarrollo backend con Java + Spring Boot y Node.js + Express, implementando arquitectura por capas, validaciones, autenticación y seguridad.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-blue-400 mt-1">▹</span>
                <p className="text-gray-300">Diseño, implementación y documentación de APIs RESTful.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-blue-400 mt-1">▹</span>
                <p className="text-gray-300">Gestión de bases de datos MySQL, PostgreSQL y MongoDB.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-blue-400 mt-1">▹</span>
                <p className="text-gray-300">Prácticas de testing, CI/CD y despliegue en Vercel, GitHub Pages y Render.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <span className="text-blue-400 mt-1">▹</span>
                <p className="text-gray-300">Trabajo con metodologías ágiles, versionado Git y GitHub Flow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="text-blue-400" size={36} />
            <h2 className="text-4xl font-bold text-blue-400">Proyectos Destacados</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-6 border-2 border-blue-500/30 hover:border-blue-400 transition-all hover:transform hover:scale-105 shadow-xl backdrop-blur relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center group"
                  >
                    Ver proyecto →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Server className="text-blue-400" size={36} />
            <h2 className="text-4xl font-bold text-blue-400">Habilidades Técnicas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-6 border-2 border-blue-500/30 shadow-xl backdrop-blur hover:border-blue-400 transition-all"
              >
                <h3 className="text-xl font-bold text-blue-300 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-lg text-sm text-gray-300 hover:border-blue-500 hover:text-blue-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl p-6 border-2 border-blue-500/50 shadow-xl backdrop-blur">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Metodologías y Prácticas</h3>
            <div className="flex flex-wrap gap-2">
              {["Scrum", "Kanban", "Documentación técnica", "GitHub Flow", "CI/CD"].map((item, i) => (
                <span 
                  key={i} 
                  className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-lg text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="text-blue-400" size={36} />
            <h2 className="text-4xl font-bold text-blue-400">Contacto</h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-10">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="mailto:lucagoro10@gmail.com" 
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all border-2 border-blue-400"
            >
              <Mail size={24} />
              lucagoro10@gmail.com
            </a>
            <a 
              href="tel:2284214315" 
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all border-2 border-purple-400"
            >
              <Phone size={24} />
              2284214315
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-blue-500/30 text-center relative">
        <p className="text-gray-400">© 2026 Luca Gorosito. Desarrollado con React y Tailwind CSS.</p>
      </footer>
    </div>
  );
}