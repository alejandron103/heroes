import { useState, useEffect } from "react"
import ComicDetail from "../../../components/ComicDetail"
import HeroComic from "../HeroComic";

export default function HeroComics({ comics }) {
  //condition if character hasn't comics
  if (comics.length === 0 || !comics) return <span>this Hero hasn't comics to show</span>

  return (
    <ul className="Hero__comics">
      <HeroComic comics={comics} />
    </ul>
  )
}