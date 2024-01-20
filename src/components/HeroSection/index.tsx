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
          the loop and problems related to proxy
        </p>
      </div>
      <div className="image">
        <img src="/src/assets/icon_256.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
