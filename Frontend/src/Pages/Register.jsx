import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import "./Register.css";

const eventOptions = {
  Powerlifting: {
    Men: [
      "Class up to 58.00 kg",
      "Class from 58.00 kg up to 65.00 kg",
      "Class from 65.00 kg up to 73.00 kg",
      "Class from 73.00 kg up to 81.00 kg",
      "Class from 81.00 kg+",
    ],
    Women: [
      "Class up to 52.00 kg",
      "Class from 52.00 kg up to 57.00 kg",
      "Class from 57.00 kg up to 63.00 kg",
      "Class from 63.00 kg up to 72.00 kg",
      "Class from 72.00 kg+",
    ],
  },
  Athletics: {
    Men: [
      "100m",
      "200m",
      "400m",
      "800m",
      "1500m",
      "5000m",
      "4*100m Relay",
      "4*400m Relay",
      "Long Jump",
      "Triple Jump",
      "Shot Put",
      "Discus Throw",
      "Hammer Throw",
      "Javelin Throw",
    ],
    Women: [
      "100m",
      "200m",
      "400m",
      "800m",
      "1500m",
      "4*100m Relay",
      "Long Jump",
      "Shot Put",
      "Discus Throw",
      "Javelin Throw",
    ],
  },
  Aquatics: {
    Men: [
      "50m Freestyle",
      "50m Backstroke",
      "50m Butterfly",
      "50m Breaststroke",
      "100m Freestyle",
      "4x50m Freestyle Relay",
      "Water Polo"
    ],
    Women: [
      "50m Freestyle",
      "50m Backstroke",
      "50m Butterfly",
      "50m Breaststroke",
    ],
  },
};


const sportsList = [
  { name: "Aquatics", image: "https://source.unsplash.com/300x200/?swimming" },
  { name: "Athletics", image: "https://source.unsplash.com/300x200/?running" },
  { name: "Badminton", image: "https://source.unsplash.com/300x200/?badminton" },
  { name: "Basketball", image: "https://source.unsplash.com/300x200/?basketball" },
  { name: "Chess", image: "https://source.unsplash.com/300x200/?chess" },
  { name: "Cricket", image: "https://source.unsplash.com/300x200/?cricket" },
  { name: "Football", image: "https://source.unsplash.com/300x200/?football" },
  { name: "Frisbee", image: "https://source.unsplash.com/300x200/?frisbee" },
  { name: "LawnTennis", image: "https://source.unsplash.com/300x200/?tennis" },
  { name: "Powerlifting", image: "https://source.unsplash.com/300x200/?powerlifting" },
  { name: "Squash", image: "https://source.unsplash.com/300x200/?squash" },
  { name: "TableTennis", image: "https://source.unsplash.com/300x200/?tabletennis" },
  { name: "Volleyball", image: "../assets/individualSport/58.png" }
];

