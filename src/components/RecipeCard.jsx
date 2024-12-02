import React from "react";

const RecipeCard = ({
  title,
  description,
  ingredients,
  instructions,
  prepTime,
  cookTime,
  servings,
  category,
  calories,
  fat,
  protein,
  carbs,
}) => {
  return (
    <div className="bg-light shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-primary text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <div className="text-sm text-gray-600 mb-4">
        <p>
          <strong>Prep Time:</strong> {prepTime || "N/A"}
        </p>
        <p>
          <strong>Cook Time:</strong> {cookTime || "N/A"}
        </p>
        <p>
          <strong>Servings:</strong> {servings || "N/A"}
        </p>
        <p>
          <strong>Category:</strong> {category || "N/A"}
        </p>
      </div>

      {/* Nutrition */}
      <h3 className="text-primary font-semibold">Nutrition:</h3>
      <div className="text-sm text-gray-700 mb-4">
        <p>
          <strong>Calories:</strong> {calories || "N/A"}
        </p>
        <p>
          <strong>Fat:</strong> {fat || "N/A"}
        </p>
        <p>
          <strong>Protein:</strong> {protein || "N/A"}
        </p>
        <p>
          <strong>Carbs:</strong> {carbs || "N/A"}
        </p>
      </div>

      {/* Ingredients */}
      <h3 className="text-primary font-semibold">Ingredients:</h3>
      <ul className="list-disc pl-6 text-sm text-gray-700 mb-4">
        {ingredients && ingredients.length > 0 ? (
          ingredients
            .split(", ")
            .map((ingredient, index) => <li key={index}>{ingredient}</li>)
        ) : (
          <li>No ingredients available</li>
        )}
      </ul>

      {/* Instructions */}
      <h3 className="text-primary font-semibold">Instructions:</h3>
      <p className="text-sm text-gray-700">
        {instructions
          ? instructions.split(" | ").map((step, index) => (
              <span key={index}>
                {index + 1}. {step} <br />
              </span>
            ))
          : "No instructions available"}
      </p>
    </div>
  );
};

export default RecipeCard;
