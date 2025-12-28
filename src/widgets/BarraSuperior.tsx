import Logo from "@/components/Logo";
import Link from "next/link";
import Icon from "@/components/BotaoIcone"
import { IconUserCircle } from "@/assets/icones";

const BarraSuperior = () => {
    return (
        <div className="flex justify-between items-center mb-2">
                 
            <Logo/>
            <div className="flex gap-6">
                <Link className="font-semibold" href="/">Acomodações</Link>
                <Link className="opacity-60" href="/">Experiências</Link>
            </div>

           <Icon 
                icone = {(<IconUserCircle
                            aria-label="Icone de usuario"
                            size={32}/>)
                        }>
                entrar
           </Icon>
            
      </div>
    );
}

export default BarraSuperior;