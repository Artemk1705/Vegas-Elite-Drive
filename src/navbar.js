import logo from "./media//logo.jpeg";

export default function Navbar() {
  return (
    <div>
      <div className="nav_block">
        <div className="block_logo">
          <img src={logo} alt="Logo" className="nav_logo_pic" />
          <h1>Vegas Elite Drive</h1>
        </div>
        <div className="nav_container">
          <div className="nav">MAIN</div>
          <div className="nav">OUR FLEET</div>
          <div className="nav">SERVICES</div>
          <div className="nav">ABOUT US</div>
          <div className="nav contact">CONTACT</div>
        </div>
      </div>
    </div>
  );
}
