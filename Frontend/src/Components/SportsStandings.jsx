import React from 'react';
import { useNavigate } from 'react-router-dom';

const SportsStandings = () => {
  const navigate = useNavigate();

  const buttons = [
    // { id: 'athletics', label: 'Athletics' },
    // { id: 'aquatics', label: 'Aquatics' },
    { id: 'badminton', label: 'Badminton' },
    { id: 'basketball', label: 'Basketball' },
    { id: 'cricket', label: 'Cricket' },
    { id: 'chess', label: 'Chess' },
    { id: 'football', label: 'Football' },
    { id: 'frisbee', label: 'Frisbee' },
    { id: 'lawn-tennis', label: 'Lawn Tennis' },
    // { id: 'powerlifting', label: 'Powerlifting' },
    { id: 'squash', label: 'Squash' },
    { id: 'table-tennis', label: 'Table Tennis' },
    { id: 'volleyball', label: 'Volleyball' },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Sports Standings</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {buttons.map((button) => (
          <button
            key={button.id}
            className="bg-purple-800 text-white py-4 px-6 rounded font-medium text-center"
            style={{ backgroundColor: '#543191', fontFamily: "'Poppins', system-ui, 'Avenir', 'Helvetica', 'Arial', sans-serif" }}
            onClick={() => navigate(`/standings/${button.id}`)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SportsStandings;
