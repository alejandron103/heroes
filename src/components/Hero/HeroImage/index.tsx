export default function HeroImage({name, imageUrl}) {
  return (
    <img className="Hero__image"
      loading="lazy"
      src={imageUrl}
      alt={name}
    />
  );
}