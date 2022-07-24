import { useEffect, useState } from 'react';
import {getHeroes} from '../../services/get-heroes';
import ListHeroes from '../../components/ListHeroes';
import Header from '../../components/Header';

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
      <Header handleSearch={handlerFind} />
      <ListHeroes heroes={heroes}/>
    </>
  )
} 