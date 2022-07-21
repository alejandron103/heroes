import {API_BASE, PARAMS_TO_REQUEST} from '../constants/common.js';

export async function getHeroes():Promise<Hero[] | undefined>{

  const request = await fetch(`${API_BASE}characters${PARAMS_TO_REQUEST}`);
  const response = await request.json();
  const results = await response.data.results;
  if(Array.isArray(results)){
    const heroes = results.map( hero => {
     const { id, name, comics: {items:comics} , description, thumbnail } = hero;
      const imageUrl = `${thumbnail.path}.${thumbnail.extension}`
      return { id, name, comics, description, imageUrl }
    })
  return heroes
  }
}