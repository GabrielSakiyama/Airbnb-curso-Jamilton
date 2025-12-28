//Pagina Inicial
import BarraSuperior from "@/widgets/BarraSuperior";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import NavegacaoHorizontal from "@/widgets/NavegacaoAbasHorizontal";
import Acomodacoes from "@/widgets/Acomodacoes";
import Rodape from "@/widgets/Rodape";

export default function Home() {
  return (
   <>
    <header className="container mx-auto p-2">
     <BarraSuperior />
     <BarraPesquisa/>
    </header>

    <main id="content" className="container mx-auto w-4/5  border-b-amber-600">
        <NavegacaoHorizontal/>
        <Acomodacoes/>
        <div className="flex flex-row">
                  
         </div>
    </main>

    <footer className="bg-gray-400">
          <Rodape/>
     </footer>
   </>
  );
}
