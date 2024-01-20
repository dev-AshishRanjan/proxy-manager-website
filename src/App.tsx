import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DownloadSection from './components/DownloadSection';
import NoticeSection from './components/NoticeSection';
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <DownloadSection />
        <NoticeSection />
      </div>
    </>
  );
}

export default App;
