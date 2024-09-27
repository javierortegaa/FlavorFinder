const RECIPE_DB = {
  chocolate_chip_cookies: {
    name: "Chocolate Chip Cookies",
    ingredients: [
      "1 cup sugar",
      "2 cups flour",
      "1 cup chocolate chips",
      "2 eggs",
      "1 tsp vanilla",
    ],
    nutritional_info: {
      calories: 200,
      protein: "2g",
      fat: "10g",
      carbs: "28g",
    },
    cuisine: "American",
    taste_profile: "Sweet",
    dietary_restrictions: ["Vegetarian"], // Can include multiple restrictions
    instructions:
      "Preheat oven to 350°F, mix ingredients, and bake for 12 minutes.",
  },

  spicy_tofu_stir_fry: {
    name: "Spicy Tofu Stir Fry",
    ingredients: [
      "1 block tofu",
      "1 bell pepper",
      "2 tbsp soy sauce",
      "1 tbsp chili sauce",
      "1 tsp sesame oil",
    ],
    nutritional_info: {
      calories: 300,
      protein: "12g",
      fat: "14g",
      carbs: "22g",
    },
    cuisine: "Asian",
    taste_profile: "Spicy",
    dietary_restrictions: ["Vegan", "Gluten-Free"],
    instructions:
      "Stir fry tofu and vegetables with soy sauce and chili sauce.",
  },

  garden_salad: {
    name: "Garden Salad",
    ingredients: [
      "1 head of lettuce",
      "1 cucumber",
      "1 tomato",
      "1/4 cup olive oil",
      "1 tbsp vinegar",
    ],
    nutritional_info: {
      calories: 150,
      protein: "2g",
      fat: "10g",
      carbs: "12g",
    },
    cuisine: "International",
    taste_profile: "Savory",
    dietary_restrictions: ["Vegan", "Gluten-Free", "Low-Carb"],
    instructions: "Chop vegetables, mix with oil and vinegar dressing.",
  },
};
