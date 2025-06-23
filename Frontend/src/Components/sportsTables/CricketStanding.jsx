import React from "react";
import "../../Pages/Standings.css";

const CricketStandings = () => {
  const columns = ["Batch", "Matches", "Wins", "Losses", "NRR", "Points"];

  // Men's Pool A
  const menPoolATeams = [
    { batch: "B.Tech'21", matches: 3, wins: 2, losses: 1, nrr: 1.173, points: 4 },
    { batch: "B.Tech'22", matches: 3, wins: 2, losses: 1, nrr: 0.206, points: 4 },
    { batch: "Master'23", matches: 3, wins: 2, losses: 1, nrr: 1.139, points: 4 },
    { batch: "Master'24", matches: 3, wins: 0, losses: 3, nrr: -2.446, points: 0 },
  ];

  // Men's Pool B
  const menPoolBTeams = [
    { batch: "B.Tech'23", matches: 2, wins: 2, losses: 0, nrr: 7.309, points: 4 },
    { batch: "B.Tech'24", matches: 2, wins: 0, losses: 2, nrr: -5.201, points: 0 },
    { batch: "PHD", matches: 2, wins: 1, losses: 1, nrr: -1.838, points: 2 },
  ];

  // Women's Pool A
  const womenPoolATeams = [
    { batch: "B.Tech'21", matches: 2, wins: 0, losses: 2, nrr: -1.333, points: 0 },
    { batch: "B.Tech'22", matches: 2, wins: 1, losses: 1, nrr: -3.900, points: 2 },
    { batch: "PHD", matches: 2, wins: 2, losses: 0, nrr: 5.444, points: 4 },
  ];

  // Women's Pool B
  const womenPoolBTeams = [
    { batch: "B.Tech'23", matches: 1, wins: 0, losses: 1, nrr: -2.467, points: 0 },
    { batch: "B.Tech'24", matches: 1, wins: 1, losses: 0, nrr: 2.467, points: 2 },
  ];

  // Sort function for all pools
  const sortTeams = (teams) => {
    return [...teams].sort((a, b) => b.points - a.points || b.nrr - a.nrr);
  };

  const dataMap = {
    "Men's Pool A": sortTeams(menPoolATeams),
    "Men's Pool B": sortTeams(menPoolBTeams),
    "Women's Pool A": sortTeams(womenPoolATeams),
    "Women's Pool B": sortTeams(womenPoolBTeams),
  };

  return (
    <div className="standings-container">
      <h2>Cricket Standings</h2>
      <div className="standings">
        {Object.keys(dataMap).map((category) => (
          <div key={category} className="standings-table">
            <h3>{category}</h3>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    {columns.map((col, index) => (
                      <th key={index}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataMap[category].map((team, index) => (
                    <tr key={index}>
                      {columns.map((col, colIndex) => {
                        const key = col.toLowerCase().replace(/ /g, "");
                        return <td key={colIndex}>{team[key]}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketStandings;