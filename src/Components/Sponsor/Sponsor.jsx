import React from "react";
import "./Sponser.css";
import verve from "../../assets/verve.png";

const Sponsor = () => {
  return (
    <div className="sponsor">
      <div className="sponsor-title">
        <h1>Our Sponsors</h1>
      </div>
      <div className="cards-sponsor">
        <div className="sponsor-card">
          <img
            src={
              "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue.svg"
            }
            alt={"unstop"}
          />
        </div>
        <div className="sponsor-card">
          <img src={verve} alt={"verve"} />
        </div>
        <div className="sponsor-card">
          <img src={"/download.png"} alt={"balaji"} />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
