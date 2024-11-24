
import React from "react";
import avatar from '../avatar/akinyi.png';

function Introduction() {
  return (
    <section className="my-8 flex flex-col lg:flex-row items-center lg:justify-between">
      
      <div className="flex flex-col items-start lg:w-2/3 mb-4 lg:mb-0">
        <h2 className="text-4xl font-bold mb-4 text-black">Hi there! 👋🏾 How's the going?</h2>
        <p className="text-lg mb-6 text-black">
          Hi, I'm Merceline Akinyi Kamol! I’m thrilled to showcase the skills, experience, and passion I bring to the table.
          My goal? To create solutions that not only work but truly make an impact. Let’s dive in!
        </p>
        
        <h4 className="text-2xl font-bold mb-3 text-black">Who I Am & What I Do</h4> 
        <p className="text-md text-black mb-6">
        I bring a proactive, problem-solving mindset to every task, enabling me to address challenges effectively and drive continuous improvement. With strong organizational skills, attention to detail, and adaptability, I excel at managing multiple priorities, meeting tight deadlines, and seamlessly integrating into new systems and workflows. My goal is to provide dependable, high-quality support that empowers businesses to focus on their core goals and thrive.
        </p>
        
      </div>
    
      <div className="flex justify-center lg:justify-end lg:w-1/3">
        <img 
          src={avatar} 
          alt="Avatar" 
          className="w-40 h-40 rounded-full object-cover lg:ml-6 lg:mt-0 mt-4"
        />
      </div>
    </section>
  );
}

export default Introduction;



