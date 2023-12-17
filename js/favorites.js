let favorites = [];

const show_toast = (message) => {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
};

const load_favorites = () => {
  const stored_favorites = localStorage.getItem('favorites');
  if (stored_favorites) {
    favorites = JSON.parse(stored_favorites);
  }
};

const save_favorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const add_favorite = (fact) => {
  load_favorites();
  if (!favorites.includes(fact)) {
    favorites.push(fact);
    save_favorites();
    show_toast("Added to favorites.");
    return true;
  } else {
    show_toast("This fact is already in favorites.");
    return false;
  }
};

export const list_favorites = () => {
  load_favorites();
  return favorites.length === 0 ? ["No favorites yet"] : favorites;
};
