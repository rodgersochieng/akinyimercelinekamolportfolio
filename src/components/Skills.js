
// import React from "react";
// import { 
//   SiGoogle, SiTrello,SiGooglemeet, SiGmail, SiGoogledocs, SiGooglesheets, SiGoogleforms, 
//   SiGoogleads, SiCanva, SiMicrosoftonenote, SiMicrosoftoutlook, 
//   SiMicrosoftteams, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint, 
//   SiMicrosoft, SiGooglecalendar, SiGoogleslides, SiZoom, SiHootsuite, 
//   SiAsana, SiZapier, SiLastpass, SiClickup, SiToggltrack, SiGrammarly, SiOpenai,SiNotion 
// } from "react-icons/si";
// import { MdOutlineCalendarToday } from "react-icons/md";
// import { FaDropbox, FaGoogleDrive, FaMicrophone, FaSlack, } from "react-icons/fa";

// function Skills() {
//   const iconStyle = { color: "#9b4819" }; // Define the icon color

//   return (
//     <section className="text-center my-8">
//       {/* <h2 className="text-2xl font-bold mb-4">What I Use</h2> */}
//       <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-wide uppercase font-serif italic">What I Use</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//         <div className="flex flex-col items-center">
//           <SiGoogle className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google workspace</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiTrello className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Trello</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <MdOutlineCalendarToday className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Calendly</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGooglemeet className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google Meet</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGmail className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Gmail</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGoogledocs className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google Docs</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGooglesheets className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google Sheets</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGoogleforms className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google Forms</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGoogleads className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google Ads</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiCanva className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Canva</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiMicrosoftonenote className="text-5xl" style={iconStyle} />
//           <span className="mt-2">OneNote</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiMicrosoftoutlook className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Outlook</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiMicrosoftteams className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Teams</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiMicrosoftword className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Word</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiMicrosoftexcel className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Excel</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiMicrosoftpowerpoint className="text-5xl" style={iconStyle} />
//           <span className="mt-2">PowerPoint</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiMicrosoft className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Microsoft</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGooglecalendar className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google Calendar</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGoogleslides className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google Slides</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaDropbox className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Dropbox</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaGoogleDrive className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Google Drive</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaSlack className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Slack</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiZoom className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Zoom</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaMicrophone className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Otter.ai</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiGrammarly className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Grammarly</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiZapier className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Zapier</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiAsana className="text-5xl" style={iconStyle}/>
//           <span className="mt-2">Asana</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiHootsuite className="text-5xl" style={iconStyle} />
//           <span className="mt-2">Hootsuite</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiLastpass className="text-5xl" style={iconStyle}/>
//           <span className="mt-2">LastPass </span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiOpenai className="text-5xl" style={iconStyle}/>
//           <span className="mt-2">ChatGPT</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiClickup className="text-5xl" style={iconStyle}/>
//           <span className="mt-2">ClickUp</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiToggltrack className="text-5xl" style={iconStyle}/>
//           <span className="mt-2">Toggl Track</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiNotion className="text-5xl" style={iconStyle}/>
//           <span className="mt-2">Notion</span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;



import React from "react";
import { 
  SiGoogle, SiTrello,SiExpensify, SiGooglemeet, SiGmail, SiGoogledocs, SiGooglesheets, SiGoogleforms, 
  SiGoogleads, SiCanva, SiMicrosoftonenote, SiMicrosoftoutlook, 
  SiMicrosoftteams, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint, 
  SiMicrosoft, SiGooglecalendar, SiGoogleslides, SiZoom, SiHootsuite, 
  SiAsana, SiZapier, SiLastpass, SiClickup, SiToggltrack, SiGrammarly, SiOpenai, SiNotion 
} from "react-icons/si";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaDropbox, FaGoogleDrive, FaMicrophone, FaSlack, } from "react-icons/fa";

function Skills() {
  const iconStyle = { color: "#9b4819" }; // Define the icon color

  return (
    <section className="text-center my-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-wide uppercase font-serif italic">What I Use</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <div className="flex flex-col items-center">
          <SiExpensify className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Expensify</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogle className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google workspace</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTrello className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Trello</span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineCalendarToday className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Calendly</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGooglemeet className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google Meet</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGmail className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Gmail</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogledocs className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google Docs</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGooglesheets className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google Sheets</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogleforms className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google Forms</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogleads className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google Ads</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCanva className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Canva</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftonenote className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">OneNote</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftoutlook className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Outlook</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftteams className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Teams</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftword className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Word</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftexcel className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Excel</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoftpowerpoint className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">PowerPoint</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMicrosoft className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Microsoft</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGooglecalendar className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google Calendar</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGoogleslides className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google Slides</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDropbox className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Dropbox</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGoogleDrive className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Google Drive</span>
        </div>
        <div className="flex flex-col items-center">
          <FaSlack className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Slack</span>
        </div>
        <div className="flex flex-col items-center">
          <SiZoom className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Zoom</span>
        </div>
        <div className="flex flex-col items-center">
          <FaMicrophone className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Otter.ai</span>
        </div>
        <div className="flex flex-col items-center">
          <SiGrammarly className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Grammarly</span>
        </div>
        <div className="flex flex-col items-center">
          <SiZapier className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Zapier</span>
        </div>
        <div className="flex flex-col items-center">
          <SiAsana className="text-5xl" style={iconStyle}/>
          <span className="mt-2 text-black">Asana</span>
        </div>
        <div className="flex flex-col items-center">
          <SiHootsuite className="text-5xl" style={iconStyle} />
          <span className="mt-2 text-black">Hootsuite</span>
        </div>
        <div className="flex flex-col items-center">
          <SiLastpass className="text-5xl" style={iconStyle}/>
          <span className="mt-2 text-black">LastPass </span>
        </div>
        <div className="flex flex-col items-center">
          <SiOpenai className="text-5xl" style={iconStyle}/>
          <span className="mt-2 text-black">ChatGPT</span>
        </div>
        <div className="flex flex-col items-center">
          <SiClickup className="text-5xl" style={iconStyle}/>
          <span className="mt-2 text-black">ClickUp</span>
        </div>
        <div className="flex flex-col items-center">
          <SiToggltrack className="text-5xl" style={iconStyle}/>
          <span className="mt-2 text-black">Toggl Track</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNotion className="text-5xl" style={iconStyle}/>
          <span className="mt-2 text-black">Notion</span>
        </div>
        </div>
     </section>
  );
}

export default Skills;