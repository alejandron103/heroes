import HeroImage from './HeroImage'
import HeroInfo from './HeroInfo'
import HeroComics from './HeroComics'
import './Hero.scss';

export default function Hero ({name, description, imageUrl, comics}:Hero){
  return (
    <div className="Hero">
      <div className="Hero__main-info">
        <HeroImage name={name} imageUrl={imageUrl} />
        <HeroInfo name={name} description={description}/>
      </div>
        <HeroComics comics={comics} />
    </div>
  )
}
      