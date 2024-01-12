import { useEffect, useState } from "react";
import { initialData } from "../carList";
import { CarCard } from "../components/CarCard";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(initialData);

  const searchResults = (e) => {
    e.preventDefault();
    const result = initialData.filter((item) =>
      Object.values(item).some((obj) =>
        obj.toString().toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setData(result);
  };

  useEffect(() => {
    if (searchValue.trim() === "") {
      setData(initialData);
    }
  }, [searchValue]);

  return (
    <div>
      <div>
        <form onSubmit={searchResults} className="searchBarWrapper">
          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="searchBar"
            placeholder="Search"
          />
          <button type="submit"></button>
        </form>
      </div>
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
