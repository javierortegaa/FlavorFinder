# FlavorFinder
# Recipe Database Project

## Overview
This project is part of the **CSCI-340 Database Final Project**. The goal of the project is to create a fully functional database that stores information about various recipes, their ingredients, cooking instructions, and nutritional details. Users can search for recipes by different criteria such as ingredient, cuisine, taste profile (sweet, spicy, savory), or dietary restrictions (e.g., vegan, gluten-free, keto).

The project demonstrates the use of relational database design principles, SQL queries, and database management concepts learned throughout the course.

## Features
- **Recipes**: Stores recipe details such as name, description, preparation time, and cooking time.
- **Ingredients**: Manages a list of ingredients that are used in recipes.
- **Recipe Ingredients**: Associates ingredients with recipes, including quantity and measurement units.
- **Instructions**: Provides step-by-step cooking instructions for each recipe.
- **Nutritional Information**: Stores nutritional details for each recipe, such as calories, protein, fat, and carbohydrates.
- **Cuisines**: Categorizes recipes based on their cuisine (e.g., Italian, Mexican, Indian).
- **Taste Profiles**: Categorizes recipes based on their taste profile (e.g., sweet, spicy, savory).
- **Dietary Restrictions**: Helps users filter recipes based on dietary preferences or restrictions (e.g., vegan, gluten-free).

## Database Design
The database is composed of multiple tables that interact through foreign key relationships:
- **Recipes**: Main table that stores general recipe information.
- **Ingredients**: Stores all ingredients used in any recipe.
- **Recipe_Ingredients**: Junction table that links recipes and ingredients, specifying the quantity and units for each.
- **Instructions**: Stores the sequence of steps for preparing each recipe.
- **Nutritional_Info**: Stores nutritional values for each recipe.
- **Cuisines, Taste_Profiles, Dietary_Restrictions**: Auxiliary tables to categorize recipes.

## How It Works
Users can perform the following actions:
- Search for recipes based on available ingredients, cuisine type, or taste profile.
- View detailed information about a specific recipe, including ingredients, instructions, and nutritional info.
- Add new recipes to the database, complete with instructions, ingredients, and nutrition facts.

## Technologies Used
- **Database**: MySQL
- **Backend**: Python
- **Frontend**: HTML CSS Javascript 
