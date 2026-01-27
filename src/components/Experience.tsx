import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Business Curative',
      role: 'Software Engineer',
      type: 'Part-Time',
      location: 'Delhi, India',
      period: 'January 2026 - Present',
      achievements: [
        'Optimized and enhanced production e-commerce features, improving API response times by approximately 15%',
        'Refactored backend and frontend components to reduce technical debt and improve scalability and reliability',
        'Designed and implemented RESTful APIs supporting core business workflows',
        'Performed unit testing, debugging, and deployment validation to ensure stable releases',
        'Collaborated with cross-functional stakeholders in an Agile development environment',
      ],
      technologies: ['MERN Stack', 'RESTful APIs', 'Unit Testing', 'Agile', 'Performance Optimization'],
    },
    {
      company: 'Business Curative',
      role: 'Software Engineering Intern (MERN Stack)',
      type: 'Internship',
      location: 'Delhi, India',
      period: 'September 2025 - December 2025',
      achievements: [
        'Designed and developed a full-featured e-commerce application using the MERN stack',
        'Implemented authentication, product catalog, cart, and order management workflows',
        'Built and integrated RESTful APIs with frontend components and databases',
        'Optimized database queries and resolved recurring issues during testing cycles',
      ],
      technologies: ['MERN Stack', 'RESTful APIs', 'Authentication', 'Database Optimization', 'Full-Stack Development'],
    },
    {
      company: 'WingsBI',
      role: 'Technical Intern',
      type: 'Internship',
      location: 'Remote',
      period: 'July 2024 - August 2024',
      achievements: [
        'Optimized ReactJS dashboards and components, improving rendering performance by 20% for faster product insights',
        'Collaborated with product managers and designers to align UI/UX improvements with business requirements',
        'Participated in code reviews and contributed to best practices documentation for frontend development',
        'Built and maintained REST APIs for internal solutions',
      ],
      technologies: ['React.js', 'JavaScript', 'REST APIs', 'UI/UX Optimization', 'Performance Tuning', 'Code Review'],
    },
    {
      company: 'AICTE (Eduskills)',
      role: 'AI-ML Virtual Intern',
      type: 'Internship',
      location: 'Remote',
      period: 'April 2024 - June 2024',
      achievements: [
        'Gained hands-on experience in AI/ML projects with Python and TensorFlow',
        'Learned neural networks, data analysis, and improved coding and problem-solving skills',
        'Worked on practical machine learning implementations and model training',
      ],
      technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Neural Networks', 'Data Analysis', 'Model Training'],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-100 text-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-slate-900">
            Professional Experience
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto mb-8 sm:mb-12 rounded-full"></div>

          <div className="relative">
            <div className="absolute left-4 sm:left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-purple-100"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-8 sm:mb-12 ml-8 sm:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-left' : 'md:pl-8 md:ml-auto md:text-left'
                } md:w-1/2`}
              >
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute left-0 sm:left-auto md:left-auto top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full border-4 border-white transform -translate-x-6 sm:-translate-x-2 md:translate-x-0 md:left-1/2 md:-translate-x-1/2"></div>

                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mb-2 justify-start">
                      <Calendar size={14} className="sm:size-16 flex-shrink-0" />
                      <span className="text-left">{exp.period}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1 text-left">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-slate-700 mb-2 justify-start">
                      <Briefcase size={16} className="sm:size-18 flex-shrink-0" />
                      <span className="text-left">{exp.company}</span>
                    </div>
                    <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap justify-start">
                      <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                      <span className="text-xs sm:text-sm bg-slate-200 text-slate-700 px-2 sm:px-3 py-1 rounded-full">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-left">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-slate-700">
                        <span className="text-purple-500 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                        <span className="text-left">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-start">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-100 text-purple-600 px-2 sm:px-3 py-1 rounded-full border border-purple-200"
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
      </div>
    </section>
  );
}
