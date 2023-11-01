import React from "react";

const cardStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  fontSize: "1.5rem",
  margin: "0",
};

const textStyle = {
  fontSize: "1rem",
  color: "#666",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "background-color 0.3s",
};

const ClubCard = ({ club, onJoinClub, onLeaveClub }) => {
  const { ClubID, Genre, Name, Description, Avatar, Members, Posts } = club;

  return (
    <div style={cardStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Avatar} alt="Club Avatar" style={{ width: "50px", height: "50px", marginRight: "16px" }} />
        <h2 style={titleStyle}>{Name}</h2>
      </div>
      <p style={textStyle}>Genre: {Genre}</p>
      <p style={textStyle}>Description: {Description}</p>
      <p style={textStyle}>Members:</p>
      <div style={{ display: "flex" }}>
        {Members.map((member, index) => (
          <img key={index} src={member.Avatar} alt={member.Name} style={{ width: "40px", height: "40px", marginRight: "8px" }} />
        ))}
      </div>
      <p style={textStyle}>Posts:</p>
      {Posts.map((post, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          <p style={textStyle}>{post.Title}</p>
          <p style={textStyle}>{post.Content}</p>
        </div>
      ))}
      <div>
        <button style={buttonStyle} onClick={() => onJoinClub(ClubID)}>
          Join Club
        </button>
        <button style={buttonStyle} onClick={() => onLeaveClub(ClubID)}>
          Leave Club
        </button>
      </div>
    </div>
  );
};

export default ClubCard;
