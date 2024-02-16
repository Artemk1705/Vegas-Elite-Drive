import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import cadilac from "./media/cadilac.WEBP";
import cadilacSalon from "./media/cadilac-salon.WEBP";
import lincoln from "./media/lincoln.WEBP";
import lincolnSalon from "./media/lincoln-salon.WEBP";
import sprinter from "./media/sprinter.WEBP";
import sprinterSalon from "./media/spinter-salon.WEBP";
import tesla from "./media/tesla.WEBP";
import teslaSalon from "./media/tesal-salon.WEBP";

const styles = {
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 1%, rgba(249, 249, 249, 0), rgba(0, 0, 0, 0) 99%)",
    pointerEvents: "none",
  },
};

const SwiperComp = () => {
  return (
    <Swiper
      modules={[Scrollbar, Autoplay, Pagination]}
      className="swiper_cont"
      loop={true}
      spaceBetween={1}
      slidesPerView={1}
      centeredSlides={true}
      navigation={false}
      scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
        type: "progressbar",
      }}
      speed={700}
    >
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <img src={cadilac} alt="Cadilac" className="picture_swiper" />
            <div style={styles.gradientOverlay}></div>
            <div className="card_container">
              <h2 className="card_title">Cadillac</h2>
              <h2 className="card_title">Escalade</h2>
              <h4 className="price_list">95$/hr</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <img src={cadilacSalon} alt="Cadilac" className="picture_swiper" />
            <div style={styles.gradientOverlay}></div>
            <div className="card_container">
              <p className="card_par">
                Exceptional Comfort. Cadillac Escalade offers outstanding
                comfort for all occupants with luxuriously adjustable, heated
                and ventilated seats and a spacious interior that makes long
                trips enjoyable and relaxing.
              </p>
              <p className="card_par">
                Status and Elegance. The Escalade is a symbol of status and
                luxury. Choosing this car for special events or business
                meetings will emphasize refined taste and the desire for the
                highest quality.
              </p>
              <p className="card_par">
                Superior Safety. With advanced safety and driver assistance
                systems, Escalade provides a safe and comfortable ride. This
                includes collision warning systems, blind spot monitoring,
                adaptive cruise control and more.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <img src={lincoln} alt="Lincoln" className="picture_swiper" />
            <div style={styles.gradientOverlay}></div>
            <div className="card_container">
              <h2 className="card_title">Lincoln</h2>
              <h2 className="card_title">MKT</h2>
              <h4 className="price_list">75$/hr</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <div className="card">
            <img src={lincolnSalon} alt="Lincoln" className="picture_swiper" />
            <div style={styles.gradientOverlay}></div>
            <div className="card_container">
              <p className="card_par">
                Spacious and Luxurious Interior. The MKT is renowned for its
                spacious interior, able to comfortably seat up to seven
                passengers, with a third row of seats available for additional
                passengers or increased cargo space. The interior is made of
                high quality materials, emphasizing luxury and style.
              </p>
              <p className="card_par">
                Excellent Comfort. The Lincoln MKT offers outstanding levels of
                comfort with luxurious heated, ventilated, multi-way adjustable
                seats and advanced sound deadening.
              </p>
              <p className="card_par">
                Powerful Driving Performance. With a powerful V6 EcoBoost
                engine, the MKT delivers dynamic performance and effortless
                handling not found in a car of its size. Offering both
                front-wheel drive and all-wheel drive, it is suitable for a
                variety of road conditions.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="swiper-slide">
          <div className="card">
            <img src={sprinter} alt="Sprinter" className="picture_swiper" />
            <div style={styles.gradientOverlay}></div>
            <div className="card_container">
              <h2 className="card_title">Mercedes </h2>
              <h2 className="card_title">Sprinter</h2>
              <h4 className="price_list">120$/hr</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="swiper-slide">
          <div className="card">
            <img
              src={sprinterSalon}
              alt="Sprinter"
              className="picture_swiper"
            />
            <div style={styles.gradientOverlay}></div>
            <div className="card_container">
              <p className="card_par">
                Comfort and space. The 12-passenger Sprinter offers a spacious
                and comfortable interior with ample leg and headroom, making
                long journeys more enjoyable. Air conditioning, comfortable
                seats and lighting settings help create a comfortable atmosphere
                in the cabin.
              </p>
              <p className="card_par">
                Reliability and safety. Mercedes-Benz is known for its high
                standards of quality and reliability. The Sprinter is equipped
                with numerous safety features, including driver assistance
                systems such as lane departure warning, blind spot monitoring
                and automatic emergency braking, to help keep passengers and the
                driver safe.
              </p>
              <p className="card_par">
                Brand and prestige. Mercedes-Benz is associated with premium
                quality, which can enhance the image of a company providing
                transport services. Using Sprinter for customer service can be a
                sign of quality and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="swiper-slide">
          <div className="card">
            <img src={tesla} alt="Tesla" className="picture_swiper" />
            <div style={styles.gradientOverlay}></div>
            <div className="card_container">
              <h2 className="card_title">Tesla</h2>
              <h4 className="price_list">60$/hr</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="swiper-slide">
          <div className="card">
            <img src={teslaSalon} alt="Tesla" className="picture_swiper" />
            <div style={styles.gradientOverlay}></div>
            <div className="card_container">
              <p className="card_par">
                Innovative technologies. Tesla offers advanced technology in
                every vehicle, including an Autopilot system that enables
                semi-autonomous driving and a large touchscreen that serves as
                the control center for most vehicle functions.
              </p>
              <p className="card_par">
                Environmental friendliness. As electric vehicles, Tesla vehicles
                emit no tailpipe emissions, making them an ideal choice for
                environmentally conscious customers looking to reduce their
                carbon footprint.
              </p>
              <p className="card_par">
                Security. Tesla vehicles regularly score high in safety tests
                due to their design, including a low center of gravity by
                placing the battery in the floor, which reduces the risk of
                rollovers, and advanced safety and driver assistance systems.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp;
