import { useState, useEffect } from "react"
import ComicDetail from "../../../components/ComicDetail"
import HeroComic from "../HeroComic";

export default function HeroComics({ comics }) {
  const [showComics, setShowComics] = useState(false);

  return <>
    <button 
      className="hero__btn" 
      onClick={()=>{setShowComics(true)}}>
      View More
    </button>
    { showComics && 
      <ul className="Hero__comics">
        <HeroComic comics={comics} />
      </ul>
    }
  </>
}