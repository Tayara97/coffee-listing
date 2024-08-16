export default function Card({
  img,
  name,
  altName,
  price,
  rating,
  votes,
  popular,
  available,
}) {
  return (
    <div className="card">
      {popular && <span className="popular">Popular</span>}
      {available === false && <span className="sold">Sold Out</span>}
      <div className="image">
        <img src="images/1.jpg" alt={altName} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <span className="price">{price}</span>
      </div>
      <div className="rate">
        <img
          src={`${votes > 0 ? "images/Star_fill.svg" : "images/Star.svg"}`}
          alt="filled-star"
        />
        <div>
          {rating} <span className="votes">({votes} votes)</span>
        </div>
      </div>
    </div>
  );
}
