import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  function SearchCard() {
    const searchValue = document.querySelector("#search").value;
    const categories = document.querySelectorAll(".categorie");
    const fronts = document.querySelectorAll(".front");

    const lowerSearchValue = searchValue.toLowerCase();

    categories.forEach((categorie) => {
      let categorieText = categorie.innerText;
      let categorieString = `${categorieText}`;
      const lowerCategorie = categorieString.toLowerCase();
      if (lowerSearchValue === lowerCategorie) {
        categorie.parentElement.style.display = "flex"
      } 
      else {
        fronts.forEach((front) => {
          let frontText = front.innerText;
          let frontString = `${frontText}`;
          const lowerFront = frontString.toLowerCase();
          if (lowerSearchValue === lowerFront) {
            categorie.parentElement.style.display = "flex"
          } else {
            categorie.parentElement.style.display = "none"
          }
        });
      }
    });
  }

  return (
    <div className="w-full relative">
      <input
        type="text"
        className="block bg-gray-200 w-11/12 h-20 rounded-3xl m-auto mt-5 p-5 text-2xl border-4 border-slate-300 outline-none transition-all focus:border-slate-400"
        id="search"
      />

      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="cursor-pointer text-2xl absolute top-12 right-24"
        onClick={SearchCard}
      />
    </div>
  );
}
