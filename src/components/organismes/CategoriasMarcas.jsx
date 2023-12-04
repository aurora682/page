import React from 'react';

function Marcas() {
  return (
    <div className="Marcas">
      <div className="Columna">
        {marcasData.slice(0, 4).map((marca, index) => (
          <div key={index} className="Marca">
            <img src={`IMG/${marca.imagen}`} alt={marca.nombre} className="ImagenMarca" />
            <p>{marca.nombre}</p>
          </div>
        ))}
      </div>
      <div className="Columna">
        {marcasData.slice(4).map((marca, index) => (
          <div key={index} className="Marca">
            <img src={`IMG/${marca.imagen}`} alt={marca.nombre} className="ImagenMarca" />
            <p>{marca.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marcas;
