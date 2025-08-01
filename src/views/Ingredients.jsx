// views/Ingredients.jsx
import React, { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { IngredientCard } from '../components/IngredientCard';

const BASE_URL = import.meta.env.VITE_API_BASE_URI;

export function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openCard, setOpenCard] = useState(null); // holds the currently open card

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const res = await fetch(`${BASE_URL}?i=list`);
        const data = await res.json();
        setIngredients(data.meals.slice(0, 12));
      } catch (error) {
        console.error('Failed to fetch ingredients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Ingredients</h2>

        {loading ? (
          <LoadingIndicator />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={`${ingredient.idIngredient}-${index}`}
              ingredient={ingredient}
              isOpen={openCard === ingredient.idIngredient}
              onToggle={() =>
                setOpenCard(
                  openCard === ingredient.idIngredient ? null : ingredient.idIngredient
                )
              }
            />
          ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
