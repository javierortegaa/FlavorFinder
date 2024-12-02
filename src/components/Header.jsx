import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Flavor Finder</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a
                href="/"
                className="hover:text-accent transition-colors duration-300 bg-white text-primary py-2 px-4 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-accent transition-colors duration-300 bg-white text-primary py-2 px-4 rounded"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
