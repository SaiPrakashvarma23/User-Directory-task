import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaCity, FaArrowRight } from "react-icons/fa";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h3 className="card-title">{user.name}</h3>
        <p className="card-details">
          <FaEnvelope className="icon" /> {user.email}
        </p>
        <p className="card-details">
          <FaCity className="icon-style" /> {user.address.city}
        </p>
        <Link to={`/user/${user.id}`} className="view-more-link">
          View Details <FaArrowRight className="arrow-style" />
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
