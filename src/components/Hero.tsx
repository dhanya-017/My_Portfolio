import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full opacity-10 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500 rounded-full opacity-15 animate-float-delayed-2"></div>
      <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-pink-500 rounded-full opacity-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight tracking-tight">
                Dhanya Dwivedi
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
            </div>
            <p className="text-2xl sm:text-3xl text-slate-300 mb-4 font-light tracking-wide">
              Full-Stack Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 hover:bg-white/20 transition-all duration-300">MERN Stack</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 hover:bg-white/20 transition-all duration-300">Java</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 hover:bg-white/20 transition-all duration-300">Spring Boot</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-slate-200 border border-white/20 hover:bg-white/20 transition-all duration-300">AI/ML</span>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 mb-8 sm:mb-12 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed text-center font-light">
              Computer Science student specializing in scalable full-stack applications,
              API development, and intelligent systems. Building production-ready solutions
              with modern technologies and clean architecture.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a
              href="mailto:dhanyadwivedi170304@gmail.com"
              className="group flex items-center gap-3 bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-slate-100 shadow-lg"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Get In Touch</span>
            </a>
            <a
              href="https://github.com/dhanya-017"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/dhanya-dwivedi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="hidden sm:inline">Greater Noida, Uttar Pradesh</span>
              <span className="sm:hidden">Greater Noida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
              <Phone size={16} className="flex-shrink-0" />
              <span className="hidden sm:inline">(+91) 9621868986</span>
              <span className="sm:hidden">+91 9621868986</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
              <Mail size={16} className="flex-shrink-0" />
              <span className="hidden sm:inline">dhanyadwivedi170304@gmail.com</span>
              <span className="sm:hidden text-xs">dhanyadwivedi...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
