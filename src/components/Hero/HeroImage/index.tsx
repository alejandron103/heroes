export default function HeroImage({name, imageUrl}) {
  return (
    <img className="Hero__image"
      src={imageUrl}
      alt={name}
    />
  );
}