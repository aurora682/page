import React from 'react';

function Recomendaciones() {
  return (
    <div className="Recomendaciones">
      <h2 className="TituloRecomendaciones">Moda Y Estilo</h2>
      <div className="Productos">
        <div className="Producto">
          <img src="/IMG/Mochila.jpeg" alt='Mochila'></img>
          <div className="ProductoInfo">
            <h3>BackPack</h3>
            <h5>Marca: Shein</h5>
            <p>Precio: $570.00</p>
            <button className="ComprarButton">Comprar</button>
          </div>
        </div>
        <div className="Producto">
          <img src="/IMG/Bolso.jpeg" alt='Bolso'></img>
          <div className="ProductoInfo">
            <h3>HeartPink</h3>
            <h5>Marca: Nine</h5>
            <p>Precio: $220.00</p>
            <button className="ComprarButton">Comprar</button>
          </div>
        </div>
        <div className="Producto">
          <img src="/IMG/Collares.jpeg" alt='Collares'></img>
          <div className="ProductoInfo">
            <h3>VariousTypes</h3>
            <h5>Marcas: Varias</h5>
            <p>Precio: $149.00</p>
            <button className="ComprarButton">Comprar</button>
          </div>
        </div>
        <div className="Producto">
          <img src="/IMG/Carteras.jpeg" alt='Cartera'></img>
          <div className="ProductoInfo">
            <h3>Wallet</h3>
            <h5>Marca: Romwe</h5>
            <p>Precio: $110.00</p>
            <button className="ComprarButton">Comprar</button>
          </div>
        </div>
        <div className="Producto">
          <img src="/IMG/Reloj.jpeg" alt='Reloj'></img>
          <div className="ProductoInfo">
            <h3>Clock</h3>
            <h5>Marca: Rolex</h5>
            <p>Precio: $1449.00</p>
            <button className="ComprarButton">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recomendaciones;
