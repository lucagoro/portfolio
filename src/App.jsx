import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Code, Server, Database, Briefcase, GraduationCap, Menu, X } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              LG
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('sobre-mi')} className="hover:text-blue-400 transition">Sobre mí</button>
              <button onClick={() => scrollToSection('experiencia')} className="hover:text-blue-400 transition">Experiencia</button>
              <button onClick={() => scrollToSection('proyectos')} className="hover:text-blue-400 transition">Proyectos</button>
              <button onClick={() => scrollToSection('habilidades')} className="hover:text-blue-400 transition">Habilidades</button>
              <button onClick={() => scrollToSection('contacto')} className="hover:text-blue-400 transition">Contacto</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('sobre-mi')} className="block w-full text-left py-2 hover:text-blue-400">Sobre mí</button>
              <button onClick={() => scrollToSection('experiencia')} className="block w-full text-left py-2 hover:text-blue-400">Experiencia</button>
              <button onClick={() => scrollToSection('proyectos')} className="block w-full text-left py-2 hover:text-blue-400">Proyectos</button>
              <button onClick={() => scrollToSection('habilidades')} className="block w-full text-left py-2 hover:text-blue-400">Habilidades</button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left py-2 hover:text-blue-400">Contacto</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Luca Gorosito
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Desarrollador Full-Stack
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            Desarrollador full-stack con más de dos años de experiencia creando aplicaciones web utilizando React, Angular, Java, Spring Boot, JavaScript, Express y Node.js
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:lucagoro10@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
              <Mail size={20} />
              Contactar
            </a>
            <a href="#proyectos" className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition">
              Ver Proyectos
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <GraduationCap className="inline-block mr-3 text-blue-400" size={36} />
            Sobre mí
          </h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 mb-6">
              Soy estudiante de la <span className="text-blue-400 font-semibold">Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas</span> en la <span className="text-blue-400 font-semibold">UNICEN - Universidad Nacional del Centro de la Provincia de Buenos Aires</span>.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Actualmente en mi último año de formación (2024-2026, finalización prevista junio 2026), me especializo en el desarrollo de soluciones web completas, desde el frontend hasta el backend, con enfoque en arquitecturas escalables y buenas prácticas de desarrollo.
            </p>
            <p className="text-lg text-gray-300">
              Mi experiencia incluye trabajo con metodologías ágiles, versionado con Git, y despliegue de aplicaciones en plataformas cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline-block mr-3 text-blue-400" size={36} />
            Experiencia
          </h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Desarrollador Full-Stack</h3>
                <p className="text-gray-400">Freelance</p>
              </div>
              <span className="text-gray-400">2024 - Actualidad</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Desarrollo de aplicaciones web con React y Angular, aplicando patrones de componentes, estado global y consumo de APIs REST.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Desarrollo backend con Java + Spring Boot y Node.js + Express, implementando arquitectura por capas, validaciones, autenticación y seguridad.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Diseño, implementación y documentación de APIs RESTful.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Gestión de bases de datos MySQL, PostgreSQL y MongoDB.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Prácticas de testing, CI/CD y despliegue en Vercel, GitHub Pages y Render.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Trabajo con metodologías ágiles, versionado Git y GitHub Flow.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code className="inline-block mr-3 text-blue-400" size={36} />
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                  Ver proyecto →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Server className="inline-block mr-3 text-blue-400" size={36} />
            Habilidades Técnicas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-gray-700 px-3 py-1 rounded-lg text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-900/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Metodologías y Prácticas</h3>
            <div className="flex flex-wrap gap-2">
              {["Scrum", "Kanban", "Documentación técnica", "GitHub Flow", "CI/CD"].map((item, i) => (
                <span key={i} className="bg-gray-700 px-3 py-1 rounded-lg text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <Mail className="inline-block mr-3 text-blue-400" size={36} />
            Contacto
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a href="mailto:lucagoro10@gmail.com" className="flex items-center gap-2 text-lg hover:text-blue-400 transition">
              <Mail size={24} />
              lucagoro10@gmail.com
            </a>
            <a href="tel:2284214315" className="flex items-center gap-2 text-lg hover:text-blue-400 transition">
              <Phone size={24} />
              2284214315
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700 text-center text-gray-400">
        <p>© 2026 Luca Gorosito. Desarrollado con React y Tailwind CSS.</p>
      </footer>
    </div>
  );
}