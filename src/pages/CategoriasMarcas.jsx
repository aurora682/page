import Header from "../components/atoms/Header";
import Titulo from "../components/molecules/Titulo";
import CategoriaMarcas from "../Components/Organismes/CategoriaMarcas";
import TituloMarcas from "../Components/Atoms/TituloMarcas";
import './Home.css';

function Marcas(){
    return(
        <>
        <Header></Header>
        <Titulo></Titulo>
        <TituloMarcas></TituloMarcas>
        <CategoriaMarcas></CategoriaMarcas>
        </>
    );
}

export default Marcas;