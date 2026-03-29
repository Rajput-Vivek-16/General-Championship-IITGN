import React from "react";
import "./Rulebook.css";

const rulebookLinks = {
  "General Championship": "https://drive.google.com/file/d/13SPDnEKmkoDkqK6qMslJNb59CbCVAB7U/view?usp=drive_link",
  Aquatics: "https://docs.google.com/document/d/1WZvy2qmAdomubXViOqx-A07KK508lzhB/edit?usp=drive_link&ouid=114895457753262849716&rtpof=true&sd=true",
  Athletics: "https://docs.google.com/document/d/1RyxexRzOPPKNLpZQ9E6yLiuhCYWe4LCR/edit?usp=drive_link&ouid=114895457753262849716&rtpof=true&sd=true",
  Badminton: "https://docs.google.com/document/d/1kwhgwRvQw_iXdsFMu_HWEBM7ra6N2GX3fLqPSmmg7sc/edit?tab=t.0",
  Basketball: "https://docs.google.com/document/d/1VAqEtzw8v8InP0DG9aHLRxoLeSL1gxZM/edit",
  Chess: "https://docs.google.com/document/d/14hkcPJ6dizYSdARJT7xdiEtKSH66xNCD/edit?rtpof=true&tab=t.0",
  Cricket: "https://docs.google.com/document/d/1Fthk_6rFZh7VByyIGA5ohv9jheC8zrLP/edit",
  Football: "https://docs.google.com/document/d/1UffZdwFqyPuFlR_RitpuhxNrB-Y7DPw7/edit",
  Frisbee: "https://docs.google.com/document/d/19gbir8QJdJOohgtxbXCUukfvBy2ZEzWdRmvUGmMe57w/edit?tab=t.0",
  "Lawn Tennis": "https://docs.google.com/document/d/11gSIqNSgs71lr01bgZaLlWWu7bIzvgvMsgHAfU4Jjek/edit?tab=t.0",
  Powerlifting: "https://docs.google.com/document/d/1R7j1xmLf5_lNvAmP3yM-G7k6-_Q8iH3x/edit",
  Squash: "https://docs.google.com/document/d/1PNMVqbYc5vi84ky0BDUNuw2UadMRtA8m/edit",
  "Table Tennis": "https://docs.google.com/document/d/19dNkvlNgKkYRvLSy8EUdD6WUCsOzr8Or/edit#heading=h.ixbma3jj17z6",
  Volleyball: "https://docs.google.com/document/d/1sUXjAWj-s20hzJYsqDlqLzmlmykPZCl5/edit",
};

const Rulebook = () => {
  return (
    <div className="rulebook-container">
      <h2 className="rulebook-title">Sports Rulebook</h2>
      <ul className="rulebook-list">
        {Object.entries(rulebookLinks).map(([sport, link]) => (
          <a key={sport} href={link} target="_blank" rel="noopener noreferrer" className="rulebook-link">
            <li className="rulebook-item">{sport}</li>
          </a>
        ))}
      </ul>
    </div>

  );
};

export default Rulebook;