const Register = () => {
  const { register, handleSubmit, watch } = useForm();
  const [teamSize, setTeamSize] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { sport } = useParams();
  const navigate = useNavigate();

  // Google Sheets API endpoint for each sport
  // const sportSheetsAPI = {
  //   Aquatics: "",
  //   Athletics: "",
  //   Badminton: "",
  //   Basketball: "https://script.google.com/macros/s/AKfycbyqUq4v6A_Y5mWdMXLrxYd6BFXRaE5-txxuRvn9a_7klLsSgLNwybyDZ3keW8KHFG9HeQ/exec",
  //   Chess: "",
  //   Cricket: "https://script.google.com/macros/s/AKfycbwz-2m5Yatp8W_DVj330YNi0yMqqqeg0wTpsOtROTYdtVsJFIwBRsAuqFDrN60Z_zlPKA/exec",
  //   Football: "https://script.google.com/macros/s/AKfycbwz-2m5Yatp8W_DVj330YNi0yMqqqeg0wTpsOtROTYdtVsJFIwBRsAuqFDrN60Z_zlPKA/exec",
  //   Frisbee: "https://docs.google.com/spreadsheets/d/basketball_sheet_id",
  //   LawnTennis: "https://docs.google.com/spreadsheets/d/aquatics_sheet_id",
  //   Powerlifting: "",
  //   Squash: "",
  //   TableTennis: "",
  //   Volleyball: "",
  // };
  const sportSheetsAPI = "https://script.google.com/macros/s/AKfycbzV27MB4AqxNXMSTkItoFdko3p6H5PPTg5sBAS2LgXUsKW_HgDW9QdKhhfXRXL_TnYPwQ/exec"

  const [isSubmitting, setIsSubmitting] = useState(false);
  const gender = watch("gender");
  const onSubmit = async (data) => {
    if (isSubmitting) return; // Prevent multiple clicks

    setIsSubmitting(true); // Disable button on first click
    const formattedData = {
      sport: sport,
      batch: data.batch,
      gender: data.gender,
      // teamName: data.teamName,
      teamSize: data.teamSize,
      captain: data.captain,
      captainNumber: data.captainNumber,
      ...(sport in eventOptions && {
        gender: data.gender,  // Include gender for specific sports
        event: data.event,    // Include event for specific sports
      }),
      members: Array.from({ length: teamSize }, (_, i) => ({
        name: data[`member${i + 1}Name`],
        rollNumber: data[`member${i + 1}Roll`],
      })),
    };


    try {
      const response = await fetch(sportSheetsAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
        mode: "no-cors", // Keeping no-cors
      });

      // 🚀 Force success since we can't read the response
      setSubmitted(true);

    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Submission failed. Please try again.");
    }
  };

  // mixedSport = ["Frisbee", "Chess"];



  return (
    <div className="register-container">
      {submitted ? (
        <div className="success-message">
          <h3 color="black">✅ Successfully registered for {sport}!</h3>
          <button onClick={() => navigate("/")} className="home-btn">
            Back to Home
          </button>
        </div>
      ) : (
        <>
          <h3 className="form-title">Register for {sport}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Batch:</label>
            <select {...register("batch")} className="form-input" required>
              <option value="">Select Batch</option>
              <option>B.Tech'21</option>
              <option>B.Tech'22</option>
              <option>B.Tech'23</option>
              <option>B.Tech'24</option>
              <option>Master'23 (MA, M.Tech, M.Sc.)</option>
              <option>Master'24 (MA, M.Tech, M.Sc.)</option>
              <option>PhD</option>
            </select>


            {(sport!=="Frisbee") && (sport!=="Chess") && !(sport in eventOptions) && (
              <>
                <label>Gender:</label>
                <select {...register("gender")} className="form-input" required>
                  <option value="">Select Gender</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </select>
              </>
            )}
  

            {sport in eventOptions && (
              <>
                <label>Gender:</label>
                <select {...register("gender")} className="form-input" required>
                  <option value="">Select Gender</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </select>
              </>
            )

            }

            {sport in eventOptions && gender && eventOptions[sport][gender] && (
              <>
                <label>Select Event:</label>
                <select {...register("event")} className="form-input" required>
                  <option value="">Select Event</option>
                  {eventOptions[sport][gender].map((event, index) => (
                    <option key={index} value={event}>{event}</option>
                  ))}
                </select>
              </>
            )}

            {/* <label>Team Name:</label>
            <input {...register("teamName")} className="form-input" required /> */}

            <label>Team Size:</label>
            {/* <input
              type="number"
              className="form-input"
              {...register("teamSize")}
              value={teamSize}
              min="1"
              onChange={(e) => setTeamSize(Math.max(1, parseInt(e.target.value) || 1))}
            /> */}
            <input
              type="number"
              className="form-input"
              {...register("teamSize")}
              value={teamSize === null ? "" : teamSize} // Allow empty input
              min="1"
              onChange={(e) => {
                const value = e.target.value.trim();
                if (value === "") {
                  setTeamSize(null); // Allow empty input for backspacing
                } else {
                  const num = parseInt(value, 10);
                  if (!isNaN(num) && num > 0) {
                    setTeamSize(num);
                  }
                }
              }}
              onBlur={() => {
                if (teamSize === null) {
                  setTeamSize(1); // Reset to 1 if left empty
                }
              }}
            />


            <label>Captain Name:</label>
            <input {...register("captain")} className="form-input" required />

            <label>Captain Phone Number:</label>
            <input type="tel" {...register("captainNumber")} className="form-input" required />

            {/* <label>Vice Captain:</label>
            <input {...register("viceCaptain")} className="form-input" />

            <label>Vice Captain Number:</label>
            <input type="tel" {...register("viceCaptainNumber")} className="form-input" /> */}

            <div className="members-grid">
              {[...Array(teamSize)].map((_, i) => (
                <div key={i} className="member-input">
                  <label>Member {i + 1} Name:</label>
                  <input {...register(`member${i + 1}Name`)} className="form-input" required />
                  <label>Roll Number:</label>
                  <input {...register(`member${i + 1}Roll`)} className="form-input" required />
                </div>
              ))}
            </div>

            {/* <label>Remarks:</label>
            <textarea {...register("remarks")} className="form-input" rows="3" placeholder="Any additional comments"></textarea> */}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

          </form>
        </>
      )}
    </div>
  );
};

export default Register;
