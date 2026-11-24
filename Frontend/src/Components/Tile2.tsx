import { Link } from "react-router"

type tileProps = {
    name: string,
    route: string
}

export default function Tile2(tileProps: tileProps) {
    return (
        <Link
            to={tileProps.route}
            className="hover:bg-orange-300 transition duration-300 text-2xl border border-gray-300 rounded-lg h-32 flex items-center justify-center"
        >
            {tileProps.name}
        </Link>
    )
}