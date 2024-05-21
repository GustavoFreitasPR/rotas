import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Bem vindo a pagina HOME</h1>
            <span>gugu da pecuaria</span>

            <br/>

            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link><br/>

            <hr/>

            <Link to="/produto/1">Acessar produto 1
            </Link>
        </div>
    );

}

export default Home;