import Image from "next/image";

type photo = {
    id: string,
    source: string,
    description: string
}

interface photos {
    photos: photo[]
};

export default function Galeria({photos}: photos){
    return (
        <div className="
                                    bg-gray-500 grid  
                                      gap-2 md:grid-cols-6 sm:grid-cols-4
                                            md:grid-rows-2 sm:grid-rows-3
                                  "
                            >
                                {photos.slice(0,9).map((photo, index) => {
                                        
                                    return(
                                        <div key={index} className={`${index == 0 ? 'col-span-2 row-span-2': ''}`}>
                                            <Image
                                                className="w-full aspect-square  object-cover"
                                                key={index}
                                                src={photo.source}
                                                width={1280}
                                                height={769}
                                                alt="galeria"
                                            />
                                        </div>
                                    );
                                    
                                })}
        
                            </div>
    )
}