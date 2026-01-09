import { Award, Code2, Trophy, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: 'Competitive Programming',
      description:
        'Solved 300+ DSA problems across LeetCode, CodeChef, Codeforces, and GeeksforGeeks. Achieved Pupil rating (1325) on Codeforces and 1394 rating on CodeChef.',
      stats: [
        { label: 'Problems Solved', value: '300+' },
        { label: 'Codeforces Rating', value: '1325' },
        { label: 'CodeChef Rating', value: '1394' },
      ],
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-600" />,
      title: 'Juspay Hackathon',
      description:
        'Successfully cleared Juspay Hackathon Part B with a tree-based system design problem, demonstrating strong problem-solving and algorithmic skills.',
      stats: [{ label: 'Achievement', value: 'Part B Cleared' }],
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Leadership Roles',
      description:
        'Led technical teams and managed student initiatives, fostering collaboration and organizing technical events.',
      stats: [
        { label: 'Vice President', value: 'NIET Alma Mater Club' },
        { label: 'Content Writer Head', value: 'Khushiyan Baaton Club' },
        { label: 'IEEE Member', value: 'Active Participant' },
      ],
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Professional Certifications',
      description:
        'Completed industry-recognized certifications in networking, security, AI, and modern web technologies.',
      stats: [
        { label: 'CCNA', value: 'Cisco' },
        { label: 'Cybersecurity', value: 'Google' },
        { label: 'AI Odyssey', value: 'Microsoft' },
      ],
    },
  ];

  const stats = [
    { number: '300+', label: 'DSA Problems Solved' },
    { number: '4+', label: 'Production Projects' },
    { number: '20%', label: 'Performance Improvement' },
    { number: '3', label: 'Internships Completed' },
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-slate-100 text-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-slate-900">
            Achievements & Recognition
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto mb-8 sm:mb-12 rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-3 sm:p-6 rounded-xl text-center border border-slate-200"
              >
                <div className="text-2xl sm:text-4xl font-bold text-purple-500 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-base text-slate-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-white p-2 sm:p-3 rounded-lg shadow-md">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{achievement.title}</h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {achievement.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-slate-600">{stat.label}</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 bg-white px-2 sm:px-3 py-1 rounded-full">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Build Something Great?</h3>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-white/90">
              I'm passionate about creating impactful software solutions and always eager to take on
              new challenges.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-purple-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300 text-sm sm:text-base"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
