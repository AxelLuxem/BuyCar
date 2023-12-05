import { data } from "../carList";
import { CarCard } from "../components/CarCard";

const SearchPage = () => {
  return (
    <div>
      <div className="searchOptionsWrapper"></div>
      <div className="searchCardsWrapper">
        {data.map((item) => (
          <CarCard
            key={item.id}
            make={item.make}
            model={item.model}
            miles={item.miles}
            price={item.price}
            picture={item.pictureFilenames}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
