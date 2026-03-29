import React from "react";
import SportsStandings from "../Components/SportsStandings";
import "./Standings.css";

const Standings = () => {
  const columns = [
    "Batch", "Athletics", "Badminton", "Basketball", "Chess", "Cricket", "Football", "Frisbee",
    "Lawn Tennis", "Powerlifting", "Squash", "Swimming", "Table Tennis", "Volleyball", "Waterpolo", "Penalty", "Total"
  ];

  const columnKeyMap = {
    "Batch": "batch",
    "Athletics": "athletics",
    "Badminton": "badminton",
    "Basketball": "basketball",
    "Chess": "chess",
    "Cricket": "cricket",
    "Football": "football",
    "Frisbee": "frisbee",
    "Lawn Tennis": "lawnTennis",
    "Powerlifting": "powerlifting",
    "Squash": "squash",
    "Swimming": "swimming",
    "Table Tennis": "tableTennis",
    "Volleyball": "volleyball",
    "Waterpolo": "waterpolo",
    "Penalty": "penalty",
    "Total": "total",
  };
  

  const calculateTotal = (entry) => {
    return columns.slice(1, -1).reduce((sum, col) => sum + (entry[col.toLowerCase()] || 0), 0);
  };

  const menData = [
    { batch: "B.Tech'22", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "B.Tech'23", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "B.Tech'24", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "B.Tech'25", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "bye" },
    { batch: "Master'24", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "Master'25", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "PhD", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
  ].map(entry => ({ ...entry, total: calculateTotal(entry) }));
  const womenData = [
    { batch: "B.Tech'22", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "B.Tech'23", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "B.Tech'24", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "B.Tech'25", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "not bye" },
    { batch: "Master'24", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "Master'25", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
    { batch: "PhD", swimming: 0, waterpolo: 0, athletics: 0, badminton: 0, basketball: 0, cricket: 0, football: 0, lawnTennis: 0, powerlifting: 0, squash: 0, tableTennis: 0, volleyball: 0, penalty: 0, total: 0, remark: "" },
  ].map(entry => ({ ...entry, total: calculateTotal(entry) }));

  const manualData = {
    "B.Tech'22": { chess: 0, frisbee: 0 },
    "B.Tech'23": { chess: 0, frisbee: 0 },
    "B.Tech'24": { chess: 0, frisbee: 0 },
    "B.Tech'25": { chess: 0, frisbee: 0 },
    "Master'24": { chess: 0, frisbee: 0 },
    "Master'25": { chess: 0, frisbee: 0 },
    "PhD":       { chess: 0, frisbee: 0 }
  };
  

  const overallData = menData.map(menItem => {
    const womenItem = womenData.find(w => w.batch === menItem.batch) || {};
    const merged = { batch: menItem.batch };

    for (const key in menItem) {
      if (key !== "batch" && key !== "remark") {
        merged[key] = (menItem[key] || 0) + (womenItem[key] || 0);
      }
    }

  merged.chess = manualData[menItem.batch]?.chess || 0;
  merged.frisbee = manualData[menItem.batch]?.frisbee || 0;

    merged.total = Object.keys(merged).reduce((sum, key) => {
      if (!["batch", "remark", "total"].includes(key)) {
        sum += merged[key];
      }
      return sum;
    }, 0);

    return merged;
  }).sort((a, b) => b.total - a.total);

  const sortedMenData = [...menData].sort((a, b) => b.total - a.total);
  const sortedWomenData = [...womenData].sort((a, b) => b.total - a.total);

  const dataMap = {
    "Overall": overallData,
    "Men": sortedMenData,
    "Women": sortedWomenData,
  };


  return (
    <div className="standings-container">
      {/* <div className="standings-container">
        <SportsStandings />
      </div> */}
      {/* <h2>General Championship Standings</h2> */}
      <div className="standings">
        {["Overall", "Men", "Women"].map((category) => (
          <div key={category} className="standings-table">
            <h3>{category} General Championship</h3>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    {columns.map((col, index) => (
                      ((category === "Men" || category === "Women") && (col === "Chess" || col === "Frisbee"))
                        ? null
                        : <th key={index}>{col}</th>
                    ))}

                  </tr>
                </thead>
                <tbody>
                  {dataMap[category].map((item, index) => (
                    <tr key={index}>
                      <td>{item.batch}</td>
                      {columns.slice(1, -1).map((col, idx) => (
                        ((category === "Men" || category === "Women") && (col === "Chess" || col === "Frisbee"))
                          ? null
                          : <td key={idx}>{item[columnKeyMap[col]] === 0 ? "" : item[columnKeyMap[col]]}</td>
                      ))}
                      <td>{item.total === 0 ? "" : item.total}</td>
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

export default Standings;