import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, Terminal, Cloud, Code, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      company: "PEOPLE TECH GROUP",
      client: "Boeing",
      role: "Software Engineer",
      location: "Redmond, WA",
      period: "December 2024 – Present",
      highlights: [
        {
          title: "Web Applications and User Experience",
          points: [
            "Led and architected enterprise-grade React application with modular component architecture, custom hooks for state management, and context-based data flow patterns",
            "Engineered robust API integration layer implementing centralized service architecture with request/response transformation, timeout handling, error boundaries, and retry logic",
            "Optimized application performance through intelligent caching strategies and persistent state management, reducing redundant network calls by 60%+",
            "Automated deployment pipeline using GitLab CI/CD to build production-optimized React bundles and deploy static assets to AWS S3"
          ]
        },
        {
          title: "Cloud API & Database Engineering",
          points: [
            "Architected and implemented a serverless REST API service using Node.js/Express and AWS Lambda, handling complex hierarchical data operations with DynamoDB",
            "Engineered batch processing pipelines with configurable concurrency controls, exponential backoff retry logic, and chunked operations",
            "Developed RESTful API with DynamoDB integration, implementing cursor-based pagination to efficiently retrieve large datasets"
          ]
        }
      ]
    },
    {
      company: "PILOMATION",
      role: "Software Engineer",
      location: "Fairfax, VA",
      period: "June 2024 – December 2024",
      highlights: [
        {
          title: "Full-Stack Development",
          points: [
            "Architected full-stack film production SaaS platform using React and FastAPI microservices, implementing API gateway with weighted load balancing",
            "Owned end-to-end design of 25+ RESTful endpoints with SQLAlchemy ORM managing 15+ database models, JWT authentication with bcrypt encryption",
            "Developed AI-powered tools including real-time budget dashboard with Recharts visualizations, casting platform with filterable talent database, and interactive script editor"
          ]
        }
      ]
    }
  ];

  const skills = {
    "Full Stack Engineering": [
      "React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind", "Bootstrap", 
      "Streamlit", "Node.js", "Python", "Java", "Spring Boot", "Express.js", "FastAPI"
    ],
    "Cloud & DevOps": [
      "AWS Lambda", "API Gateway", "S3", "Step Functions", "Terraform", 
      "Docker", "GitHub CI/CD", "GitLab CI/CD", "PostgreSQL", "MongoDB", "MySQL"
    ]
  };

  const education = [
    {
      school: "GEORGE MASON UNIVERSITY",
      degree: "MS in Computer Science",
      gpa: "3.67 / 4.0",
      location: "Fairfax, VA"
    },
    {
      school: "NEIL GOGTE INSTITUTE OF TECHNOLOGY",
      degree: "BE in Computer Science",
      gpa: "3.61 / 4.0",
      location: "Hyderabad, India"
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridScroll 20s linear infinite'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-emerald-400 text-xl font-bold tracking-tighter">
            {'<VNR />'}
          </div>
          <div className="hidden md:flex gap-8 font-mono text-sm">
            {['about', 'experience', 'skills', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`uppercase tracking-wider transition-all hover:text-emerald-400 ${
                  activeSection === section ? 'text-emerald-400' : 'text-gray-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        <div className={`max-w-5xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 font-mono text-emerald-400 text-sm tracking-widest">
            {'> FULL STACK ENGINEER'}
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient">
              VIJAYA
            </span>
            <span className="block text-white">
              NEEHARIKA
            </span>
            <span className="block text-gray-600">
              RANGISETTY
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed font-light">
            Software Engineer specializing in scalable cloud architectures, enterprise React applications, 
            and serverless backend systems. Currently building mission-critical solutions at Boeing.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a 
              href="https://linkedin.com/in/neeharikarv" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all font-mono text-sm group"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              LinkedIn
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="https://github.com/neeharikarv" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 hover:bg-gray-800 transition-all font-mono text-sm group"
            >
              <Github size={18} className="group-hover:scale-110 transition-transform" />
              GitHub
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="https://neeharika.dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 hover:bg-gray-800 transition-all font-mono text-sm group"
            >
              <Globe size={18} className="group-hover:scale-110 transition-transform" />
              Portfolio
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="mailto:neeharika.vijaya@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 hover:bg-gray-800 transition-all font-mono text-sm group"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              Email
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            ABOUT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
              <Terminal className="mb-4 text-emerald-400 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-white">Frontend Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Architecting scalable React applications with advanced state management, 
                performance optimization, and modern design patterns.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
              <Cloud className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-white">Cloud Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                Building serverless solutions with AWS Lambda, DynamoDB, and sophisticated 
                CI/CD pipelines for enterprise-scale applications.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all group">
              <Code className="mb-4 text-purple-400 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-3 text-white">Full Stack Mastery</h3>
              <p className="text-gray-400 leading-relaxed">
                End-to-end ownership from React frontends to Node.js/Python backends, 
                RESTful APIs, and relational/NoSQL databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            EXPERIENCE
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-emerald-500 pl-8 pb-12 relative group">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap items-start justify-between mb-2">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">{exp.company}</h3>
                      {exp.client && (
                        <p className="text-emerald-400 font-mono text-sm">Client: {exp.client}</p>
                      )}
                    </div>
                    <span className="text-gray-400 font-mono text-sm">{exp.period}</span>
                  </div>
                  <p className="text-xl text-cyan-400 font-semibold mb-1">{exp.role}</p>
                  <p className="text-gray-500 font-mono text-sm">{exp.location}</p>
                </div>

                {exp.highlights.map((section, sIdx) => (
                  <div key={sIdx} className="mb-6">
                    <h4 className="text-lg font-bold text-emerald-400 mb-3 font-mono uppercase tracking-wide">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-gray-300 leading-relaxed flex items-start gap-3">
                          <span className="text-emerald-500 mt-1.5 flex-shrink-0">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            SKILLS
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-wider border-b border-emerald-500/30 pb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-sm hover:bg-emerald-500/20 hover:scale-105 transition-all cursor-default"
                      style={{ animationDelay: `${sIdx * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            EDUCATION
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div key={idx} className="p-8 bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <GraduationCap className="mb-4 text-emerald-400 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
                <p className="text-xl text-cyan-400 mb-2">{edu.degree}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 font-mono text-sm">{edu.location}</p>
                  <span className="text-emerald-400 font-mono font-bold">GPA: {edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            LET'S CONNECT
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Available for full-time opportunities, consulting, and collaboration on innovative projects.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:neeharika.vijaya@gmail.com"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/50"
            >
              GET IN TOUCH
            </a>
            <a 
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-gray-900 border-2 border-emerald-500 text-emerald-400 font-bold text-lg hover:bg-emerald-500/10 transition-all hover:scale-105"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-500/20 py-8 px-6 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-mono text-sm">
            © 2025 Vijaya Neeharika Rangisetty. All rights reserved.
          </p>
          <p className="text-gray-600 font-mono text-xs">
            {'Built with React & Tailwind CSS'}
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>
    </div>
  );
}