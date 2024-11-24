
import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope,} from "react-icons/fa"; // Added FaGithub

function Header() {
  return (
    <div>
      <header  id="contact-header"  className="flex justify-end space-x-4 p-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ochieng-o-rodgers" className="hover:underline" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#9b4819" /> {/* Changed color */}
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/+254792657993" className="hover:underline" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} color="#9b4819" /> 
        </a>

        {/* Email */}
        <a href="mailto:akinyikamol866@gmail.com" className="hover:underline">
          <FaEnvelope size={24} color="#9b4819" /> 
        </a>

        {/* GitHub */}
        {/* <a href="https://github.com/rodgersochieng" className="hover:underline" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="#9b4819" /> 
        </a> */}
      </header>
      <hr className="border-t-1 border-[#9b4819]" /> 
    </div>
  );
}

export default Header;


