import { show_toast } from './toast.js'
let favorites = [];

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
  return !favorites.includes(fact)
    ? (favorites.push(fact), save_favorites(), show_toast("Added to favorites."), true)
    : (show_toast("This fact is already in favorites."), false);
};

export const list_favorites = () => {
  load_favorites();
  return favorites.length === 0
    ? ["No favorites yet"]
    : favorites;
};
