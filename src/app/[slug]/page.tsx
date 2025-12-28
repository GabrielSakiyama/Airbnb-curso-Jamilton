import BarraSuperior from "@/widgets/BarraSuperior";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import Galeria from "@/widgets/Galeria";
import Rodape from "@/widgets/Rodape";
import DetalhesAcomodacao from "@/widgets/DetalhesAcomodacao";
import Depoimentos from "@/widgets/Depoimento";
import { getPhotosAccomodation } from '../../backend/dados';

interface PageProps{
    slug: string;
}


export default async function Page(  { params } : {params: Promise<PageProps> } ){
    const dados = await params;
    const photos = await getPhotosAccomodation(dados.slug);
    if(photos){
        return (
            <div>   
                  <header className="container mx-auto p-2">
                        <BarraSuperior />
                        <BarraPesquisa/>
                  </header> 
    
                    <main className="mx-4"> 
                        <h1 className="bg-black text-white font-bold p-2">
                            {dados.slug}
                        </h1>
                           <Galeria
                              photos={photos}
                            /> 
                    </main>
                    {/*Aba de depoimento e detalhes da acomodação*/}
                    <div className="mx-4 flex flex-row gap-2 justify-between">
                        <DetalhesAcomodacao
                            title="Espaco inteiro"
                            numHospede={10}
                            numQuartos={5}
                            numBanheiro={6}
                            numCamas={5}                
                        />
    
                        <Depoimentos
                            slug={dados.slug}
                        />
                    </div>
                   <footer className="bg-gray-400 mt-2">
                        <Rodape/>
                        
                    </footer>
            </div>  
        )
    }
}