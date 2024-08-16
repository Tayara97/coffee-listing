import Header from "./components/Header";
import Title from "./components/Title";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import { useState, useEffect } from "react";
function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setCoffeeData(data));
  }, []);
  console.log(coffeeData);
  const cards = coffeeData.map((data) => {
    return (
      <Card
        key={data.id}
        img={data.img}
        name={data.name}
        altName={data.name}
        price={data.price}
        rating={data.rating}
        votes={data.votes}
        popular={data.popular}
        available={data.available}
      />
    );
  });

  return (
    <>
      <Header />

      <div className="container">
        <img src="images/vector.svg" className="coffee-logo" alt="coffee" />
        <Title />
        <div className="products-btn">
          <Button value={"All Products"} active={"active"} />
          <Button value={"Available Now"} />
        </div>
        <div className="coffee-list">{cards}</div>
      </div>
    </>
  );
}

export default App;
