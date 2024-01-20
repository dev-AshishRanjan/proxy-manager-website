import './style.css';
const ReleaseSection = ({ data, latest }: any) => {
  const img = {
    'Red Hat Linux': 'top-hat',
    Windows: 'windows8',
    Mac: 'mac-os',
    'Debian Linux': 'linux-client',
  };
  const names = ['Red Hat Linux', 'Windows', 'Mac', 'Debian Linux'];
  return (
    <details className="ReleaseSection" open={latest ? true : false}>
      <summary>{latest ? 'Latest' : data.name}</summary>
      <div className="cards">
        {data.assets &&
          data.assets.map((ele: any) => {
            const name =
              (ele.name.includes('rpm') && 'Red Hat Linux') ||
              (ele.name.includes('exe') && 'Windows') ||
              (ele.name.includes('darwin') && 'Mac') ||
              (ele.name.includes('.deb') && 'Debian Linux');
            return names.includes(name) ? (
              <div className="card" key={ele.id}>
                <h3>{name}</h3>
                <img
                  width="100"
                  height="100"
                  src={`https://img.icons8.com/clouds/500/${img[name]}.png`}
                  alt={`${name}`}
                />
                <a href={ele.browser_download_url} className="btn">
                  Download
                </a>
                <p>{ele.created_at.split('T')[0]}</p>
              </div>
            ) : null;
          })}
        <a className="card" href={data.html_url} target="_blank">
          {/* <h3>More</h3> */}
          <img
            width="100"
            height="100"
            src={`https://img.icons8.com/clouds/500/more.png`}
            alt={`more`}
          />
          {/* <a href={data.browser_download_url} className="btn">Download</a> */}
        </a>
      </div>
    </details>
  );
};

export default ReleaseSection;
