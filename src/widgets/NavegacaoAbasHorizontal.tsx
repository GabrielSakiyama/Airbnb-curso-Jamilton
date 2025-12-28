'use client'
import 'swiper/css'; 
import { Swiper, SwiperSlide } from "swiper/react"
import { IconAdjustmentsHorizontal } from "../assets/icones";
import { getDatesIcons } from "../backend/dados";
import Link from 'next/link';
import Image from 'next/image';
import BotaoIcon from "@/components/BotaoIcone";

const icons = await getDatesIcons(20);

export default function NavegacaoHorizontal(){
    return (
        <div className="flex flex-row items-center mb-5 text-center">
            {/*Navegação de filtros*/}
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    640:{slidesPerView:3},
                    764:{slidesPerView:4},
                    1024:{slidesPerView:6},
                    1280:{slidesPerView:9}
                }}
                navigation
                scrollbar={{draggable:true}}
            >
            
                {icons.map((icon, index)=>{
                    return (
                    <SwiperSlide key={index}>
                        <Link href= {icon.url} className='flex flex-col justify-center items-center  hover:text-red-400'>
                            <Image
                                src={icon.source}
                                alt={icon.description}
                                width={24}
                                height={24}
                            />
                            <span>{icon.description}</span>
                        </Link>
                    </SwiperSlide>
                    )
                })}
            </Swiper>

            {/*Ícone de filtro*/}
            <BotaoIcon
                icone={(<IconAdjustmentsHorizontal
                    aria-label="Icone de usuario"
                    size={20} 
                />)}
            > filtros </BotaoIcon>
            
            
        </div>
    )
}