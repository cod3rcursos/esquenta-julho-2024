import Link from 'next/link'

export default function MenuItem(props: any) {
    return (
        <Link
            href={props.link}
            className="
                flex items-center gap-2
                hover:bg-blue-500 rounded-md px-4 py-2
            "
        >
            {props.children}
        </Link>
    )
}
