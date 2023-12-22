import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { carList } from "../carList";

const Car = () => {
  const params = useParams();

  return (
    <div>
      <h1>Welcome to the car page!!!</h1>
      <p>The id for this car is: {params.id}</p>
    </div>
  );
};

export default Car;
