import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'dhanyadwivedi170304@gmail.com',
      link: 'mailto:dhanyadwivedi170304@gmail.com',
      color: 'blue',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '(+91) 9621868986',
      link: 'tel:+919621868986',
      color: 'green',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Greater Noida, Uttar Pradesh',
      link: null,
      color: 'purple',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-8 h-8" />,
      label: 'GitHub',
      username: '@dhanya-017',
      link: 'https://github.com/dhanya-017',
      color: 'slate',
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      username: '/dhanya-dwivedi',
      link: 'https://linkedin.com/in/dhanya-dwivedi',
      color: 'blue',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      username: 'dhanyadwivedi170304@gmail.com',
      link: 'mailto:dhanyadwivedi170304@gmail.com',
      color: 'red',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; text: string; hover: string; border: string }
    > = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        hover: 'hover:bg-blue-200',
        border: 'border-blue-300',
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        hover: 'hover:bg-green-200',
        border: 'border-green-300',
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        hover: 'hover:bg-purple-200',
        border: 'border-purple-300',
      },
      slate: {
        bg: 'bg-slate-50',
        text: 'text-slate-600',
        hover: 'hover:bg-slate-100',
        border: 'border-slate-200',
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        hover: 'hover:bg-red-200',
        border: 'border-red-300',
      },
    };
    return colors[color];
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-center text-base sm:text-lg text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            I'm actively seeking new opportunities and would love to discuss how I can contribute to
            your team. Feel free to reach out through any of these channels.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => {
              const colors = getColorClasses(method.color);
              const content = (
                <div
                  className={`${colors.bg} ${colors.border} border p-4 sm:p-6 rounded-xl ${
                    method.link ? `${colors.hover} cursor-pointer` : ''
                  } transition-all duration-300`}
                >
                  <div className={`${colors.text} mb-3 sm:mb-4`}>{method.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{method.label}</h3>
                  <p className={`${colors.text} break-all text-sm sm:text-base`}>{method.value}</p>
                </div>
              );

              return method.link ? (
                <a key={index} href={method.link}>
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="bg-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
              Connect on Social Media
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {socialLinks.map((social, index) => {
                const colors = getColorClasses(social.color);
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.bg} ${colors.border} border p-4 sm:p-6 rounded-xl ${colors.hover} transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className={`${colors.text} mb-3 sm:mb-4 flex justify-center`}>{social.icon}</div>
                    <h4 className="text-base sm:text-lg font-semibold text-slate-900 text-center mb-2">
                      {social.label}
                    </h4>
                    <p className={`${colors.text} text-center text-xs sm:text-sm break-all`}>
                      {social.username}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Available for Opportunities</h3>
              <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-white/90">
                Looking for Full-Stack Development, Graduate Programs, or Internship Roles
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="mailto:dhanyadwivedi170304@gmail.com"
                  className="bg-white text-purple-500 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300 text-sm sm:text-base"
                >
                  Email Me
                </a>
                <a
                  href="https://linkedin.com/in/dhanya-dwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 text-sm sm:text-base"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-600">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center text-slate-300">
            <p className="mb-1 sm:mb-2 text-sm sm:text-base">Built with React, TypeScript, and Tailwind CSS</p>
            <p className="text-xs sm:text-sm">© 2026 Dhanya Dwivedi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
