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
          <a href="https://www.instagram.com/vegaselitedrive/?next=%2Foauth%2Foidc%2F%3Fapp_id%3D17951132926087090%26enable_fb_login%3D0%26redirect_uri%3Dhttps%3A%2F%2Fwww.facebook.com%2Fpage%2Finstagram%2Foidclink%2F%26scope%3Dopenid%2Clinking%26response_type%3Dcode%26state%3D%257B%2522create_business_manager%2522%3Atrue%2C%2522csrf_nonce%2522%3A%2522GOfPdmki21ws4cfW%2522%2C%2522disclosure_type%2522%3A%2522page_to_ig%2522%2C%2522enable_signup_web%2522%3Afalse%2C%2522entry_point%2522%3A%2522profile_plus_settings%2522%2C%2522from%2522%3A%2522profile_plus_settings%2522%2C%2522page_ids%2522%3A%255B%2522226342297234558%2522%255D%2C%2522product_type%2522%3A%2522CASD_BL_BLOCKING_DISCLOSURE%2522%2C%2522redirect_uri%2522%3A%2522https%3A%2F%2Fwww.facebook.com%2Fpage%2Finstagram%2Foidclink%2F%2522%2C%2522require_professional%2522%3Atrue%257D%26logger_id%3D66600a6e-a765-4bad-b318-ba28e1b26140">
            <img src={insta} alt="" className="contact_icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61556380509114">
            <img src={face} alt="Facebook" className="contact_icon" />
          </a>
          <img src={Logo} alt="Logo" className="nav_logo_pic" />
          <a href="mailto:Ellavinarov@gmail.com">
            <img src={email} alt="" className="contact_icon" />
          </a>
          <a href="tel:+13238990948">
            <img src={phone} alt="" className="contact_icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
