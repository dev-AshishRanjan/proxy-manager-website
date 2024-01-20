import './style.css';
const AboutSection = () => {
  return (
    <div className="about" id="about">
      <div className="sectionSeperator"></div>
      <h1>Proxies that we manage</h1>
      <div className="cards">
        <div className="card">
          <h2>Windows</h2>
          <p>1. GIT</p>
          <p>2. NPM</p>
          <p>3. PIP</p>
          <p>4. User Environment Variable</p>
          <p>5. Window Settings(the proxy of the internet section)</p>
        </div>
        <div className="card">
          <h2>Linux</h2>
          <p>1. GIT</p>
          <p>2. NPM</p>
          <p>3. PIP</p>
          <p>4. Environment Variable</p>
          <p>5. Linux Settings(gsetting gnome)</p>
        </div>
        <div className="card">
          <h2>Mac</h2>
          <p>1. GIT</p>
          <p>2. PIP</p>
          <p>3. Environment Variable</p>
          <p>4. Mac Settings(networksetup webproxy)</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
