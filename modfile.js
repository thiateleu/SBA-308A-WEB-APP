/////////////////// modfile.js /////////////////

export const fetchCocktail = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    return data.drinks[0];
  } catch (error) {
    console.error("Error fetching the cocktail data:", error);
    throw error;
  }
};
