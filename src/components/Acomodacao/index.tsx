import { IconHeartFilled, IconStarFilled } from "@/assets/icones";

interface AcomodacaoProps{
    children: React.ReactNode,
    anfitriao:string,
    local_descricao:string,
    preco:number,
    data:string,
    avaliacao:number,
    preferidoHospedes: boolean
}

export default function Acomodacao({
    anfitriao,avaliacao,children,data,
    local_descricao,preco, preferidoHospedes
}: AcomodacaoProps){
    return (
        <figure className="relative">
            <div className="absolute w-full flex justify-between items-center px-2 py-3 ">
                    <div>
                        {
                          preferidoHospedes && (<span className="text-gray-600 bg-white rounded-full py-1 px-1.5 font-semibold text-sm"> Preferidos dos hospedes
                                                </span>)
                        }

                    </div>

                    <IconHeartFilled
                            aria-label="Favorito"
                            className="stroke-1 opacity-80"
                            size={25}
                    />
            </div>
            {children}

            <figcaption className="text-md py-2 px-3"> 
                    <div className="flex flex-row items-center justify-between w-full ">
                            <span className="inline-block w-4/5 font-bold">
                                {local_descricao}
                            </span> 

                            <span className="text-center flex flex-row items-center gap-1.5">
                                <IconStarFilled
                                    aria-label="estrela"
                                    size={15}
                                />
                                {avaliacao}
                            </span>
                    </div>

                    <div className="flex flex-col">
                        <span>{anfitriao}</span>
                        <span>{data}</span>
                        <span className="font-semibold">R$ {preco}</span>
                    </div>
            </figcaption>
        </figure>
    )
}