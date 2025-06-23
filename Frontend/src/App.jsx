import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Sports from "./Pages/Sport.jsx"; // Sport selection page
import Register from "./Pages/Register.jsx";
import Rulebook from "./Pages/RuleBook.jsx";
import Standings from "./Pages/Standings.jsx";
import "./App.css"; // Importing the CSS file

import AquaticsStanding from "./Components/sportsTables/AquaticsStanding.jsx";
import AthleticsStandings from "./Components/sportsTables/AthleticsStanding.jsx";
import BadmintonStanding from "./Components/sportsTables/BadmintonStanding.jsx";
import BasketballStanding from "./Components/sportsTables/BasketballStanding.jsx";
import ChessStanding from "./Components/sportsTables/ChessStanding.jsx";
import FootballStandings from "./Components/sportsTables/FootballStandings.jsx";
import CricketStandings from "./Components/sportsTables/CricketStanding.jsx";
import FrisbeeStanding from "./Components/sportsTables/FrisbeeStanding.jsx";
import LawnTennisStanding from "./Components/sportsTables/LawnTennisStanding.jsx";
import PowerLiftingStanding from "./Components/sportsTables/PowerliftingStanding.jsx";
import SquashStanding from "./Components/sportsTables/SquashStanding.jsx";
import TableTennisStanding from "./Components/sportsTables/TableTennisStanding.jsx";
import VolleyBallStanding from "./Components/sportsTables/VolleyballStanding.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Sports />} />
        <Route path="/register/:sport" element={<Register />} />
        <Route path="/rulebook" element={<Rulebook />} />
        <Route path="/standings" element={<Standings />} />

        <Route path="/standings/aquatics" element={<AquaticsStanding />} />
        <Route path="/standings/athletics" element={<AthleticsStandings />} />
        <Route path="/standings/badminton" element={<BadmintonStanding />} />
        <Route path="/standings/basketball" element={<BasketballStanding />} />
        <Route path="/standings/chess" element={<ChessStanding />} />
        <Route path="/standings/cricket" element={<CricketStandings />} />
        <Route path="/standings/football" element={<FootballStandings />} />
        <Route path="/standings/frisbee" element={<FrisbeeStanding />} />
        <Route path="/standings/lawn-tennis" element={<LawnTennisStanding />} />
        <Route path="/standings/power-lifting" element={<PowerLiftingStanding />} />
        <Route path="/standings/squash" element={<SquashStanding />} />
        <Route path="/standings/table-tennis" element={<TableTennisStanding />} />
        <Route path="/standings/volleyball" element={<VolleyBallStanding />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

