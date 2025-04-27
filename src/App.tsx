import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StyledComponentsPage from './pages/StyledComponentsPage';
import TailwindCSSPage from './pages/TailwindCSSPage';

function App() {
  return (
    <Router>
      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/styled" className="text-blue-500 hover:underline">
              Styled Components
            </Link>
          </li>
          <li>
            <Link to="/tailwind" className="text-green-500 hover:underline">
              Tailwind CSS
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/styled" element={<StyledComponentsPage />} />
          <Route path="/tailwind" element={<TailwindCSSPage />} />
          <Route path="/" element={
            <div className="text-center">
              Bem-vindo! Navegue pelas rotas acima.
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;