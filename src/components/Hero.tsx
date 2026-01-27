import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full opacity-10 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500 rounded-full opacity-15 animate-float-delayed-2"></div>
      <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-pink-500 rounded-full opacity-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 md:mb-12 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 leading-tight tracking-tight">
                Dhanya Dwivedi
              </h1>
              <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 sm:mt-6 rounded-full"></div>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-3 sm:mb-4 font-light tracking-wide">
              Full-Stack Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-slate-200 border border-white/20 hover:bg-white/20 transition-all duration-300">MERN Stack</span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-slate-200 border border-white/20 hover:bg-white/20 transition-all duration-300">Java</span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-slate-200 border border-white/20 hover:bg-white/20 transition-all duration-300">Spring Boot</span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-slate-200 border border-white/20 hover:bg-white/20 transition-all duration-300">AI/ML</span>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 mb-8 sm:mb-12 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed text-center font-light">
              Final-year Computer Science Engineering student (Class of 2026) with hands-on experience in full-stack software development and backend engineering. Strong foundation in data structures, algorithms, object-oriented programming, RESTful APIs,
databases, and SDLC. Proven ability to build, test, optimize, and deploy production-grade applications while collaborating in
Agile, cross-functional teams. Actively seeking Software Engineer / Software Developer roles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/my_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-white/20 touch-manipulation"
              >
                <FileText size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>View Resume</span>
              </a>
              <a
                href="/my_resume.pdf"
                download="Dhanya_Dwivedi_Resume.pdf"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20 touch-manipulation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Download CV</span>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="mailto:dhanyadwivedi170304@gmail.com"
                className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-slate-100 shadow-lg touch-manipulation"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Get In Touch</span>
              </a>
              <a
                href="https://github.com/dhanya-017"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-white/20 touch-manipulation"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/dhanya-dwivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-white/20 touch-manipulation"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
