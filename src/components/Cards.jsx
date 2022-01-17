import React from 'react';
import Card from './Card';
//en cards renderizamos card.recibira un arreglo de ciudades 

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  // pasamos las propiedades con destructurin de App.js a este lugar con Card
  
  return ( 
  <div>
        {cities.map((city)=>(/* propiedades que estan en App.js*/
        <Card 
          key={city.id}
          min={city.main.temp_min}
          max={city.main.temp_max}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />))}
  </div>
    )
}
