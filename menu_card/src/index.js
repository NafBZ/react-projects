import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState, useEffect } from "react";

const foodData = [
  {
    name: "Vegetable Biriyani",
    price: 6,
    photoName: "food/vegBr.jpg",
    soldOut: false,
  },
  {
    name: "Mutton Biriyani",
    price: 10,
    photoName: "food/mutton.jpg",
    soldOut: false,
  },
  {
    name: "Chapli Kebab",
    price: 12,
    photoName: "food/ckebab.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Biriyani",
    price: 12,
    photoName: "food/chicken.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Tikka",
    price: 15,
    photoName: "food/ctikka.jpg",
    soldOut: true,
  },
  {
    name: "Beef Biriyani",
    price: 18,
    photoName: "food/beef.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Biriyani House</h1>
    </header>
  );
}

function Menu() {
  const numberOfPizzas = foodData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numberOfPizzas > 0 ? (
        <React.Fragment>
          <p>
            We sell authentic desi biriyani, kebabs, curry and lots of south
            asian snacks!
          </p>
          <ul className="pizzas">
            {foodData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Sorry, we don't have any pizzas at the moment 😞</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <li>
        <h3>{pizzaObj.name}</h3>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price + 2 + "€"} </span>
      </li>
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 12;
  const closedHours = 23;
  const isOpen = hours >= openHours && hours <= closedHours;

  return (
    <footer>
      {isOpen ? (
        <Order closedHours={closedHours} openHours={openHours} />
      ) : (
        <p>Now it's {<Clock />} and sorry, we are closed now! 😞</p>
      )}
    </footer>
  );
}

function Order({ closedHours, openHours }) {
  return (
    <div className="order">
      <p>
        Now it's {<Clock />} and We are open from {openHours}:00 till{" "}
        {closedHours}
        :00! You can also order online 🎉
      </p>
      <button className="btn">Order now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
