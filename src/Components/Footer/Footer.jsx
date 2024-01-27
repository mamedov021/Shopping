import  './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className="footer">
      <div className="foooter-logo">
        <img src={footer_logo} alt="logo" />
        <p>SHOPPING</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="insta" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="insta" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="insta" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
       <marquee> <p>Copyright @ 2023 -All Right Reserved</p></marquee>
      </div>
    </div>
  )
}

export default Footer
