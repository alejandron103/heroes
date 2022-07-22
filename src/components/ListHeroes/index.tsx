import Hero from '../Hero';

export default function ListHeroes({heroes}){
  return <div className='ListGifs'> 
    {
      heroes.map(({id, name, description, imageUrl,comics}: Hero ) => 
        <Hero
          key={id}
          name={name} 
          imageUrl={imageUrl}
          comics={comics}
          description={description}
        />
      )
    }
  </div>
}