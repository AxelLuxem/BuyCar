import "../App.css";
import { data } from "../carList";
import { CarCard } from "../components/CarCard";

const maxItems = 5;

const HomePage = () => {
  return (
    <div className="pageWrapper">
      <div className="titleBackground">
        <div className="titleSection">
          <h1 className="title">CarBuy</h1>
          <h2 className="subtitle">
            Find your perfect ride effortlessly.
            <br /> Explore a curated selection of quality vehicles tailored to
            your preferences.
          </h2>
          <div className="buttonWrapper">
            <a href="/Search" className="button">
              Browse
            </a>
          </div>
        </div>
      </div>
      <div className="featuredWrapper">
        {data.map((item, index) => {
          if (index < maxItems) {
            return (
              <CarCard
                key={item.id}
                make={item.make}
                model={item.model}
                miles={item.miles}
                price={item.price}
                picture={item.pictureFilenames}
                id={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default HomePage;
