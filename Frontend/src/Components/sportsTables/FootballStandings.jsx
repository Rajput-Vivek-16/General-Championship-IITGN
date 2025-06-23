import React from "react";
import "../../Pages/Standings.css";

const FootballStandings = () => {
  const columns = ["Batch", "Played", "Wins", "Draws", "Losses", "GF", "GA", "GD", "Points"];

  const menTeamsA = [
    { batch: `B.Tech 2nd year`, played: 2, wins: 2, draws: 0, losses: 0, goalsFor: 6, goalsAgainst: 0 },
    { batch: "B.Tech'24", played: 2, wins: 0, draws: 1, losses: 1, goalsFor: 1, goalsAgainst: 4 },
    { batch: "Master'23", played: 2, wins: 0, draws: 0, losses: 2, goalsFor: 1, goalsAgainst: 5 },
    { batch: "PhD", played: 2, wins: 1, draws: 1, losses: 0, goalsFor: 3, goalsAgainst: 2 },
  ];

  const menTeamsB = [
    { batch: "B.Tech'21", played: 2, wins: 2, draws: 0, losses: 0, goalsFor: 4, goalsAgainst: 0 },
    { batch: "B.Tech'22", played: 2, wins: 0, draws: 0, losses: 2, goalsFor: 1, goalsAgainst: 7 },
    { batch: "Master'24", played: 2, wins: 1, draws: 0, losses: 1, goalsFor: 4, goalsAgainst: 2 },
  ];

  const womenTeamsA = [
    { batch: "B.Tech'23", played: 1, wins: 1, draws: 0, losses: 0, goalsFor: 1, goalsAgainst: 0 },
    { batch: "Master'24", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
    { batch: "PhD", played: 1, wins: 0, draws: 0, losses: 1, goalsFor: 0, goalsAgainst: 1 },
  ];
  const womenTeamsB = [
    { batch: "B.Tech'21", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
    { batch: "B.Tech'22", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
    { batch: "B.Tech'24", played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
  ];

  const calculatePoints = (team) => team.wins * 3 + team.draws;
  const calculateGoalDifference = (team) => team.goalsFor - team.goalsAgainst;

  const addDerivedStats = (teams) =>
    teams.map((team) => ({
      ...team,
      goalDifference: calculateGoalDifference(team),
      points: calculatePoints(team),
    }));

  const sortedMenTeamsA = addDerivedStats(menTeamsA).sort(
    (a, b) => b.points - a.points || b.goalDifference - a.goalDifference
  );

  const sortedMenTeamsB = addDerivedStats(menTeamsB).sort(
    (a, b) => b.points - a.points || b.goalDifference - a.goalDifference
  );

  const sortedWomenTeamsA = addDerivedStats(womenTeamsA).sort(
    (a, b) => b.points - a.points || b.goalDifference - a.goalDifference
  );

  const sortedWomenTeamsB = addDerivedStats(womenTeamsB).sort(
    (a, b) => b.points - a.points || b.goalDifference - a.goalDifference
  );

  const renderTable = (title, teams) => (
    <div key={title} className="standings-table">
      <h3>{title}</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} >
                {columns.map((col, colIndex) => {
                  let key;
                  switch (col) {
                    case "Batch":
                      key = "batch";
                      break;
                    case "GF":
                      key = "goalsFor";
                      break;
                    case "GA":
                      key = "goalsAgainst";
                      break;
                    case "GD":
                      key = "goalDifference";
                      break;
                    case "Points":
                      key = "points";
                      break;
                    default:
                      key = col.toLowerCase();
                  }
                  return <td key={colIndex}>{team[key]}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="standings-container">
      <h2>Football Standings</h2>
      <div className="standings">
        {renderTable("Men's Pool A Standings", sortedMenTeamsA)}
        {renderTable("Men's Pool B Standings", sortedMenTeamsB)}
        {renderTable("Women's Pool A Standings", sortedWomenTeamsA)}
        {renderTable("Women's Pool B Standings", sortedWomenTeamsB)}
      </div>
    </div>
  );
};

export default FootballStandings;
