import React from "react";
import "../../Pages/Standings.css";

const FrisbeeStandings = () => {
  const columns = ["Batch", "Matches", "Wins", "Losses", "Points"];

  const poolATeams = [
    { batch: "B.Tech'22", matches: 0, wins: 0, losses: 0, points: 0 },
    { batch: "B.Tech'24", matches: 0, wins: 0, losses: 0, points: 0 },
    { batch: "B.Tech'21", matches: 0, wins: 0, losses: 0, points: 0 },
    { batch: "Master'24", matches: 0, wins: 0, losses: 0, points: 0 },
  ];

  const poolBTeams = [
    { batch: "B.Tech'23", matches: 0, wins: 0, losses: 0, points: 0 },
    { batch: "PHD", matches: 0, wins: 0, losses: 0, points: 0 },
    { batch: "Master'23", matches: 0, wins: 0, losses: 0, points: 0 },
  ];

  // Sorting the teams by Points (descending)
  const sortedPoolATeams = poolATeams
    .sort((a, b) => b.points - a.points);

  const sortedPoolBTeams = poolBTeams
    .sort((a, b) => b.points - a.points);

  const dataMap = {
    "Pool A": sortedPoolATeams,
    "Pool B": sortedPoolBTeams,
  };

  return (
    <div className="standings-container">
      <h2>Frisbee Standings</h2>
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

export default FrisbeeStandings;