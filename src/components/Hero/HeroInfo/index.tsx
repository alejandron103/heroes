export default function HeroInfo ({name, description}){
  return (
    <div className="Hero__info">
      <h3 className="Hero__title">{name}</h3>
      <p className="Hero__description">{description !== '' ? description : 'Description not avaible'}</p>
    </div>
  )
}