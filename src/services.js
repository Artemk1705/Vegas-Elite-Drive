import React, { useState } from "react";
import flight from "./media/flight.jpeg";
import groups from "./media/groups.jpeg";
import events from "./media/event.jpeg";
import spec from "./media/Scec.jpeg";

export default function Services() {
  const [isSpanVisible, setIsSpanVisible] = useState(false);

  const toggleSpanVisibility = () => {
    setIsSpanVisible(!isSpanVisible);
  };

  return (
    <div className="serv_block">
      <h2 className="serv_title">SERVICES</h2>
      <div className="serv_container">
        <div className="serv_card_block">
          <div className="serv_card">
            <img src={flight} alt="Airport" className="serv_card_pic" />
            <div className="serv_text">
              <h3 className="serv_card_title">Airport Special</h3>
              <p className="serv_card_par">
                Experience seamless and stress-free travel to and from the
                airport with our Airport Special service. Enjoy timely pickups,
                comfortable rides, and assistance with your luggage to ensure
                your journey begins and ends on a high note. Ideal for business
                travelers and vacationers alike.
              </p>
            </div>
          </div>
        </div>

        <div className="serv_card_block">
          <div className="serv_card">
            <img src={groups} alt="Groups" className="serv_card_pic" />
            <div className="serv_text">
              <h3 className="serv_card_title">Groups</h3>
              <p className="serv_card_par">
                Group travel made easy and luxurious. Our group transport
                service offers spacious and accommodating vehicles perfect for
                family reunions, corporate retreats, or any group outing. Travel
                together in comfort and style, without the hassle of
                coordinating multiple rides.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="serv_container">
        <div className="serv_card_block">
          <div className="serv_card">
            <img src={events} alt="Events" className="serv_card_pic" />
            <div className="serv_text">
              <h3 className="serv_card_title">Events</h3>
              <p className="serv_card_par">
                Add a touch of elegance and convenience to any event with our
                dedicated transport services. Whether it's a conference,
                concert, or sporting event, we provide punctual and reliable
                transportation to ensure you never miss a moment of the action.
              </p>
            </div>
          </div>
        </div>

        <div className="serv_card_block">
          <div className="serv_card">
            <img src={spec} alt="Holiday events" className="serv_card_pic" />
            <div className="serv_text">
              <h3 className="serv_card_title">Holiday events</h3>
              <p className="serv_card_par">
                Celebrate the holidays with our special event transportation.
                Perfect for festive gatherings, holiday tours, or winter
                weddings. Our service guarantees that you and your guests arrive
                in comfort and spirit, making your holiday event even more
                magical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
