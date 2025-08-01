import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Ingredients } from './views/Ingredients';
import { MealsByIngredient } from './views/MealsByIngredient';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/meals-by-ingredient/:ingredient" element={<MealsByIngredient />} />

    </Routes>
  );
}

export default App;
