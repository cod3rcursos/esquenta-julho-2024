import Cabecalho from './Cabecalho'
import MenuPrincipal from './MenuPrincipal'
import Rodape from './Rodape'

export default function Pagina(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho />
            <div className="flex-grow flex">
                <MenuPrincipal />
                <div className="flex flex-col flex-1">
                    <main className="p-7 flex-1">{props.children}</main>
                    <Rodape />
                </div>
            </div>
        </div>
    )
}
