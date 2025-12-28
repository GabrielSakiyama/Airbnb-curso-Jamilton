import Link from "next/link"

export default function Rodape(){
    return (
        <div className="container w-4/5 mx-auto py-2">
                <span className="font-bold"> &copy; 2025 Airbnb Inc </span>
                <ul className="flex flex-row gap-5 list-disc ml-4">

                    <li> <Link href='/' className="hover:text-red-400">Privacidade</Link> </li>
                    <li> <Link href='/' className="hover:text-red-400">Termos</Link> </li>
                    <li> <Link href='/' className="hover:text-red-400">Mapa do site</Link> </li>
                    <li> <Link href='/' className="hover:text-red-400">Informações da empresa</Link> </li>
                </ul>
        </div>
    )
}