import './style.css';
const HeroSection = () => {
  return (
    <div className="hero" id="home">
      <div className="text">
        <h1>
          <span>Proxy Manager</span> for all pc
        </h1>
        <p>
          Built for Windows, Linux, Mac using ElectronJs to make you free from
          the problems related to proxy
        </p>
      </div>
      <div className="image">
        <img src="/images/home2.png" alt="" className="home1" />
        <img src="/images/sudo.png" alt="" className="home2" />
        <img src="/images/home1.png" alt="" className="home3" />
      </div>
    </div>
  );
};

export default HeroSection;
