import React from 'react';
import SidebarNav from "./components/SidebarNav";
import HeaderAbout from './components/HeaderAbout';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactFooter from './components/ContactFooter';
import ShareButton from './components/ShareButton'; // Import your ShareButton!

function App() {
  return (
    <>
      <ShareButton />  {/* <-- Add this at the very top */}
      <HeaderAbout />
      <SidebarNav />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <ContactFooter />
    </>
  );
}
export default App;
