import React from 'react';

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
    return (
  <div>
      <button onClick={onClose}>x</button>
      <h3>{name}</h3>
      <div>
        <span>Max</span>
        <span>{max}</span>
      </div>
      <div>
        <span>Min</span>
        <span>{min}</span>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima'/>
  </div>
  )
};