import { useState, useEffect } from "react";

const STORAGE_KEY = "favoriteMovieIds";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id: number): boolean => favorites.includes(id);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return { favorites, isFavorite, toggleFavorite };
};

export default useFavorites;
