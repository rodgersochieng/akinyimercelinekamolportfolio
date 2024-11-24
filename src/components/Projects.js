
import React from "react";
import { FaEnvelope, FaCalendarAlt, FaListAlt, FaPlane } from "react-icons/fa"; // Importing relevant icons

const projects = [
  {
    name: 'Email Management',
    description: 'Streamlined email management system to prioritize, categorize, and respond to emails efficiently. Perfect for reducing inbox clutter and ensuring timely communication.',
    features: ['Inbox Organization', 'Priority Email Categorization', 'Template-Based Replies', 'Follow-Up Scheduling'],
    link: 'https://docs.google.com/document/d/1xPBjbPn8kltwQM-HlU97opUBi_oOSm6a_qn2aTn6PYg/edit?usp=sharing',
    icon: <FaEnvelope className="text-5xl text-[#9b4819] mb-4 mx-auto" />, // Email icon
  },
  {
    name: 'Meeting Agendas',
    description: 'Customized and professional meeting agendas to ensure all discussions stay on track. Includes key points, objectives, and timelines for effective meetings.',
    features: ['Structured Meeting Topics', 'Time Allocation for Each Agenda Item', 'Clear Objectives', 'Pre-Meeting Preparation'],
    link: 'https://docs.google.com/document/d/1ZzabH6MtJuopws_P6SN32wJtz825u06WVILJSE96oPY/edit?usp=sharing',
    icon: <FaListAlt className="text-5xl text-[#9b4819] mb-4 mx-auto" />, // List icon
  },
  {
    name: 'Calendar Management',
    description: 'Comprehensive calendar management solutions to ensure all appointments, deadlines, and tasks are scheduled and coordinated effectively.',
    features: ['Appointment Scheduling', 'Event Reminders', 'Conflict Resolution', 'Recurring Task Management'],
    link: 'https://drive.google.com/file/d/1bq4oLQ7_sLzB318KY0wv2YnhHR06A73S/view?usp=sharing',
    icon: <FaCalendarAlt className="text-5xl text-[#9b4819] mb-4 mx-auto" />, // Calendar icon
  },
  {
    name: 'Travel Planning',
    description: 'Detailed travel planning services for business trips and vacations, including itinerary creation, booking management, and expense tracking.',
    features: ['Itinerary Creation', 'Flight and Hotel Booking', 'Expense Tracking', 'Destination Research'],
    link: 'https://docs.google.com/presentation/d/1u8KF9wPXzFJlpEccQae7ol6U3bWhWR4d8y4Vomm5Vbs/edit?usp=sharing',
    icon: <FaPlane className="text-5xl text-[#9b4819] mb-4 mx-auto" />, // Plane icon
  },
];

function Projects() {
  return (
    <section className="text-center my-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Starter Virtual Assistant Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center">
                {project.icon} {/* Adding the icon */}
              </div>
              <h3 className="text-2xl font-semibold text-[#9b4819] mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800">Key Features:</h4>
                <ul className="list-disc list-inside text-left text-gray-600">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                className="text-white bg-[#9b4819] hover:bg-[#7a360f] px-4 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
