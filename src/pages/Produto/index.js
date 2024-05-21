import { useParams } from "react-router-dom";

function Produto(){

    const { id } = useParams();
    
    return(
        <div>
            <h2>PAGINA DETALHE Produto</h2>

            <span>
                MEU Produto É{id}
            </span>
        </div>
    );
}


export default Produto;