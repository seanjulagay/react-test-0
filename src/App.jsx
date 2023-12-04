import React from "react";
import ReactDOM from "react-dom/client";
import PanelCard from "./PanelCard";
import myData from "./data.json";
import "./styles/app.scss";

export default function App() {
  const cards = myData.map((item, index) => {
    return (
      <PanelCard
        key={index}
        title={item.title}
        desc={item.description}
        image={item.image}
        hoverImage={item.hoverImage}
      />
    );
  });

  console.log(cards);

  return (
    <div className="app">
      <div className="app-container">{cards}</div>
    </div>
  );
}
