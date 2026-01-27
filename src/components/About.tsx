import { Code2, Database, Laptop, Server } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: 'Full-Stack Development',
      description: 'Expertise in building end-to-end web applications with MERN stack and Java ecosystem',
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: 'API Architecture',
      description: 'Designing and implementing RESTful APIs with Spring Boot, Express.js, and microservices',
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: 'Database Design',
      description: 'Proficient with PostgreSQL, MongoDB, MySQL, and Oracle for scalable data solutions',
    },
    {
      icon: <Laptop className="w-8 h-8 text-cyan-600" />,
      title: 'AI Integration',
      description: 'Implementing machine learning models with TensorFlow and OpenCV for intelligent features',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white text-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-slate-900">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 sm:mb-12 rounded-full"></div>

          <div className="mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto text-center mb-6 sm:mb-8 px-2">
              Highly motivated and detail-oriented full-stack software engineer with a strong foundation in computer science and software engineering principles. Proficient in a range of programming languages, including Java, Python, and JavaScript. Experienced in developing scalable and efficient software systems using Agile methodologies and version control systems like Git. Profound understanding of data structures, algorithms, and software design patterns. Excellent problem-solving skills, with the ability to work effectively in collaborative environments and communicate complex ideas clearly.
            </p>
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-100 p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-slate-50 group cursor-pointer"
              >
                <div className="mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900">Education</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-900">
                    B.Tech in Computer Science Engineering
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700">Noida Institute of Engineering and Technology</p>
                </div>
                <div className="text-slate-600">
                  <p className="font-medium text-sm sm:text-base">CGPA: 7.63/10</p>
                  <p className="text-sm sm:text-base">2022 - 2026</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700">
                <span className="font-medium">Relevant Coursework:</span> Data Structures & Algorithms,
                Database Management Systems, Operating Systems, Computer Networks, Object-Oriented
                Programming, System Design, Software Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
