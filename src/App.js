import { BrowserRouter, Routes, Route, NavLink,  } from 'react-router-dom';
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
      <div className='flex gap-4 justify-center py-4 mb-8 bg-gray-100'>
        <NavLink to="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Home</NavLink>
        <NavLink to="/about" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">About</NavLink>
        <NavLink to="/articles" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Articles</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
