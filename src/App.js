import './App.css';
import AboutSection from './components/AboutSection';
import IntroSection from './components/IntroSection';
import ResumeSection from './components/ResumeSection';
import ServicesSection from './components/ServicesSection';
import Sidebar from './components/Sidebar';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className='container-fluid py-5 my-3'>
      <Sidebar />
      <IntroSection />
      <AboutSection />
      <ResumeSection />
      <ServicesSection />
      <SkillsSection />
    </div>
  );
}

export default App;
