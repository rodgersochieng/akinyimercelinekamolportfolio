import React from "react";
import { FaBriefcase } from "react-icons/fa"; // Briefcase icon for each job

const workExperience = [
  {
    role: 'Virtual Assistant',
    company: 'Remote Solutions Co.',
    duration: 'Jan 2022 - Present',
    description: 'Providing administrative and organizational support to clients worldwide. Focused on improving operational efficiency.',
    responsibilities: [
      'Managed schedules and calendars for multiple clients.',
      'Organized and categorized over 1,000 emails weekly.',
      'Prepared and distributed meeting agendas and notes.',
      'Coordinated travel arrangements and expense reports.',
    ],
  },
  {
    role: 'Customer Support Specialist',
    company: 'Global Tech Corp.',
    duration: 'Aug 2020 - Dec 2021',
    description: 'Ensured customer satisfaction by resolving technical and product-related inquiries for a global audience.',
    responsibilities: [
      'Resolved 95% of customer issues within the first interaction.',
      'Created and updated the knowledge base, improving efficiency.',
      'Collaborated with the product team to identify user pain points.',
      'Trained new team members on support protocols.',
    ],
  },
  {
    role: 'Marketing Assistant',
    company: 'Bright Strategies',
    duration: 'Jun 2018 - Jul 2020',
    description: 'Supported marketing campaigns and content creation for diverse client portfolios.',
    responsibilities: [
      'Developed email marketing campaigns with a 20% engagement increase.',
      'Monitored social media metrics and prepared weekly reports.',
      'Managed client presentations and internal communications.',
      'Conducted competitor research for strategic planning.',
    ],
  },
];

function WorkExperience() {
  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Work Experience</h2>
      <div className="max-w-6xl mx-auto">
        <div className="relative border-l-4 border-[#9b4819]">
          {workExperience.map((job, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-4 top-2 bg-[#9b4819] text-white w-8 h-8 rounded-full flex items-center justify-center">
                <FaBriefcase />
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-2xl font-semibold text-[#9b4819]">{job.role}</h3>
                <h4 className="text-xl text-gray-800">{job.company}</h4>
                <p className="text-gray-600 mb-2">{job.duration}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <h5 className="font-semibold text-gray-800 mb-2">Achievements:</h5>
                <ul className="list-disc list-inside text-gray-600">
                  {job.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
