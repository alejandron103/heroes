import { useEffect, useState } from 'react';
import {getHeroes} from '../../services/get-heroes';
import Hero from '../Hero';

export default function HeroesContainer(){
  const [heroes, setHeroes] = useState([])
  useEffect(() => {
    async function fetchData(){
      const fetchedHeroes = await getHeroes();
      setHeroes(fetchedHeroes)
    }
    fetchData()
  }, [])
  return heroes.map( ({id, name, description, imageUrl,comics}: Hero ) => 
    <Hero
      key={id}
      name={name} 
      imageUrl={imageUrl}
      comics={comics}
      description={description}
    />
  )
}