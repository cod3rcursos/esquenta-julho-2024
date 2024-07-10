import Caixa from '@/components/Caixa'

export default function Page() {
    return (
        <div className="h-96 w-[900px]">
            <h1>Flexbox</h1>
            <div
                className="
                        bg-zinc-700
                        h-96
                        flex
                        justify-around
                        items-start
                        gap-5
                    "
            >
                <Caixa texto="#1" className="w-24" />
                <Caixa texto="#2" className="flex-grow" />
                <Caixa texto="#3" className="w-20" />
            </div>
        </div>
    )
}
