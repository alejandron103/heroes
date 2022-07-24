import { useState } from "react"

export default function Finder({handleSearch}){
  const [keyword, setKeyword] = useState('');
  const handleSubmit = (event:any) => {
    event.preventDefault()
    handleSearch(keyword)
  }
  const handleChange = (event:any) => {
    setKeyword(event.target.value)
  }
  return <form className='finder' onSubmit={handleSubmit} >
    <input placeholder="search character..." type="text" value={keyword} onChange={handleChange}/>
  </form>
}