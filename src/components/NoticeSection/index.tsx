import './style.css';
const NoticeSection = () => {
  return (
    <div className="notice" id="notice">
      <div className="sectionSeperator"></div>
      <div className="text">
        <h1>
          The App is
          <span> secure</span>
        </h1>
        <p>
          If you encounter a warning about our app being "unauthorized," please
          note that this is a result of the absence of a digital signature, not
          an indication of malicious activity.
        </p>
        <p>
          Our Electron app lacks a code signing certificate. This doesn't
          compromise security, it's simply a signature absence.
        </p>
        <p>
          You can go through our codebase to be assured about security and
          vulnerablity, if found you can notify us by opening a github issue in
          our Github Repository.
        </p>
      </div>
      <div className="image">
        <img src="/src/assets/images/notice2.png" alt="" className="home1" />
        <img src="/src/assets/images/notice1.png" alt="" className="home2" />
      </div>
      {/* about code signing, unauth app, and check on web on how to install unauth app on your os */}
      {/* about that we don't access or modify your any sensetive data, except the proxy */}
    </div>
  );
};

export default NoticeSection;
