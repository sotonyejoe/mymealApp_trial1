export function Card({meal}) {
  return (
    <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img src={meal.strMealThumb}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {meal.strMeal}
        </h2>
        <p className="text-gray-600 text-sm">
           {meal.strInstructions
            ? meal.strInstructions.slice(0, 100) + '...'
            : 'No instructions available.'}
        </p>
      </div>
    </div>
  );
}
