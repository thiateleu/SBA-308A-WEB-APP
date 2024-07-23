/////////////////// mymodule.js /////////////////////

export const renderCocktail = (cocktailContainer, cocktail) => {
  const cocktailHTML = `
        <h2>${cocktail.strDrink}</h2>
        <img src="${cocktail.strDrinkThumb}" alt="${
    cocktail.strDrink
  }" id="cocktail-image" />
        <p>${cocktail.strInstructions}</p>
        <ul>
          ${Object.keys(cocktail)
            .filter((key) => key.startsWith("strIngredient") && cocktail[key])
            .map((key) => `<li>${cocktail[key]}</li>`)
            .join("")}
        </ul>
      `;

  cocktailContainer.innerHTML = cocktailHTML;

  // Return the image element for adding the event listener
  return document.getElementById("cocktail-image");
};

export const displayError = (cocktailContainer, message) => {
  cocktailContainer.innerHTML = `<p>${message}</p>`;
};

export const createCocktail = (cocktails) => {
  const newCocktail = {
    id: Date.now().toString(),
    strDrink: "New Cocktail",
    strInstructions: "Mix and enjoy!",
    strIngredient1: "Ingredient 1",
    strIngredient2: "Ingredient 2",
    strDrinkThumb: "https://via.placeholder.com/300",
  };

  cocktails.push(newCocktail);
  console.log("Created cocktail:", newCocktail);
  alert("New cocktail created!");
};

export const updateCocktail = (currentCocktail) => {
  if (!currentCocktail) {
    alert("No cocktail selected to update.");
    return;
  }

  currentCocktail.strDrink = "Updated Cocktail";
  console.log("Updated cocktail:", currentCocktail);
  alert("Cocktail updated!");
};

export const deleteCocktail = (
  cocktails,
  currentCocktail,
  cocktailContainer
) => {
  if (!currentCocktail) {
    alert("No cocktail selected to delete.");
    return;
  }

  cocktails = cocktails.filter(
    (cocktail) => cocktail.id !== currentCocktail.id
  );
  currentCocktail = null;
  cocktailContainer.innerHTML = "<p>Cocktail deleted!</p>";
  console.log("Deleted cocktail:", currentCocktail);
  alert("Cocktail deleted!");
  return cocktails;
};
