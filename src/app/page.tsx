"use client";

import { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Phone, MapPin, Github, Code, Briefcase, BookOpen } from 'lucide-react';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDark(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const theme = {
    dark: {
      bg: 'bg-slate-950',
      surface: 'bg-slate-900',
      border: 'border-slate-800',
      text: 'text-slate-100',
      textSecondary: 'text-slate-400',
      textTertiary: 'text-slate-500',
      accent: 'text-blue-400',
      accentBg: 'bg-blue-500/10',
      accentBorder: 'border-blue-500/20',
      hover: 'hover:bg-slate-800 hover:border-blue-500/40',
      shadow: 'shadow-2xl shadow-blue-950/20',
    },
    light: {
      bg: 'bg-slate-50',
      surface: 'bg-white',
      border: 'border-slate-200',
      text: 'text-slate-900',
      textSecondary: 'text-slate-600',
      textTertiary: 'text-slate-500',
      accent: 'text-blue-600',
      accentBg: 'bg-blue-50',
      accentBorder: 'border-blue-200',
      hover: 'hover:bg-slate-100 hover:border-blue-400/50',
      shadow: 'shadow-lg shadow-slate-200/30',
    },
  };

  const t = isDark ? theme.dark : theme.light;

  const skills = [
    { category: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Flask'] },
    { category: 'Databases', items: ['MongoDB', 'SQL', 'PostgreSQL'] },
  ];

  const projects = [
    {
      title: 'Floral Synthesis (DCGAN)',
      description: 'Machine learning model generating photorealistic flower images using PyTorch, NumPy, and the Oxford 102 Flower Dataset. Advanced deep learning implementation with custom dataset preprocessing.',
      tags: ['PyTorch', 'NumPy', 'DCGAN', 'ML'],
      date: 'Apr 2025',
      accent: 'from-blue-500/20 to-cyan-500/20',
      borderAccent: 'border-cyan-500/20 hover:border-cyan-500/50',
    },
    {
      title: 'Heritage of India',
      description: 'Full-stack interactive platform exploring Indian culture, history, and traditions. Dynamic content management system with rich media support and responsive design across all devices.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      date: 'Jan 2025 - Ongoing',
      accent: 'from-emerald-500/20 to-teal-500/20',
      borderAccent: 'border-emerald-500/20 hover:border-emerald-500/50',
    },
  ];

  const experience = [
    {
      title: 'Technical Support Manager',
      company: 'Current Role',
      period: 'Present',
      description: 'Leading technical support operations with focus on fintech and startup environments.',
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${t.bg} ${t.text}`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-3 rounded-full transition-all duration-300 ${t.surface} border ${t.border} ${t.shadow} hover:scale-110 active:scale-95`}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700" />
          )}
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur">
              <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Welcome to my portfolio</p>
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight`}>
            Arpan Rajesh
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Charola
            </span>
          </h1>
          <p className={`text-lg md:text-xl ${t.textSecondary} max-w-2xl leading-relaxed font-light`}>
            Software Engineer & IT Graduate | Fintech • Startups • Full-Stack Development | Passionate about building innovative solutions in unstructured environments.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Left Sidebar - Profile & Contact */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Contact Card */}
            <div className={`rounded-2xl border ${t.border} ${t.surface} ${t.shadow} p-6 md:p-8 backdrop-blur-sm`}>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <a
                  href="mailto:arpantech1130@gmail.com"
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${t.hover} border ${t.border}`}
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm break-all">arpantech1130@gmail.com</span>
                </a>
                <a
                  href="tel:8108309883"
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${t.hover} border ${t.border}`}
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">8108309883</span>
                </a>
                <div className={`flex items-center gap-3 p-3 rounded-lg border ${t.border} ${t.textSecondary}`}>
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Morbi, Gujarat</span>
                </div>
              </div>
              <a
                href="https://github.com/ArpanCharola"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all bg-blue-500 hover:bg-blue-600 text-white`}
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
            </div>

            {/* Education Card */}
            <div className={`rounded-2xl border ${t.border} ${t.surface} ${t.shadow} p-6 md:p-8 backdrop-blur-sm`}>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest">Education</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className={`font-semibold text-sm ${t.text}`}>B.Tech in Information Technology</h3>
                  <p className={`text-xs ${t.textTertiary} mt-1`}>Marwadi University</p>
                  <p className={`text-xs ${t.textTertiary}`}>2022 - 2026</p>
                </div>
                <div className={`pt-3 border-t ${t.border}`}>
                  <p className={`text-xs ${t.textSecondary} uppercase tracking-tight font-medium`}>CGPA</p>
                  <p className="text-2xl font-bold text-blue-400 mt-1">8.09</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`rounded-2xl border ${t.border} ${t.surface} ${t.shadow} p-6 md:p-8 backdrop-blur-sm`}>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4">Quick Links</h2>
              <div className="space-y-2">
                <a href="#skills" className={`block text-sm ${t.accent} hover:underline`}>→ Skills & Stack</a>
                <a href="#projects" className={`block text-sm ${t.accent} hover:underline`}>→ Projects</a>
                <a href="#experience" className={`block text-sm ${t.accent} hover:underline`}>→ Experience</a>
              </div>
            </div>
          </div>

          {/* Right Content - Skills, Projects, Experience */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            {/* Skills Section */}
            <section id="skills" className={`rounded-2xl border ${t.border} ${t.surface} ${t.shadow} p-6 md:p-8 backdrop-blur-sm scroll-mt-20`}>
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-5 h-5 text-blue-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest">Stack & Skills</h2>
              </div>
              <div className="space-y-6">
                {skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h3 className={`text-xs font-bold uppercase tracking-widest ${t.textSecondary} mb-3`}>
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-2 rounded-lg border ${t.border} ${t.accentBg} text-xs font-semibold tracking-tight transition-all hover:${t.accentBorder} cursor-default`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`scroll-mt-20`}>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest">Featured Projects</h2>
              </div>
              <div className="space-y-4 md:space-y-6">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border ${t.border} ${t.surface} ${t.shadow} p-6 md:p-8 backdrop-blur-sm transition-all group hover:border-blue-500/50 hover:scale-[1.02]`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className={`text-lg md:text-xl font-bold mb-2 group-hover:${t.accent} transition-colors`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm ${t.textSecondary} leading-relaxed max-w-2xl`}>
                          {project.description}
                        </p>
                      </div>
                      <div className={`text-xs font-semibold whitespace-nowrap px-3 py-1 rounded-full ${t.accentBg} border ${t.accentBorder} ${t.accent}`}>
                        {project.date}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-medium px-2 py-1 rounded border ${t.border} ${t.textTertiary}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className={`scroll-mt-20`}>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest">Professional Summary</h2>
              </div>
              <div className={`rounded-2xl border ${t.border} ${t.surface} ${t.shadow} p-6 md:p-8 backdrop-blur-sm`}>
                <p className={`text-sm ${t.textSecondary} leading-relaxed mb-4`}>
                  IT graduate with strong foundations in Java, SQL, and data-driven decision making. Passionate about fintech and startup environments with experience in full-stack development and machine learning projects. Adept at working in unstructured environments, taking ownership, and delivering results through continuous learning and innovative problem-solving.
                </p>
                <div className={`pt-4 border-t ${t.border}`}>
                  <p className={`text-xs ${t.textSecondary} uppercase tracking-tight font-medium mb-3`}>Current Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {['Full-Stack Development', 'Machine Learning', 'Startup Solutions'].map((focus) => (
                      <span key={focus} className={`text-xs px-3 py-2 rounded-lg ${t.accentBg} border ${t.accentBorder}`}>
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="experience" className={`scroll-mt-20`}>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest">Professional Summary</h2>
              </div>
              <div className={`rounded-2xl border ${t.border} ${t.surface} ${t.shadow} p-6 md:p-8 backdrop-blur-sm`}>
                <p className={`text-sm ${t.textSecondary} leading-relaxed mb-4`}>
                  IT graduate with strong foundations in Java, SQL, and data-driven decision making. Passionate about fintech and startup environments with experience in full-stack development and machine learning projects. Adept at working in unstructured environments, taking ownership, and delivering results through continuous learning and innovative problem-solving.
                </p>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={idx} className={`rounded-2xl border ${t.border} ${t.accentBg} p-4`}>
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className={`font-semibold ${t.text}`}>{exp.title}</h3>
                          <p className={`text-xs ${t.textSecondary} mt-1`}>
                            {exp.company} · {exp.period}
                          </p>
                        </div>
                      </div>
                      <p className={`text-sm ${t.textSecondary} mt-3`}>
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className={`pt-4 border-t ${t.border}`}>
                  <p className={`text-xs ${t.textSecondary} uppercase tracking-tight font-medium mb-3`}>Current Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {['Full-Stack Development', 'Machine Learning', 'Startup Solutions'].map((focus) => (
                      <span key={focus} className={`text-xs px-3 py-2 rounded-lg ${t.accentBg} border ${t.accentBorder}`}>
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>

        </div>

        {/* Footer */}
        <div className={`mt-16 md:mt-20 pt-8 border-t ${t.border} text-center ${t.textTertiary}`}>
          <p className="text-sm">
            Designed & Built by Arpan Charola © 2025 | All rights reserved
          </p>
        </div>

      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}