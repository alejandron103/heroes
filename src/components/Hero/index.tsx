import HeroImage from './HeroImage'
import HeroInfo from './HeroInfo'
import HeroComics from './HeroComics'
import './Hero.scss';

export default function Hero ({name, description, imageUrl, comics}:Hero){
  return (
    <div className="Hero">
      <HeroImage name={name} imageUrl={imageUrl} />
      <HeroInfo name={name} description={description}/>
      <HeroComics comics={comics} />
    </div>
  )
}
      