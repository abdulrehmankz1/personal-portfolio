import './App.css';
import AboutSection from './components/AboutSection';
import IntroSection from './components/IntroSection';
import ResumeSection from './components/ResumeSection';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='container-fluid py-5 my-3'>
      <Sidebar />
      <IntroSection />
      <AboutSection />
      <ResumeSection />
    </div>
  );
}

export default App;
