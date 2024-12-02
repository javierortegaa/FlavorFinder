import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-primary p-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} RecipeApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
