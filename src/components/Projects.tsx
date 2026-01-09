import { Brain, ExternalLink, Globe, ShoppingCart } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Eatalyzer - AI-Powered Food Scanner',
      icon: <Brain className="w-8 h-8" />,
      description:
        'Full-stack AI-driven application that analyzes food images to calculate calorie intake and provide detailed nutritional information using deep learning.',
      problem: 'People struggle to track their daily calorie intake and nutritional values accurately.',
      solution:
        'Built an intelligent food recognition system using TensorFlow and OpenCV that analyzes food images in real-time, identifies ingredients, and provides accurate nutritional breakdowns.',
      impact: [
        'Achieved 85%+ accuracy in food recognition across 100+ food categories',
        'Reduced manual calorie tracking time by 90% for users',
        'Processed and analyzed 1000+ food images during testing phase',
      ],
      technologies: [
        'React.js',
        'TypeScript',
        'PostgreSQL',
        'TensorFlow',
        'OpenCV',
        'REST APIs',
        'Cloud Deployment',
      ],
      link: 'https://github.com/dhanya-017/Eatalyzer',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Travel Planner & Booking Application',
      icon: <Globe className="w-8 h-8" />,
      description:
        'Enterprise-grade web application for travel planning and real-time booking management using Java EE technologies with thread-safe concurrent processing.',
      problem:
        'Travel booking systems face challenges with race conditions and data inconsistency during concurrent bookings.',
      solution:
        'Implemented a distributed booking system with queue-based concurrency control and hash maps for session management, ensuring thread-safe operations and preventing double bookings.',
      impact: [
        'Handled 100+ concurrent booking requests without data conflicts',
        'Achieved 99.9% booking accuracy with zero double-booking incidents',
        'Reduced booking processing time by 40% through optimized algorithms',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'JSP',
        'Servlets',
        'JDBC',
        'PostgreSQL',
        'Spring Security',
        'REST APIs',
      ],
      link: ' https://github.com/dhanya-017/travel-booking-planner',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Travel Booking Platform',
      description: 'Comprehensive travel planning and booking system with itinerary management',
      problem: 'Travelers needed an integrated solution for planning trips and booking services',
      solution: 'Developed full-stack platform with real-time booking, payment processing, and admin dashboard',
      impact: [
        'Streamlined booking process by 60%',
        'Integrated 50+ travel services',
        'Achieved 98% user satisfaction rate',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
      link: 'https://github.com/dhanya-017/travel-booking-planner',
      gradient: 'from-green-500 to-teal-500',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: 'News Aggregator',
      description: 'Real-time news aggregation platform with personalized content delivery',
      problem: 'Users needed a centralized platform for accessing multiple news sources',
      solution: 'Built responsive web app with real-time updates, filtering, and user preferences',
      impact: [
        'Aggregated 100+ news sources',
        'Reduced content discovery time by 70%',
        'Implemented AI-powered content recommendations',
      ],
      technologies: ['React.js', 'TypeScript', 'NewsAPI', 'WebSocket'],
      link: 'https://github.com/dhanya-017/NewsHub-Real-Time-News-Aggregator-Web-App',
      gradient: 'from-purple-500 to-pink-500',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: 'MIT Scratch Clone',
      description: 'Interactive programming education platform with visual code editor',
      problem: 'Learning programming needed visual, interactive tools with immediate feedback',
      solution: 'Created feature-rich clone with block-based coding, sprites, and animations',
      impact: [
        'Implemented 15+ code blocks with proper execution logic',
        'Enabled sprite animations and movement through visual programming',
        'Built interactive tutorial system',
      ],
      technologies: ['React.js', 'TypeScript', 'Graph Algorithms', 'Recursion', 'State Management'],
      link: 'https://mit-scratch-clone-tan.vercel.app/',
      gradient: 'from-orange-500 to-red-500',
      icon: <ShoppingCart className="w-8 h-8" />,
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto mb-8 sm:mb-12 rounded-full"></div>

          <div className="grid gap-8 sm:gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group"
              >
                <div className={`bg-gradient-to-r ${project.gradient} p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-2 sm:p-3 rounded-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 group-hover:text-white transition-colors duration-300">{project.title}</h3>
                        <p className="text-white/90 text-sm sm:text-base lg:text-lg">{project.description}</p>
                      </div>
                    </div>
                    <a
                      href={project.link}
                      className="bg-white/20 p-2 sm:p-3 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="group/item">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2 group-hover/item:text-red-400 transition-colors duration-300">
                        <span className="text-red-400 group-hover/item:scale-110 transition-transform duration-300">⚠</span> Problem
                      </h4>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed group-hover/item:text-slate-100 transition-colors duration-300">{project.problem}</p>
                    </div>
                    <div className="group/item">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2 group-hover/item:text-green-400 transition-colors duration-300">
                        <span className="text-green-400 group-hover/item:scale-110 transition-transform duration-300">✓</span> Solution
                      </h4>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed group-hover/item:text-slate-100 transition-colors duration-300">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 flex items-center gap-2 group-hover/item:text-purple-400 transition-colors duration-300">
                      <span className="text-purple-400 group-hover/item:scale-110 transition-transform duration-300">📊</span> Impact & Results
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {project.impact.map((item, i) => (
                        <li
                          key={i}
                          className="bg-gradient-to-br from-slate-600 to-slate-500 p-3 sm:p-4 rounded-lg border border-slate-400 hover:from-slate-500 hover:to-slate-400 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer"
                        >
                          <p className="text-xs sm:text-sm text-white leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-slate-600 text-slate-200 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-slate-500 hover:bg-slate-500 hover:text-slate-100 hover:scale-105 transition-all duration-200 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
