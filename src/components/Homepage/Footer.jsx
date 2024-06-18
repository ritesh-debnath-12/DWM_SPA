import NavBarImage from "/images/website-icon.png";
import IndiaImage from "/images/India.svg";

export default function Footer() {
    return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-hero-summary">
          <div className="footer-hero-summary-title">
            <img src={NavBarImage} alt="WebsiteImg" />
            <p>Swachya Sangram</p>
          </div>
          <div className="footer-hero-summary-content">
            <p>Swachya Sangram is a non-profit organization</p>
            <p>which aims to create a waste-free and clean</p>
            <p>environment for the current as well as the </p>
            <p>next generation of all sentient beings.</p>
          </div>
        </div>
        <div className="footer-navbar-summary">
          <div className="footer-navbar-summary-title">
            <p>Browse</p>
          </div>
          <div className="footer-navbar-summary-content">
            <a href="#"><p>Homepage</p></a>
            <a href="#"><p>About Us</p></a>
            <a href="#"><p>Contact Us</p></a>
            <a href="#"><p>Support the cause!</p></a>
          </div>
        </div>
        <div className="footer-contactUs-summary">
          <div className="footer-contactUs-summary-title">
            <p>Contact Us!</p>
          </div>
          <div className="footer-contactUs-summary-content">
            <p>Office of Waste Collection,</p>
            <p>Sector-76, Forge District</p>
            <p>Route-98B, Freedonia Empire</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img src={IndiaImage} alt="India_SVG" />
          <p>Copyright &copy;2024 Swachya Sangram</p>
        </div>
        <div className="footer-bottom-right">
          <p>Made with <span style={{color: "red"}}>❤</span> by Neko!</p>
        </div>
      </div>
    </footer>
    );
  }