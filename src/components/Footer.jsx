function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>VQR</span>Code
              </li>
              <li>
                We offer a variety of sticker designs for all of your choices. We
                have the perfect upgrade that your car to needs.
              </li>
              <li>
                <a href="tel:+919437222091">
                  <i className="fa-solid fa-phone"></i> &nbsp; +919437222091
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                  dmdjdigvijay1@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; dmdjdigvijay1@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://singhtanmay.netlify.app/"
                >
                  Webiste Design by tanmayayay
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">New Delhi</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 5:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
