import './App.css';
import IntroSection from './components/IntroSection';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='container-fluid py-5 my-3'>
      <Sidebar />
      <IntroSection />
    </div>
  );
}

export default App;
