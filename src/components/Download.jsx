import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get most out of it</h2>
            <p>
              Click on the links below to get our application both on IOS and Android.
            </p>
            <div className="download-text__btns">
            <a href="https://play.google.com/store/apps/details?id=com.tekmama.vqrapp&pli=1"><img alt="download_img" src={Img2} /></a>
            <a href="https://apps.apple.com/in/app/tekmama/id6448697871"><img alt="download_img" src={Img1} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
