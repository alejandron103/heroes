import { useEffect, useState } from 'react';
import {getHeroes} from '../../services/get-heroes';

export default function HeroesContainer(){
  const [heroes, setHeroes] = useState(null)
  useEffect(() => {
    async function fetchData(){
      const fetchedHeroes = await getHeroes();
      setHeroes(fetchedHeroes) 
    }
    fetchData()
  }, [])
  return (
    <p>data: {JSON.stringify(heroes)}</p>
  );
}