import React from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // Keep the same CSS but modify for card styling

import Aquatics from '../assets/individualSport/63.png'
import Athletics from '../assets/individualSport/61.png'
import Badminton from '../assets/individualSport/59.png'
import Basketball from '../assets/individualSport/69.png'
import Chess from '../assets/individualSport/66.png'
import Cricket from '../assets/individualSport/60.png'
import Football from '../assets/individualSport/70.png'
import Frisbee from '../assets/individualSport/68.png'
import LawnTennis from '../assets/individualSport/67.png'
import Powerlifting from '../assets/individualSport/65.png'
import Squash from '../assets/individualSport/64.png'
import TableTennis from '../assets/individualSport/62.png'
import Volleyball from '../assets/individualSport/58.png'

const sportsList = [
  { name: "Aquatics", image: Aquatics },
  { name: "Athletics", image: Athletics },
  { name: "Badminton", image: Badminton },  
  { name: "Basketball", image: Basketball },
  { name: "Chess", image: Chess },
  { name: "Cricket", image: Cricket },
  { name: "Football", image: Football },
  { name: "Frisbee", image: Frisbee },
  { name: "Lawn Tennis", image: LawnTennis },
  { name: "Powerlifting", image: Powerlifting },
  { name: "Squash", image: Squash },
  { name: "Table Tennis", image: TableTennis },
  { name: "Volleyball", image: Volleyball }
];

const Sports = () => {
  return (
    <div className="register-container">
      <h2 className="register-title">🏅 Select a Sport</h2>
      <div className="sports-grid">
        {sportsList.map((sport, index) => (
          <Link 
            key={index} 
            to={`/register/${sport.name.replace(/\s+/g, "")}`} 
            className="sport-card" 
            style={{ backgroundImage: `url(${sport.image})` }}
          >
            <div className="sport-name">{sport.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sports;
