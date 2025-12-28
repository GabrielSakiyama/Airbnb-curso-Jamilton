import Caracteristica from "@/components/Caracteristica"
import {
    IconPhoto, 
    IconAlarmSmoke,
    IconBrandCarbon,
    IconDesk,
    IconDog,
    IconSailboat,
    IconWifi,
    IconPool,
    IconParking,
    IconToolsKitchen 
} from "../assets/icones"

interface props {
    title: string,
    numHospede: number,
    numQuartos: number,
    numCamas: number,
    numBanheiro: number
}

export default function DetalhesAcomodacao(Props: props){
    return (
        <div className="w-full border-2 border-red-600 p-2">
                        <div>
                            <h4 className="text-xl font-bold text-black opacity-80">
                                Espaço inteiro: {Props.title}
                            </h4>
                            <ul className="list-none flex flex-row gap-2 mt-2">
                                <li>{Props.numHospede} hóspedes</li>
                                <li>{Props.numQuartos} quartos</li>
                                <li>{Props.numCamas} camas</li>
                                <li>{Props.numBanheiro} banheiros</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-black opacity-80 mt-2">
                                O que esse lugar oferece ?
                            </h2>
                            <div className="flex flex-row mt-2">
                                <section className="w-full">
                                    <ul>
                                    <Caracteristica description="Vistas para montanha">
                                        <IconPhoto
                                            width={20}
                                            height={20}/>
                                    </Caracteristica>
                                    {/******/}
                                    <Caracteristica description="Espaço trabalho executivo">
                                        <IconDesk
                                            width={20}
                                            height={20}/>
                                    </Caracteristica>
                                    {/******/}
                                      <Caracteristica description="Alarme de segurança p/gas">
                                        <IconBrandCarbon
                                            width={20}
                                            height={20}                                        
                                        /> 
                                    </Caracteristica>
                                    {/******/}
                                     <Caracteristica description="Wi-fi rápido (83Mbs)">
                                        <IconWifi
                                            width={20}
                                            height={20}                                        
                                        />
                                    </Caracteristica> 
                                    {/******/}
                                     <Caracteristica description="Permitido animais">
                                        <IconDog
                                            width={20}
                                            height={20}                                        
                                        />
                                    </Caracteristica> 

                                    </ul>
                                    
                                </section>

                                <section className="w-full">
                                    <ul>
                                    <Caracteristica description="Cozinha">
                                        <IconToolsKitchen
                                            width={20}
                                            height={20}/>
                                    </Caracteristica>
                                        
                                    <Caracteristica description="Piscina privativa"> 
                                        <IconPool
                                            width={20}
                                            height={20}/> 

                                    </Caracteristica>
                                    
                                     <Caracteristica description="Visita para agua">
                                        <IconSailboat
                                            width={20}
                                            height={20}/>
                                    </Caracteristica> 


                                     <Caracteristica description="Estacionamento incluido">
                                        <IconParking
                                            width={20}
                                            height={20}/>
                                    </Caracteristica> 


                                     <Caracteristica description="Detector de fumaça">
                                        <IconAlarmSmoke
                                            width={20}
                                            height={20}/> 
                                    </Caracteristica>
                                    </ul>
                                   
                                </section>
                            </div>
                        </div>
        </div>
    )
}