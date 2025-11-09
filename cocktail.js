/** @format */

// Cocktail data array
const drinks = [
  {
    drink_name: "Peppermint Martini",
    ingredients: "Vodka, Peppermint schnapps, Cream",
    recipe: "Shake 2 oz vodka + 1 oz peppermint schnapps + 1 oz cream with ice.",
    calories: "290 calories",
    img: "peppermint_martini.png"
  },
  {
    drink_name: "Cranberry Mule",
    ingredients: "Vodka, Ginger beer, Cranberry",
    recipe: "Add vodka + cranberry + ice, top with ginger beer.",
    calories: "180 calories",
    img: "cranberry_mule.png"
  },
  {
    drink_name: "Winter Sangria",
    ingredients: "Red wine, Apples, Cinnamon",
    recipe: "Combine wine, sliced apples, cinnamon; chill 4 hours.",
    calories: "220 calories",
    img: "winter_sangria.png"
  },
  {
    drink_name: "Holiday Punch (Mocktail)",
    ingredients: "Cranberry, Orange juice, Sparkling water",
    recipe: "Mix equal parts juices + sparkling water; garnish with berries.",
    calories: "110 calories",
    img: "holiday_punch.png"
  },
  {
    drink_name: "Gingerbread Hot Chocolate",
    ingredients: "Cocoa, Gingerbread syrup, Milk",
    recipe: "Heat milk – mix in cocoa + syrup – top with whipped cream.",
    calories: "260 calories",
    img: "gingerbread_hot_chocolate.png"
  }
];

// Function to populate cards
const setUpBoxes = () => {
  let wrapperRef = $(".wrapper");
  drinks.forEach((drink) => {
    let cardMarkup = `
      <div class="box">
        <img class="drink_img" src="./images/${drink.img}" />
        <p class="info_text">
          <strong>${drink.drink_name}</strong><br>${drink.ingredients}
        </p>
      </div>
    `;
    wrapperRef.append(cardMarkup);
  });
};

// Show base information for all drinks
const establishInitialInfo = (index) => {
  $(".info_text")
    .eq(index)
    .html(
      `<strong>${drinks[index].drink_name}</strong><br>${drinks[index].ingredients}`
    );
};

// Main behavior setup
const showInformation = () => {
  setUpBoxes();

  // Initialize ingredient text
  jQuery.each($(".box"), establishInitialInfo);

  // Click → show calories
  $(".box").on("click", function () {
    let indexOfDrink = $(".box").index(this);
    $(this)
      .find("p.info_text")
      .html(
        `<strong>${drinks[indexOfDrink].drink_name}</strong><br>${drinks[indexOfDrink].calories}`
      );
  });

  // Mouseover → show recipe
  $(".box").on("mouseover", function () {
    let indexOfDrink = $(".box").index(this);
    $(this)
      .find("p.info_text")
      .html(
        `<strong>${drinks[indexOfDrink].drink_name}</strong><br>${drinks[indexOfDrink].recipe}`
      );
  });

  // Mouseout → reset to main ingredients
  $(".box").on("mouseout", function () {
    let indexOfDrink = $(".box").index(this);
    $(this)
      .find("p.info_text")
      .html(
        `<strong>${drinks[indexOfDrink].drink_name}</strong><br>${drinks[indexOfDrink].ingredients}`
      );
  });
};

// Document ready
$(document).ready(showInformation);
