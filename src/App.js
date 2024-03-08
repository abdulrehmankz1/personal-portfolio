import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import IntroSection from './components/IntroSection';
import MenuBar from './components/MenuBar';
import PortfolioSection from './components/PortfolioSection';
import ResumeSection from './components/ResumeSection';
import ServicesSection from './components/ServicesSection';
import Sidebar from './components/Sidebar';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className='container-fluid py-xl-5 py-lg-4 py-4 my-xl-3 my-lg-3 my-md-3 my-0'>
      <MenuBar />
      <Sidebar />
      <IntroSection />
      <AboutSection />
      <ResumeSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;
