interface Hero {
  id?: number,
  name: string,
  description: string,
  imageUrl: string,
  comics: Comic[];
}

interface Comic{
  resourceURI: string,
  name: string
}