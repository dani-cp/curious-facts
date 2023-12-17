let favorites = [];

const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

const get_data = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();
        return data.text;
    } catch (error) {
        throw error;
    }
};

const new_fact = async () => {
  try {
    const fact = await get_data();
    document.querySelector(".card_facts_text").innerHTML = fact;
    return fact;
  } catch (error) {
    console.error("Error fetching new fact:", error);
  }
};

const add_favorite = async () => {
    try {
        const displayed_fact = document.querySelector(".card_facts_text").innerHTML;
        if (displayed_fact) {
            if (!favorites.includes(displayed_fact)) {
                favorites.push(displayed_fact);
                console.log("Fact added to favorites:", displayed_fact);
                alert("Added to favorites");
            } else {
                alert("This fact is already in favorites.");
            }
        } else {
            console.error("Error adding favorite: No displayed fact available");
        }
    } catch (error) {
        console.error("Error adding favorite:", error);
    }
};


const list_favorites = () => {
  try {
    document.querySelector("main").style.display = "none";
    const favorites_list = document.getElementById("list_favorites");
    favorites_list.innerHTML = "";

    if (favorites.length === 0) {
      favorites_list.innerHTML = "<li>No favorites yet</li>";
    } else {
      favorites.forEach((fact) => {
        const list_item = document.createElement("li");
        list_item.textContent = fact;
        favorites_list.appendChild(list_item);
      });
    }
  } catch (error) {
    console.error("Error listing favorites:", error);
  } document.getElementById("button_home").style.display = "block"
};


const refresh = () => {
location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("button_new_fact").addEventListener("click", new_fact);
  document.getElementById("button_add_favorite").addEventListener("click", add_favorite);
  document.getElementById("button_favorites").addEventListener("click", list_favorites);
  document.getElementById("button_home").addEventListener("click", refresh);
});