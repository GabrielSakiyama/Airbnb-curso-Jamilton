import { objectApi, accommodation, testimony } from '@/backend/interfaces'

//Retorna uma promise que apos resolvida, conteum um objeto que tem accommodation e icons
  async function doFetch(): Promise<objectApi>{
    try {
      const request = await fetch('https://web.codans.com.br/airbnb');
      const response: objectApi = await request.json();
      return response;
    }catch(e){
        const error:objectApi = {
        accommodation:[],
        icons: []
        }
        console.log(`Ocorre o seguinte erro ${e}`);
        return error
    }  
    
  }

  async function getDatesIcons(indexLimit: number){
    const {icons} = await doFetch();
    const iconsFiltered = icons.filter((object,index) => index < indexLimit );
    return iconsFiltered;
  } 

  async function getDatesIconsFull(){
    const {icons} = await doFetch(); 
    return icons;
} 

/*
 Retorna um array de objeto com os dados acccomodation em ordem crescente
 Parametro: Quantidade de acomodação se quer buscar Ex: 2
*/
    async function getDatesAccomodation(indexLimit: number){
      const { accommodation } = await doFetch();
      const accommodationFiltered: accommodation[] = accommodation.filter((object,index) => (index <indexLimit));
      return accommodationFiltered;
      
  } 

//Retorna array que contém objeto das acomodações
    async function getDatesAccomodationFull(){
      const { accommodation } = await doFetch();
      return accommodation;
  } 

/*
 Retorna um array de objeto com os dados de photo.Campos do objeto {id; source; description}
 Parametro: nome do slug(acomodacao que quer) Ex: colonia-de-pescadores-brasil
*/
    async function getPhotosAccomodation(slug: string){
        const { accommodation } = await doFetch();
        if(accommodation){
          const accommodationFiltered = accommodation.find((accommodationObject) => (accommodationObject.slug == slug));
    
          if(accommodationFiltered)
            return accommodationFiltered.photos

        }
        
    }

    async function getInfoTestimony(slug: string){
      const { accommodation } = await doFetch();
      const accommodationFiltered = accommodation.find(accommodationObject => accommodationObject.slug === slug)  

      if(accommodationFiltered){
        const { testimonials } = accommodationFiltered;
        return testimonials
      }
    
      const object: testimony[] = [{
              id: '',
              name: '',
              image: '',
              comment: '',
              rating: null,
              createAt: null,
              customerTime: null,
              stayedAt: null}] 
      return  object;
    }

    doFetch();
 export {
  getDatesIcons,
  getDatesIconsFull,
  getDatesAccomodation,
  getDatesAccomodationFull,
  getPhotosAccomodation,
  getInfoTestimony
} 

