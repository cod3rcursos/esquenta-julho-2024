import Carrinho from './Carrinho'
import Logo from './Logo'

export default function Cabecalho() {
    return (
        <header
            className="
                flex justify-between items-center
                bg-zinc-800 h-20 px-10
            "
        >
            <Logo />
            <Carrinho />
        </header>
    )
}
