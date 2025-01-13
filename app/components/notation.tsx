import "app/styles/notation.sass";



function StarRating(props: any) {
  const maxStars = 5;
  let rating = parseInt(props.rating);
  return (
    <div className="star-rating">
      {Array.from({ length: maxStars }).map((_, index) => (
        <i
          key={index}
          className={`fa fa-star ${index < rating ? "filled" : ""}`}
          aria-hidden="true"
        ></i>
      ))}
    </div>
  );
}

export default StarRating;


