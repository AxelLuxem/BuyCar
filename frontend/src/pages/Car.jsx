import { useParams } from "react-router-dom";
import { carList } from "../carList";
import "./Car.css";

const Car = () => {
  const carID = useParams();
  const path = "../pictures";

  const car = carList.find((item) => carID.id === item.id);

  return (
    <div className="carPageWrapper">
      <div className="topSection">
        <div className="carImageBigWrapper">
          <img
            src={`${path}/${car.pictureFilenames}`}
            alt={`${car.make} ${car.model}`}
            className="carImageBig"
            width="800px"
          />
        </div>
        <div className="carDetailsWrapper">
          <p className="carDetailsName">
            {car.make} {car.model}
          </p>
          <p className="carDetailsSpecs">
            {car.engineSize}litre {car.bhp}Bhp {car.doors}dr
          </p>
          <p>
            Year: {car.year} ({car.year[2] + car.year[3]}{" "}
            plate)
          </p>
          <p>Mileage: {car.miles} miles</p>
          <p>Previous owners: {car.ownerAmount}</p>
          <p className="priceText">£{car.price}</p>
          <div className="contactSellerWrapper">
            <p className="contactSellerText">
              {car.username}
            </p>
            <button className="contactSellerButton">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
