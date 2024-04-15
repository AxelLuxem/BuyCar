import { useEffect, useState } from "react";
import { carList as initialData } from "../carList";
import { CarCard } from "../components/CarCard";
import DropDownButton from "../components/DropDownButton";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(initialData);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const searchResults = (e) => {
    e.preventDefault();
    const result = initialData.filter((item) =>
      Object.values(item).some((obj) =>
        obj
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
    setData(result);
  };

  useEffect(() => {
    if (searchValue.trim() === "") {
      setData(initialData);
    }
  }, [searchValue]);

  console.log(selectedMake);
  console.log(selectedModel);

  return (
    <div>
      <div>
        <form
          onSubmit={searchResults}
          className="searchBarWrapper"
        >
          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="searchBar"
            placeholder="Search"
          />
          <button type="submit"></button>
          <DropDownButton
            list={initialData.map((x) => {
              return { label: x.make, value: x.make };
            })}
            onChange={setSelectedMake}
          />
          <DropDownButton
            list={initialData.map((x) => {
              return { label: x.model, value: x.model };
            })}
            onChange={setSelectedModel}
          />
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
