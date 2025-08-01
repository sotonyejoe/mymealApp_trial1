import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="bg-gray-800 flex items-center justify-between py-6 px-8 mb-8 shadow-md">
      <div>
        <h1 className="text-3xl font-bold text-white">Meal Search</h1>
        <p className="text-gray-400 text-sm mt-1">Find your favorite meals instantly</p>
      </div>

      <div className="space-x-6">
        <NavLink
          to="/"
          className={({isActive}) => isActive ? "text-indigo-600 p-2" : "text-white p-2" }
        >
          Home
        </NavLink>

        <NavLink
          to="/ingredients"
          className={({isActive}) => isActive ? "text-indigo-600 p-2" : "text-white p-2" }
        >
          Ingredient
        </NavLink>
      </div>
    </nav>
  );
}
