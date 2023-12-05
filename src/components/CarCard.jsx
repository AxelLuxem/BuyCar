import "../App.css";
const path = "pictures";

export const CarCard = ({ make, model, miles, price, picture, id }) => (
  <div className="cardWrapper">
    <img className="cardImage" src={`${path}/${picture}`}></img>
    <div>
      <div className="detailsWrapper">
        <p className="carName">{`${make}, ${model}`}</p>
        <p className="mileage">{miles} miles</p>
      </div>
    </div>
    <div className="priceWrapper">
      <p className="price">{`- £${price}`}</p>
    </div>
  </div>
);
