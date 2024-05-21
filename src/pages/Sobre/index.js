import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <div>
            <h1>Bem vindo a pagina SOBRE</h1>
            <span>gugu da pecuaria</span>

            <br/>

            <Link to="/home">Home</Link><br/>
            <Link to="/contato">Contato</Link><br/>

            <hr/>

            <Link to="/produto/1">Acessar produto 1
            </Link>
        </div>
    );

}

export default Sobre;