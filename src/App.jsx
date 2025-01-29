import Nav from "./NavBar/Nav";
import Search from "./SearchBox/Search";
import Card from "./Card/Card";
import { createContext, useEffect, useState } from "react";

function App() {
  const storedCards = JSON.parse(localStorage.getItem("cards"));

  const [cards, setCards] = useState(storedCards);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  function addCard(front, back, categorie, IsDisplayed) {
    const newCard = { front, back, categorie };
    setCards((c) => [...c, newCard]);

    if (IsDisplayed === true) {
      const cardBox = document.querySelector("#addCardBox");
      cardBox.style.display = "none";
      IsDisplayed = false;
    }
    
  }

  return (
    <>
      <div className="w-screen h-screen flex pl-80">
        <Nav AddCard={addCard} />
        <div className="flex flex-col w-full">
          <Search />
          <div
            className="flex h-full justify-evenly my-14 flex-wrap relative"
            id="cards-container"
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                front={card.front}
                back={card.back}
                categorie={card.categorie}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
