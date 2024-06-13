import './App.css';
import { useState } from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import IntroSection from './components/IntroSection';
import MenuBar from './components/MenuBar';
import PortfolioSection from './components/PortfolioSection';
import ResumeSection from './components/ResumeSection';
import ServicesSection from './components/ServicesSection';
import Sidebar from './components/Sidebar';
import SkillsSection from './components/SkillsSection';
import SimpleSlider from './components/Slider';

const App = () => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const [sliderImages, setSliderImages] = useState([]);

  const showSlider = (images) => {
    setSliderImages(images);
    setSliderVisible(true);
  };

  const projectImages = {
    eduport: [
      '/assets/images/eduport-1.png',
      '/assets/images/eduport-2.png',
      '/assets/images/eduport-3.png',
      '/assets/images/eduport-4.png',
    ],
    netflix: [
      '/assets/images/netflix-1.png',
      '/assets/images/netflix-2.png',
      '/assets/images/netflix-3.png',
      '/assets/images/netflix-4.png',
      '/assets/images/netflix-5.png',
      '/assets/images/netflix-6.png',
      '/assets/images/netflix-7.png',
      '/assets/images/netflix-8.png',
      '/assets/images/netflix-9.png',
    ],
    authentication: [
      '/assets/images/nextjs-authentication-1.png',
      '/assets/images/nextjs-authentication-2.png',
      '/assets/images/nextjs-authentication-3.png',
    ],
    sectech: [
      '/assets/images/sectech-1.png',
      '/assets/images/sectech-2.png',
      '/assets/images/sectech-3.png',
      '/assets/images/sectech-4.png',
      '/assets/images/sectech-5.png',
      '/assets/images/sectech-6.png',
    ],
    todo: [
      '/assets/images/todo-app-1.png',
      '/assets/images/todo-app-2.png',
      '/assets/images/todo-app-3.png',
    ],
    admin: [
      '/assets/images/react-admin-1.png',
      '/assets/images/react-admin-2.png',
      '/assets/images/react-admin-3.png',
      '/assets/images/react-admin-4.png',
      '/assets/images/react-admin-5.png',
    ],
    learningSkills: [
      '/assets/images/learning-skills-1.png',
      '/assets/images/learning-skills-2.png',
      '/assets/images/learning-skills-3.png',
      '/assets/images/learning-skills-4.png',
      '/assets/images/learning-skills-5.png',
      '/assets/images/learning-skills-6.png',
      '/assets/images/learning-skills-7.png',
      '/assets/images/learning-skills-8.png',
      '/assets/images/learning-skills-9.png',
      '/assets/images/learning-skills-10.png',
    ],
  };

  return (
    <div className="container-fluid py-lg-4 py-4 my-xl-3 my-lg-3 my-md-3 my-0 overflow-hidden">
      <MenuBar />
      <Sidebar />
      <IntroSection />
      <AboutSection />
      <ResumeSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection onProjectClick={showSlider} projectImages={projectImages} />
      <ContactSection />
      <SimpleSlider images={sliderImages} isVisible={sliderVisible} onClose={() => setSliderVisible(false)} />
    </div>
  );
};

export default App;
