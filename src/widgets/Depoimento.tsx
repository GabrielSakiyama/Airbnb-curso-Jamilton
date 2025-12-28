import {} from '@/backend/dados'
import { IconStarFilled} from '@/assets/icones'
import { getInfoTestimony } from '@/backend/dados'
import Image from 'next/image'

interface slug{
    slug: string
}

export default async function Depoimentos({ slug }: slug) {

    const testimony = await getInfoTestimony(slug);
    if(testimony){
        return (
                    <div className="w-full flex flex-col border-2 border-red-600 p-2">
                            <h2 className="font-bold text-black">
                                Depoimento
                            </h2>
                            <div className='flex flex-row items-center gap-2 text-sm'>
                                <IconStarFilled
                                    fill='#000000'
                                    width={15}
                                    height={15}                            
                                />
                                
                                <span> {testimony[0].rating} {'(400+ avaliações)'} </span>
    
                            </div>
                            <div>
                                {testimony.map((testimonial,index) => {
                                    return (
                                        <div key={index} className='flex flex-row items-start gap-2 my-3'>
                                            <Image
                                                className='rounded-full aspect-square object-cover'
                                                width={48}
                                                height={48}
                                                alt='Image'
                                                src={testimonial.image}
                                            />
                                            
                                            <div className='flex flex-col text-sm'>
                                                <h2 className='font-bold text-black'> {testimonial.name} </h2>
                                                {testimonial.comment}
                                            </div>
                                        </div>
                                    )
                                })}
    
                            </div>
                    </div>
        )
    }
}