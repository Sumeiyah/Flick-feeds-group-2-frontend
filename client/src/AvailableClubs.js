import React, { useState, useEffect } from "react";
import { } from "react-router-dom";
import ClubCard from "./ClubCard";

function AvailableClubs() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate joining and leaving clubs for now
  const joinClub = (clubID) => {
    // Implement your join club logic here
    console.log(`Joined club with ID: ${clubID}`);
  };

  const leaveClub = (clubID) => {
    // Implement your leave club logic here
    console.log(`Left club with ID: ${clubID}`);
  };

  useEffect(() => {
    async function fetchClubs() {
      try {
        const response = await fetch("https://flickfeeds-602d4f3e68d7.herokuapp.com/clubs");
        if (!response.ok) {
          throw new Error("Failed to fetch clubs");
        }

        const parsedClubs = await response.json();
        console.log(parsedClubs);

        if (!Array.isArray(parsedClubs.clubs)) {
          throw new Error("Clubs data is not an array");
        }

        setClubs(parsedClubs.clubs);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchClubs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Available Clubs</h1>
      <div className="club-list">
        {clubs.map((club) => (
          <ClubCard
            key={club.ClubID}
            club={club}
            onJoinClub={joinClub}
            onLeaveClub={leaveClub}
          />
        ))}
      </div>
    </div>
  );
}

export default AvailableClubs;
