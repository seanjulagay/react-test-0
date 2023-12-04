import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/PanelCard.scss";

export default function PanelCard({
  title = "PlaceholderTitle",
  desc = "PlaceholderDesc",
  image,
  hoverImage,
}) {
  let cardBackgroundStyle = {
    backgroundImage: `url(/images/${image})`,
  };

  let elementHoverImage;

  if (hoverImage) {
    elementHoverImage = (
      <img
        src={`/images/${hoverImage}`}
        alt=""
        className="panel-card-hover-image"
      />
    );
  }

  return (
    <div className="panel-card">
      <div className="panel-card-container" style={cardBackgroundStyle}>
        <div className="hidden panel-card-content-container">
          {elementHoverImage}
          <div className="panel-card-text-container">
            <span className="panel-card-title">
              <b>{title}</b>
            </span>
            <span className="panel-card-description">{desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
