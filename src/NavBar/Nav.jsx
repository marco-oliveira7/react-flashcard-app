import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";


export default function Nav({ AddCard }) {
  const storedCategories = JSON.parse(localStorage.getItem("categories"));

  const [categories, setCategories] = useState(storedCategories);
  const [front, setFront] = useState();
  const [back, setBack] = useState();
  const [categorie, setCategorie] = useState([]);
  let [IsDisplayed, setIsDisplayed] = useState(false);


  useEffect(() => {
      localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);

  function ShowCardBox() {
    const cardBox = document.querySelector("#addCardBox");
    cardBox.style.display = "block";
  }
  function HideCardBox() {
    const cardBox = document.querySelector("#addCardBox");
    cardBox.style.display = "none";
  }
  function handleFrontChange(event) {
    setFront(event.target.value);
  }
  function handleBackChange(event) {
    setBack(event.target.value);
  }
  function handleCategorieChange(event) {
    setCategorie(event.target.value);
  }

  function handleAddCard() {
    setCategories((c) => [...c, categorie]);
    AddCard(front, back, categorie, (IsDisplayed = true));
    setFront("");
    setBack("");
    setCategorie([]);
    setIsDisplayed(false);
  }

  return (
    <nav className="border-r-4 w-2/12 flex flex-col justify-between items-center fixed h-full z-50 left-0">
      <div className="flex flex-col justify-around">
        <h2 className="font-bold text-xl m-10">
          <FontAwesomeIcon
            icon={faPlus}
            className="cursor-pointer mr-3"
            onClick={ShowCardBox}
          />
          Add Card
        </h2>
        <div>
          <h3 className="font-bold text-2xl ml-1 text-gray-700">Categories</h3>
          <ul className="text-xl">
            {categories.map((categorie, index) => (
              <Categories
                key={index}
                propCategorie={categorie}
              />
            ))}
          </ul>
        </div>
      </div>

      <FontAwesomeIcon
        icon={faGear}
        className="p-1 self-start text-2xl cursor-pointer"
      />
      <div
        id="addCardBox"
        className="hidden fixed bg-gray-200 border-2 border-slate-500 rounded-2xl w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="p-1 right-0 absolute text-2xl cursor-pointer"
          onClick={HideCardBox}
        />
        <div className="flex flex-col items-center mt-7">
          <label htmlFor="front" className="font-semibold">
            Front
          </label>
          <textarea
            onChange={handleFrontChange}
            value={front}
            name=""
            id="front"
            className="p-2"
          ></textarea>
        </div>
        <div className="flex flex-col items-center mt-7">
          <label htmlFor="back" className="font-semibold">
            Back (you can use HTML elements too)
          </label>
          <textarea
            onChange={handleBackChange}
            value={back}
            name=""
            id="back"
            className="p-2"
          ></textarea>
        </div>
        <div className="flex flex-col items-center mt-7">
          <label htmlFor="back" className="font-semibold">
            Categorie
          </label>
          <input
            onChange={handleCategorieChange}
            value={categorie}
            name=""
            id="categorie"
            className="p-2"
          ></input>
        </div>
        <button
          onClick={handleAddCard}
          value={IsDisplayed}
          className="m-auto bg-slate-300 p-2 block my-7  border-2 rounded-lg border-gray-700"
        >
          Add Card
        </button>
      </div>
    </nav>
  );
}
