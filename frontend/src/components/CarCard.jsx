import "../App.css";
import { useNavigate } from "react-router-dom";

const path = "pictures";

export const CarCard = ({
  make,
  model,
  miles,
  price,
  picture,
  id,
}) => {
  const navigate = useNavigate();

  const handleCarNavigation = () => {
    navigate(`/Car/${id}`);
  };

  return (
    <div
      role="button"
      className="cardWrapper"
      onClick={() => handleCarNavigation()}
    >
      <img
        className="cardImage"
        src={`${path}/${picture}`}
      ></img>
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
};
