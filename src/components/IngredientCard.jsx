// IngredientCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function IngredientCard({ ingredient }) {
  return (
    <Link
      to={`/meals-by-ingredient/${ingredient.strIngredient}`}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer block"
    >
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {ingredient.strIngredient}
      </h3>
    </Link>
  );
}
