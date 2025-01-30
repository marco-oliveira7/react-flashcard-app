import style from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Card(props) {
  const idInterval = useRef(null);
  const backBox = document.createElement("div");
  const answerContent = ` <i class="fa-solid fa-xmark x"></i>
                          <div class="answer-container">                            
                              <p>${props.back}</p>
                          </div>
                          <div class="button-container"> 
                            <button class="rating bad" id="bad">Bad</button>
                            <button class="rating medium" id="medium">Medium</button>
                            <button class="rating good" id="good">Good</button>
                          </div>`;

  function DisplayAnswer() {
    backBox.className = style.backBox;
    backBox.innerHTML = answerContent;
    document.body.appendChild(backBox);
    const xElement = document.querySelectorAll(".x");

    xElement.forEach((x) => {
      x.addEventListener("click", () => {
        backBox.style.display = "none";
      });
    });

    backBox.style.display = "flex";

    const badButton = document.querySelector("#bad");
    const mediumButton = document.querySelector("#medium");
    const goodButton = document.querySelector("#good");

    badButton.addEventListener("click", () => handleInterval(1), console.log("sim"));
    mediumButton.addEventListener("click", () => handleInterval(5));
    goodButton.addEventListener("click", () => handleInterval(15));
  }

  function handleInterval(timer) {
    const viewBackButton = document.querySelector("#viewBackButton");
    backBox.style.display = "none";
    viewBackButton.disabled = true;

    if (timer === 1) {
      let seconds = 60;
      
      idInterval.current = setInterval(() => {
        seconds -= 1;
        if (seconds === 0) {
          clearInterval(idInterval.current);
          viewBackButton.disabled = false;
        }
      }, 1000);
    } else if (timer === 5) {
      let seconds = 300;

      idInterval.current = setInterval(() => {
        seconds -= 1;
        if (seconds === 0) {
          clearInterval(idInterval.current);
          viewBackButton.disabled = false;
        }
      }, 1000);
    } else {
      let seconds = 900;

      idInterval.current = setInterval(() => {
        seconds -= 1;
        if (seconds === 0) {
          clearInterval(idInterval.current);
          viewBackButton.disabled = false;
        }
      }, 1000);
    }
  }

  function DeleteCard() {
    const xElement = document.querySelectorAll(".xMark");
    xElement.forEach((x) => {
      x.addEventListener("click", () => {
        x.parentElement.remove();
        backBox.remove();
      });
    });
  }

  return (
    <div
      className="card bg-gray-200 h-4/6 w-1/4 m-4 border-slate-600 border-2 rounded-xl
        flex flex-col justify-evenly items-center transition-all relative"
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="xMark cursor-pointer mr-3 absolute top-2 right-1 text-2xl"
        id="deleteCard"
        onClick={DeleteCard}
      />
      <p className="text-xl text-gray-800 font-semibold categorie">
        {props.categorie}
      </p>
      <p className="text-2xl text-gray-900 font-semibold front">
        {props.front}
      </p>
      <button
        className="py-2 px-3 bg-gray-600 text-white font-semibold rounded-2xl"
        id="viewBackButton"
        onClick={DisplayAnswer}
      >
        View Back
      </button>
    </div>
  );
}
