import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

const RecipeDetail = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const RECIPES_PER_PAGE = 9;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/recipes");
        setRecipes(res.data);
        setFilteredRecipes(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipes();
  }, []);

  const handleSearch = () => {
    const filtered = recipes.filter((recipe) =>
      [recipe.Name, recipe.Description, recipe.RecipeCategory]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
    setCurrentPage(1);
  };

  const indexOfLastRecipe = currentPage * RECIPES_PER_PAGE;
  const indexOfFirstRecipe = indexOfLastRecipe - RECIPES_PER_PAGE;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.ceil(filteredRecipes.length / RECIPES_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-primary mb-6 text-center">
        Welcome to Flavor Finder!
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-3/4 max-w-lg p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="ml-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          Search
        </button>
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.RecipeId}
            title={recipe.Name}
            description={recipe.Description}
            prepTime={recipe.PrepTime}
            cookTime={recipe.CookTime}
            servings={recipe.RecipeServings}
            category={recipe.RecipeCategory}
            ingredients={[]} // Include ingredients if available
            steps={[]} // Include steps if available
          />
        ))}
      </div>

      {/* Pagination */}
      {filteredRecipes.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 border rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Previous
          </button>
          <span className="px-4 py-2 mx-1">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 border rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}

      {/* No Results Message */}
      {filteredRecipes.length === 0 && (
        <div className="text-center text-gray-600 mt-6">
          No recipes found. Try a different search term.
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
