import { IconHeartFilled } from '@tabler/icons-react'

export default function Rodape() {
    return (
        <footer>
            <div
                className="
                    flex justify-end items-center gap-2 bg-zinc-700 p-4
                    text-zinc-400 text-sm
                "
            >
                <span>Desenvolvido com</span>
                <IconHeartFilled size={18} className="text-red-600" />
                <span> por Cod3r - {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}
