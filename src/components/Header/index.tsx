import './style.css'

export default function Header() {
    return (
        <header>
            <div className='header-fundo-menu'>
                <div className='container'>
                    <nav>
                        <ul className='menu'>
                            <li><a href="">Início</a></li>
                            <li><a href="">Produtos</a></li>
                            <li><a href="">Quem somos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='milharal'>
                <img src="icone.svg" alt="" />
                <div>Fazenda Orgânica</div>
            </div>
        </header>
    )
}