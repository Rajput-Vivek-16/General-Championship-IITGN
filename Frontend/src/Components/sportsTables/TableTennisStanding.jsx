import React from "react";
import "../../Pages/Standings.css";

const TableTennisStandings = () => {
  const columns = ["Batch", "Played", "Wins", "Losses", "Points"];

  // Men's Pool A
  const menPoolATeams = [
    { batch: "B.Tech'24", played: 0, wins: 0,  losses: 0 },
    { batch: "B.Tech'21", played: 0, wins: 0,  losses: 0 },
    { batch: "Master'24", played: 0, wins: 0,  losses: 0 },
    { batch: "PhD", played: 0, wins: 0,  losses: 0 },
  ];

  // Men's Pool B
  const menPoolBTeams = [
    { batch: "B.Tech'22", played: 0, wins: 0,  losses: 0 },
    { batch: "B.Tech'23", played: 0, wins: 0,  losses: 0 },
    { batch: "Master'23", played: 0, wins: 0,  losses: 0 },
  ];

  // Women's Pool A
  const womenPoolATeams = [
    { batch: "B.Tech'22", played: 0, wins: 0,  losses: 0 },
    { batch: "B.Tech'21", played: 0, wins: 0,  losses: 0 },
    { batch: "Master'23", played: 0, wins: 0,  losses: 0 },
    { batch: "Master'24", played: 0, wins: 0,  losses: 0 },
  ];

  // Women's Pool B
  const womenPoolBTeams = [
    { batch: "B.Tech'24", played: 0, wins: 0,  losses: 0 },
    { batch: "B.Tech'23", played: 0, wins: 0,  losses: 0 },
    { batch: "PHD", played: 0, wins: 0,  losses: 0 },
  ];

  const calculatePoints = (team) => team.wins * 3;

  const sortTeams = (teams) => {
    return teams
      .map((team) => ({
        ...team,
        points: calculatePoints(team),
      }))
      .sort((a, b) => b.points - a.points);
  };

  const dataMap = {
    "Men's Pool A": sortTeams(menPoolATeams),
    "Men's Pool B": sortTeams(menPoolBTeams),
    "Women's Pool A": sortTeams(womenPoolATeams),
    "Women's Pool B": sortTeams(womenPoolBTeams),
  };

  return (
    <div className="standings-container">
      <h2>TableTennis Standings</h2>
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
                      <td>{team.batch}</td>
                      <td>{team.played}</td>
                      <td>{team.wins}</td>
                      <td>{team.losses}</td>
                      <td>{team.points}</td>
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

export default TableTennisStandings;