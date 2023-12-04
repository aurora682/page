import React from 'react';
import Categorias from '../components/atoms/Categorias';
import Eslogan from '../components/atoms/Eslogan';
import Header from '../components/atoms/Header';
import Titulo from '../components/molecules/Titulo';
import Recomendaciones from '../components/organismes/Recomendaciones';
import Footer from '../components/atoms/Footer';
import './Home.css'

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <Titulo></Titulo>
      <Categorias></Categorias>
      <Eslogan></Eslogan>
      <Recomendaciones></Recomendaciones>
      <Footer></Footer>
    </div>
  );
}

export default Home;