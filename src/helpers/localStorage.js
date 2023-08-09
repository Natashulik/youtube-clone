export const loadFavorites = () => {
      const serializedFavorites = localStorage.getItem('allUsersFavorites');
      if (serializedFavorites == null) {
        return [];
      }
      return JSON.parse(serializedFavorites);
  };


  export const saveFavorites = favorites => {
       const serializedFavorites = JSON.stringify(favorites);
      localStorage.setItem('allUsersFavorites', serializedFavorites);
   };
