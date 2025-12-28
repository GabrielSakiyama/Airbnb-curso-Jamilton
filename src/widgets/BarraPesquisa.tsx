import {IconSearch } from "@/assets/icones"

const BarraPesquisa = () =>{
    return (
            <div className="flex justify-between container w-1/2 
                            rounded-full p-1 mx-auto mb-4
                            shadow-md shadow-gray-400"
                            >
                <input type="text" className="w-full pl-1 focus:outline-none" placeholder="Pequisa"/>
                <button className="bg-red-500 rounded-full p-1 flex items-center">
                    <IconSearch size={23} color="white"/>
                </button>
            </div>  
        );
}

export default BarraPesquisa;