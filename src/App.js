import "./App.css";
import { data } from "./carList";
import { CarCard } from "./components/CarCard";

export const App = () => {
  return (
    <div className="pageWrapper">
      <section className="titleWrapper">
        <h1 className="title">CarBuy</h1>
        <h2 className="subtitle">The best cars for every price</h2>
        <button>Search</button>
      </section>
      <section>
        <div>
          {data.map((item) => (
            <CarCard
              key={item.id}
              make={item.make}
              model={item.model}
              miles={item.miles}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
