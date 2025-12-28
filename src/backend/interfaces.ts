type photo = {
      id: string,
      source: string,
      description: string
};

type testimony = {
      id: string,
      name: string,
      image: string,
      comment: string,
      rating: number | null,
      customerTime: number | null,
      createAt: number | null,
      stayedAt: number | null
};

type location = {
      description: string,
      city: string,
      state: string,
      country: string
}

interface icons{
      id: string,
      description:string,
      source: string,
      url: string
}

interface accommodation  {
      number: number,
      date: string,
      host: string,
      id: string,
      title: string,
      slug: string,
      location: location,
      hasBadge: boolean,
      price: number,
      rating: number,
      testimonials: testimony[],
      photos: photo[]
}

interface objectApi {
      accommodation: accommodation[],
      icons: icons[]
}

export type {
    photo,
    testimony,
    icons,
    accommodation,
    objectApi
}