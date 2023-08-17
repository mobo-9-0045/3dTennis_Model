import React from 'react';
import "./App.scss"; // Make sure to import your CSS file if you have one

const TableTennisComponent = () => {
  return (
    <div className="container">
      <div className="floor"></div>
      <div className="table">
        <div className="leg"></div>
        <div className="leg"></div>
        <div className="leg"></div>
        <div className="leg"></div>
        <div className="net">
          <div className="top"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="front">Transandance</div>
        <div className="back">Transandance</div>
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="ballWrapper">
        <div className="ball"></div>
        <div className="ballShadow"></div>
      </div>
      <div className="player player1">
        <div className="playerBox">
          <div className="top"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="back"></div>
          <div className="ballShadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
      <div className="player player2">
        <div className="playerBox">
          <div className="top"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="back"></div>
          <div className="ballShadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default TableTennisComponent;
