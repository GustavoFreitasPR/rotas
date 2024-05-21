import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Bem vindo a pagina Contato</h1>
            <span>my name is gugu da pecuaria my tel is 4299144541</span>

            <br/>

            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>

            <hr/>

            <Link to="/produto/1">Acessar produto 1
            </Link>
        </div>
    );

}

export default Contato;