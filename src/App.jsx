import './App.css';
import { Routes } from 'react-router-dom'

function App() {
  return (
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/ingredients" element={<Ingredients />}/>
   </Routes>
  );
}

export default App;
