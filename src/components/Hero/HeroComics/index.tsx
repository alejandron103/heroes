
export default function HeroComics({comics}){
  if(comics.length === 0 || !comics) return <span>this Hero hasn't comics to show</span>
  const comicsList = comics.slice(0, 3)
    .map( (comic:Comic, index:number) => 
    <li key={`${comic.name}-${index}`}>
      {comic.name}
    </li>
        )
      
  return (
    <ul className="Hero__comics">
      {comicsList}
    </ul>
  )
}