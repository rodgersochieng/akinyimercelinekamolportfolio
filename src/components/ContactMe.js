
import React from "react";
import illustration from '../avatar/call.png';

function AboutAndContact() {
  const handleScrollToHeader = () => {
    const header = document.getElementById('contact-header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="my-8 p-6">
      <div className="text-center">
        <h2 className="text-3xl text-black font-bold mb-6">About Me</h2>
        <div className="text-left text-black max-w-prose mx-auto mb-12">
          <p>
            Hi there! I'm Merceline Akinyi Kamol, a passionate and dedicated Virtual Assistant with a knack for making lives easier and businesses run smoothly. <br />
            With a background in various administrative, project management, and communication roles, I've honed my skills to provide top-notch support that goes beyond the basics. <br />
            I excel at organizing chaos, whether it's managing overflowing inboxes, coordinating complex schedules, or planning seamless travel itineraries. <br />
            My aim is to free up your time so you can focus on what truly matters – growing your business and achieving your goals. <br />
            With expertise in tools like Google Workspace, Trello, Slack, and various AI-powered applications, I bring both efficiency and innovation to the table. <br />
            My proactive approach and problem-solving skills mean that I'm always one step ahead, anticipating needs and finding solutions before issues arise. <br />
            When I'm not working, I enjoy exploring new technology trends, learning new skills, and engaging in continuous professional development. <br />
            I believe in lifelong learning and staying ahead in an ever-evolving digital landscape. <br />
            Let's work together to streamline your operations, enhance productivity, and bring a touch of excellence to your everyday tasks. <br />
            I'm excited to help you achieve success, one organized email and scheduled meeting at a time.
          </p>
        </div>
        
        {/* Illustration and Call-to-Action Button */}
        <div className="mt-8">
          <img 
            src={illustration} 
            alt="Illustration" 
            className="mx-auto mb-6" 
            width="300" 
            height="300" 
          />
          <button
            onClick={handleScrollToHeader}
            className="bg-[#9b4819] text-white px-6 py-3 rounded-full hover:bg-[#7a360f] transition duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>  
    </section>
  );
}

export default AboutAndContact;
