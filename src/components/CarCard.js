export const CarCard = ({ make, model, miles, price, picture, id }) => (
  <div className="cardWrapper">
    <img src=""></img>
    <div className="priceWrapper">
      <p className="price">{price}</p>
    </div>
    <div className="detailsWrapper">
      <p className="carName">{make + model}</p>
      <p className="details">{miles} miles</p>
    </div>
  </div>
);
