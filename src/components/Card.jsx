import React from 'react';
import CardTemp from './CardTemp';
import PropTypes from 'prop-types';

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  function handleOnClose(){
    if(typeof onClose === "function") onClose();
  }
    return (
  <div>
      <button onClick={handleOnClose}>x</button>
      <h3>{name}</h3>
      <CardTemp label="Min" value={min} />
      <CardTemp label="Max" value={max} />
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima'/>
  </div>
  );
}

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};