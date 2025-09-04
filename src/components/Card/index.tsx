import './style.css'
import type { ICARD } from "../../dados"

export default function Card({titulo, foto, texto}:ICARD) {

    return (
        <div className="card">
            <div className="topo">
                <h2>{titulo}</h2>
                <img src={foto} alt="" />
            </div>
            <div className="baixo">
                {texto}
            </div>
            <div className='botao'>
                    <a href="">Saiba Mais</a>
                </div>
        </div>
    )
}