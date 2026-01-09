export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
      color: 'blue',
    },
    {
      category: 'Frontend Development',
      skills: ['React.js', 'Redux', 'Tailwind CSS', 'Responsive Design', 'UI/UX Implementation'],
      color: 'cyan',
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'RESTful APIs', 'JDBC', 'JSP', 'Servlets'],
      color: 'green',
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle'],
      color: 'purple',
    },
    {
      category: 'AI/ML & Computer Vision',
      skills: ['TensorFlow', 'OpenCV', 'Neural Networks', 'Deep Learning', 'NLP'],
      color: 'orange',
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux', 'Maven', 'CI/CD'],
      color: 'slate',
    },
    {
      category: 'Core Competencies',
      skills: [
        'Data Structures & Algorithms',
        'System Design',
        'Object-Oriented Programming',
        'Agile Methodologies',
        'Code Reviews',
        'Unit Testing',
      ],
      color: 'indigo',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', hover: 'hover:bg-blue-100' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-800', border: 'border-cyan-300', hover: 'hover:bg-cyan-200' },
      green: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300', hover: 'hover:bg-green-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300', hover: 'hover:bg-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300', hover: 'hover:bg-orange-200' },
      slate: { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300', hover: 'hover:bg-slate-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-300', hover: 'hover:bg-indigo-200' },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-white">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 sm:mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div
                  key={index}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-700/70 group border border border-slate-600/30"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">{category.category}</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`${colors.bg} ${colors.text} ${colors.border} border px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md ${colors.hover} cursor-pointer`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl p-6 sm:p-8 border border border-slate-600/30">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-white">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { name: 'CCNA Certification', org: 'Cisco' },
                { name: 'Google Cybersecurity', org: 'Google' },
                { name: 'AI Odyssey', org: 'Microsoft' },
                { name: 'ReactJS', org: 'Infosys Springboard' },
              ].map((cert, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-md border border border-slate-600/30">
                  <p className="font-semibold text-sm sm:text-base text-white">{cert.name}</p>
                  <p className="text-xs sm:text-sm text-slate-300">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
