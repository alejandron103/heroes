import { useEffect, useState } from 'react';
import {getHeroes} from '../../services/get-heroes';
import ListHeroes from '../../components/ListHeroes';
import Finder from '../../components/Finder';

export default function HomePage(){
  const [heroes, setHeroes] = useState([])
  const [keyword, setKeyword] = useState('')

  const handlerFind = (keyword:string) => {
    setKeyword(keyword)
  }
  useEffect(() => {
    async function fetchData(){
      const fetchedHeroes = await getHeroes(keyword);
      setHeroes(fetchedHeroes)
    }
    fetchData()
  }, [keyword])
  return (
    <>
      <Finder handleSearch={handlerFind} />
      <ListHeroes heroes={heroes}/>
    </>
  )
} 