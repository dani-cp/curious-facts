import { get_fact } from './data.js';
import { add_favorite, list_favorites } from './favorites.js';

const fact_text = document.querySelector(".card_facts_text")

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
    favorites_list_elem.innerHTML = "";

    if (favorites_list.length === 0) {
        favorites_list_elem.innerHTML = "<li>No favorites yet</li>";
    } else {
        favorites_list.forEach((fact) => {
            const list_item = document.createElement("li");
            list_item.textContent = fact;
            favorites_list_elem.appendChild(list_item);
        });
    }
    document.querySelector("main").style.display = "none";
    document.getElementById("home").style.display = "block";
};

const refresh = () => {
    location.reload();
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("button_new_fact").addEventListener("click", new_fact);
    document.getElementById("button_add_favorite").addEventListener("click", favorite);
    document.getElementById("button_favorites").addEventListener("click", favorites);
    document.getElementById("home").addEventListener("click", refresh);
});