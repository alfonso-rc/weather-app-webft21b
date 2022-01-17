import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function handletOnSerch(){
    if(typeof onSearch === "function" ){
      const input = document.getElementById("buscando-en-input") 
      onSearch(input.value);
    }
  }
  return (
    <div>
        <input id="buscando-en-input"/>
        <button onClick={handletOnSerch}>Agregar</button>
    </div>
    )
};