import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex gap-2">
                <div className="flex gap-1">
                    <span className="h-5 w-5 rounded-full bg-red-500"></span>
                    <span className="h-5 w-5 rounded-full bg-green-500"></span>
                    <span className="h-5 w-5 rounded-full bg-blue-500"></span>
                </div>
                <span className="font-black">AppJS</span>
            </div>
        </Link>
    )
}
