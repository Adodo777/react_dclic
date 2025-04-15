import { BrowserRouter, Routes, Route, NavLink, } from 'react-router-dom';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Articles from './components/pages/articles/Articles';
import NotFound from './components/pages/notFound/NotFound';
import { useEffect } from 'react';

function App() {
  useEffect(() => {

  }, [])
  return (
    <BrowserRouter>

      <header className='flex gap-4 justify-center py-4 mb-8 bg-gray-100'>
        <NavLink to="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Home</NavLink>
        <NavLink to="/about" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">About</NavLink>
        <NavLink to="/articles" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Articles</NavLink>
      </header>

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <footer className="bg-blue-700 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Mon Mini Blog. Tous droits reservés.</p>
        </div>
      </footer>

    </BrowserRouter>
  );
}

export default App;
