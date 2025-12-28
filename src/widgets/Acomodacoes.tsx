import { getDatesAccomodation } from "../backend/dados"
import Acomodacao from "@/components/Acomodacao"
import Image from "next/image";
import Link from "next/link";

const accommodations = await getDatesAccomodation(12);

export default function Acomodacoes(){
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {accommodations.map((acomodacao, index) => {
                return (
                <div key={index}>
                    <Link href={acomodacao.slug}>
                        <Acomodacao
                            anfitriao={acomodacao.host}
                            avaliacao={acomodacao.rating}
                            data={acomodacao.date}
                            local_descricao={acomodacao.location.description}
                            preco={acomodacao.price}
                            preferidoHospedes={acomodacao.hasBadge}
                        >
                            <Image
                                className="w-full aspect-square object-cover rounded-xl"
                                src={acomodacao.photos[index].source}
                                alt={acomodacao.photos[index].description}
                                width={300}
                                height={300}
                            />

                        </Acomodacao>
                    </Link>
                </div>
                )
            })}
        </section>
    )
}