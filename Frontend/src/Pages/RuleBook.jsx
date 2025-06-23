import React from "react";
import "./Rulebook.css";

const rulebookLinks = {
  "General Championship": "https://drive.google.com/file/d/1xmi5mtRuCE0KVfw1dxtrQuukYwiWbIdg/view?usp=drivesdk",
  Aquatics: "https://docs.google.com/document/d/1WZvy2qmAdomubXViOqx-A07KK508lzhB/edit?tab=t.0",
  Athletics: "https://docs.google.com/document/d/163vPs2vPif56XUIA1FfNboJpUwdD9kr5/edit?rtpof=true&tab=t.0",
  Badminton: "https://docs.google.com/document/d/1kwhgwRvQw_iXdsFMu_HWEBM7ra6N2GX3fLqPSmmg7sc/edit?tab=t.0",
  Basketball: "https://docs.google.com/document/d/1VAqEtzw8v8InP0DG9aHLRxoLeSL1gxZM/edit?rtpof=true&tab=t.0",
  Chess: "https://docs.google.com/document/d/14hkcPJ6dizYSdARJT7xdiEtKSH66xNCD/edit?tab=t.0",
  Cricket: "https://docs.google.com/document/d/1Fthk_6rFZh7VByyIGA5ohv9jheC8zrLP/edit?tab=t.0",
  Football: "https://docs.google.com/document/d/1UffZdwFqyPuFlR_RitpuhxNrB-Y7DPw7/edit?tab=t.0",
  Frisbee: "https://docs.google.com/document/d/19gbir8QJdJOohgtxbXCUukfvBy2ZEzWdRmvUGmMe57w/edit?tab=t.0",
  "Lawn Tennis": "https://docs.google.com/document/d/11gSIqNSgs71lr01bgZaLlWWu7bIzvgvMsgHAfU4Jjek/edit?tab=t.0",
  Powerlifting: "https://docs.google.com/document/d/1R7j1xmLf5_lNvAmP3yM-G7k6-_Q8iH3x/edit?tab=t.0",
  Squash: "https://docs.google.com/document/d/1PNMVqbYc5vi84ky0BDUNuw2UadMRtA8m/edit?rtpof=true&tab=t.0",
  "Table Tennis": "https://docs.google.com/document/d/1Yl9cT4ORNwRepDzbtKZz4YklsdOZ64Ca/edit?tab=t.0#heading=h.gjdgxs",
  Volleyball: "https://docs.google.com/document/d/1sUXjAWj-s20hzJYsqDlqLzmlmykPZCl5/edit?tab=t.0",
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
