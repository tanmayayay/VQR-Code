import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Get your VQR sticker now</h3>
              <h2>Quick & easy Process</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Select Sticker & Order </h3>
                <p>
                We offer a big range of sticker designs for all of your choices. We
                have the perfect upgrade that your car to needs.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Download the app and wait for your sticker </h3>
                <p>
                  Our trustworthy and friendly operators are always working to
                  get you your stickers asap.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Let's Drive</h3>
                <p>
                 After your sticker is arrived and installed in your car, you are good to go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
