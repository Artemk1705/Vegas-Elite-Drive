import insta from "./media/Instagram.png";
import face from "./media/Facebook.png";
import email from "./media/email.png";
import phone from "./media/phone.png";
import Logo from "./media/logo.jpeg";

export default function Contact() {
  return (
    <div className="footer_block">
      <div className="footer_container">
        <div className="icons_container">
          <a href="">
            <img src={insta} alt="" className="contact_icon" />
          </a>
          <a href="">
            <img src={face} alt="" className="contact_icon" />
          </a>
          <img src={Logo} alt="Logo" className="nav_logo_pic" />
          <a href="">
            <img src={email} alt="" className="contact_icon" />
          </a>
          <a href="">
            <img src={phone} alt="tel:+13238990948" className="contact_icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
