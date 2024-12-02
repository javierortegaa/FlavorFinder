import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeDetail from "./pages/RecipeDetail";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="mt-4"></div>{" "}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<RecipeDetail />} />
          </Routes>
        </main>
        <div className="mb-4"></div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
