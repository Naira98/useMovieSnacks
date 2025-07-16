import { useLocalStorageState } from "./useLocalStorage";

const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorageState<number[]>([], "favoriteMovieIds");

  const isFavorite = (id: number) => favorites.includes(id);

  const toggleFavorite = (id: number) => {
    setFavorites((prev: number[]) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return { favorites, isFavorite, toggleFavorite };
};

export default useFavorites;
