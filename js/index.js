import { get_fact } from "./data.js";
import { add_favorite, list_favorites } from "./favorites.js";

const fact_text = document.querySelector(".card_facts_text");

const new_fact = async () => {
  const fact = await get_fact();
  fact_text.innerHTML = fact;
  return fact;
};

const favorite = () => {
  add_favorite(fact_text.innerHTML);
};

const favorites = () => {
    const favorites_list = list_favorites();
    const favorites_list_elem = document.getElementById("list_favorites");
  
    favorites_list_elem.innerHTML = (localStorage.getItem("favorites") === null || favorites_list.length === 0)
      ? "<li>No favorites yet</li>"
      : favorites_list.map((fact) => {
          const list_item = document.createElement("li");
          list_item.textContent = fact;
          return list_item.outerHTML;
        }).join("");
  
    document.querySelector("main").style.display = "none";
    document.getElementById("home").style.display = "block";
};

  
  const refresh = () => {
    location.reload();
  };
  
  const clear = () => {
    localStorage.clear();
    favorites();
  };


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button_new_fact").addEventListener("click", new_fact);
  document.getElementById("button_add_favorite").addEventListener("click", favorite);
  document.getElementById("button_favorites").addEventListener("click", favorites);
  document.querySelector(".page_title").addEventListener("click", refresh);
  document.getElementById("button_home").addEventListener("click", refresh);
  document.getElementById("button_delete").addEventListener("click", clear);
});
