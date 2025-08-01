// src/views/MealsByIngredient.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components/card';
import MainLayout from '../layout/MainLayout';
import { LoadingIndicator } from '../components/LoadingIndicator';

const BASE_URL = import.meta.env.VITE_API_BASE_URI;

export function MealsByIngredient() {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealsByIngredient = async () => {
      try {
        const res = await fetch(`${BASE_URL}?i=${ingredient}`);
        const data = await res.json();
        setMeals(data.meals || []);
      } catch (err) {
        console.error('Error fetching meals:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMealsByIngredient();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Meals with "{ingredient}"</h2>

        {loading ? (
          <LoadingIndicator />
        ) : meals.length === 0 ? (
          <p className="text-center text-gray-600">No meals found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal, index) => (
  <         Card key={`${meal.idMeal || index}-${index}`} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
