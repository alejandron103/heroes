import ComicDetail from "../../ComicDetail";
import { useState, useEffect } from "react"

export default function HeroComic({ comics }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [comicDetail, setComicDetail] = useState('');

  //condition if character hasn't comics
  if (comics.length === 0 || !comics) return <span>this Hero hasn't comics to show</span>

  return <> 
      {
        comics.map((comic: Comic, index: number) =>
          <li 
            className="Hero__comic" 
            key={`${comic.name}-${index}`} 
            onClick={() => {
              setIsOpenModal(!isOpenModal);
              setComicDetail(comic.resourceURI)
            }}>
            {comic.name}
          </li>
        )
      }
      <ComicDetail openModal={isOpenModal} resourceURI={comicDetail} />
  </>
}