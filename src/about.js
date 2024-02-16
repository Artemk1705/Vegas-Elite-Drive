import Logo from "./media/logo.jpeg";

export default function About() {
  return (
    <div className="about_block">
      <div className="frame">
        <div className="frame_2">
          <h2 className="about_title">ABOUT US</h2>
          <img src={Logo} alt="Logo" className="about_logo" />
          <p className="about_par">
            Since our founding in 2005, Vegas Elite Drive has set new standards
            in the luxury transportation industry in Las Vegas. Our mission is
            to offer unparalleled service, comfort, and style, accompanying you
            to any destination in this dazzling city. We pride ourselves on our
            exceptional fleet of vehicles and a commitment to excellence in
            customer service.
          </p>
          <h3 className="about_title_par">Our Achievements</h3>
          <p className="about_par">
            15+ Years in the Market: Our extensive experience in luxury
            transport allows us to provide a service that meets the highest
            expectations. We know Las Vegas like no one else and guarantee that
            your journey will be as thrilling as the city itself.
          </p>
          <p className="about_par">
            Exceptional Reviews: Our reputation speaks for itself. Thousands of
            satisfied clients have left glowing reviews of our service,
            affirming our dedication to the highest quality of service.
          </p>
          <p className="about_par">
            Impeccable Quality: Every vehicle in our fleet represents the
            pinnacle of luxury and technology, maintained in pristine condition
            and cleanliness. We offer a wide selection of vehicles, from elegant
            limousines to spacious SUVs, each equipped with the latest in
            technology for your comfort and enjoyment.
          </p>
          <h3 className="about_title_par">Our Mission and Values</h3>
          <p className="about_par">
            At Vegas Elite Drive, our mission extends far beyond ordinary
            transport. We strive to make each of your journeys an unforgettable
            experience, starting from the moment you book with us and not ending
            until you reach your destination with a smile on your face. Our team
            of professionals is always ready to exceed your expectations,
            providing personalized service that reflects the true luxury and
            hospitality of Las Vegas.
          </p>
          <p className="about_par">
            We believe that true luxury is not just in the quality of
            transportation but in the attention to detail and personalized
            approach to each client. Vegas Elite Drive is dedicated to creating
            an atmosphere of exclusivity and comfort that makes your journey as
            impressive as the destination itself.
          </p>
          <p className="about_par">
            Your adventure in Las Vegas starts here, with Vegas Elite Drive.
            Welcome aboard.
          </p>
        </div>
      </div>
    </div>
  );
}
