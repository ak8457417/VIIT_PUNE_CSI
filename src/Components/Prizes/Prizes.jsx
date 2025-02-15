import React from "react";
import "./Prizes.css";
import gold from '../../assets/gold.png'
import silver from '../../assets/silver-r.png'
import bronze from '../../assets/bronze.png'
import {useReward} from "react-rewards";

const tiers = [
    {
        name: "1st Runner-Up",
        logo: silver,
        price: "8,500",
        features: ["The First Runner-Up will receive a cash prize of INR 8,500."],
    },
    {
        name: "Winner",
        logo: gold,
        price: "10,500",
        features: ["The winner will receive a cash prize of INR 10,500."],
    },
    {
        name: "2nd Runner-Up",
        logo: bronze,
        price: "6,000",
        features: ["The Second Runner-Up will receive a cash prize of INR 6,000."],
    },
];

const Prizes = () => {
    return (
        <div className="prizes" id="prizes">
            <div className="prizes-title">
                <h1>Prizes</h1>
            </div>
            <div className="prizes-container">
                {tiers.map((tier, index) => {
                    const { reward, isAnimating } = useReward(`rewardId-${index}`, "confetti");
                    return (
                        <div key={tier.name} className="prize-card" onMouseEnter={reward}>
                            <span id={`rewardId-${index}`} />
                            <img src={tier.logo} alt={tier.name} className="prize-logo" />
                            <h3>{tier.name}</h3>
                            <h2 className="prize-price">&#8377; {tier.price}</h2>
                            <ul className="prize-features">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx}>✔️ {feature}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Prizes;