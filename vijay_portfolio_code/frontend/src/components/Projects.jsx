import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Green Quest',
      description:
        'An AI-powered game designed to spread awareness about the Miyawaki forest method on campus. Combines gaming and environmental education to engage students in sustainability.',
      tech: ['AI', 'Game Development', 'Environmental Tech'],
      status: 'Completed',
      image: null, // Placeholder for project image
    },
    {
      title: 'ACE Project',
      description:
        'Building a comprehensive system to achieve zero e-waste campus in Solapur by connecting universities with recyclers. Creating a sustainable ecosystem for electronic waste management.',
      tech: ['System Design', 'Sustainability', 'AI'],
      status: 'In Progress',
      image: null,
    },
    {
      title: 'AI for All',
      description:
        'Solving the canteen rush hour problem using AI-powered seat detection. Real-time monitoring and optimization to improve student experience during peak hours.',
      tech: ['AI', 'Computer Vision', 'IoT'],
      status: 'In Progress',
      image: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building AI-powered solutions with real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden">
                {/* <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-xs">Project Image</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      project.status === 'Completed'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300"
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
    </section>
  );
};

export default Projects;
