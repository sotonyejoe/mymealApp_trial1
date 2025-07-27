import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from '../components/card';
import MainLayout from '../layout/MainLayout';
import { SearchForm } from '../components/SearchForm';
import { LoadingIndicator } from '../components/LoadingIndicator';

const BASE_URL = import.meta.env.VITE_API_BASE_URI;

export function Home() {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [heading, setHeading] = useState('RandomMeals')

  const handleSearch = (query) => {
    setLoading(true);
    const url = `${BASE_URL}?s=${query}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHeading(`Search results for ${query}`)
        setMeals(data.meals || []); // Ensure it handles null
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false)
      });
  };

  const fetchRandomMeals = async () => {
    try {
      setLoading(true);
      const mealPromises = Array.from({ length: 6 }, () =>
        fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((res) => res.json())
      );

      const results = await Promise.all(mealPromises);
      const fetchedMeals = results.map((result) => result.meals[0]);
      setMeals(fetchedMeals);

    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false); // ensure loading state stops
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);


  return (
     <MainLayout>
      <div className="min-h-screen p-5">
        <div className="grid grid-row-1 sm:grid-row-1 md:grid-row gap-8 ">
           <SearchForm 
           search={search}
           setSearch={setSearch}
           handleSearch={handleSearch} 
           />
        </div>

        <h2 className='text-xl font-bold mb-4'>{heading} </h2>
        {loading ? (
          <LoadingIndicator />
        ) : meals.length === 0 ? (
          <p className="text-center mt-4 text-gray-600">No meals found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
            {meals.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  )
}
