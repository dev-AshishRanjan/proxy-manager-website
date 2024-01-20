import { useState, useEffect } from 'react';
import './style.css';
import ReleaseSection from '../ReleaseSection';
const DownloadSection = () => {
  const [latestData, setLatestData] = useState({});
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.github.com/repos/dev-AshishRanjan/proxy-manager/releases/latest',
    )
      .then(req => req.json())
      .then(res => {
        setLatestData(res);
        console.log({ res });
      });
    fetch(
      'https://api.github.com/repos/dev-AshishRanjan/proxy-manager/releases',
    )
      .then(req => req.json())
      .then(res => {
        const restData =
          latestData && res.filter((ele: any) => ele.id !== latestData.id);
        setAllData(restData);
        console.log({ res });
      });
  }, []);
  return (
    <div className="download" id="downloads">
      <div className="sectionSeperator"></div>
      <h1>Download Proxy Manager</h1>
      <ReleaseSection data={latestData} latest={true} />
      <details className="rest">
        <summary className="summary">Other Releases</summary>
        {allData.map(ele => {
          return <ReleaseSection data={ele} latest={false} />;
        })}
      </details>
    </div>
  );
};

export default DownloadSection;
