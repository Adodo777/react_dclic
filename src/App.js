import { BrowserRouter, Routes, Route, NavLink, } from 'react-router-dom';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Articles from './components/pages/articles/Articles';
import ArticleDetailsPage from './components/pages/articles/ArticleDetails';
import Event from './components/pages/event/Event';
import NotFound from './components/pages/notFound/NotFound';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = "Mon Mini Blog";
    return () => {
      document.title = "Mon Mini Blog";
    }
  }, [])
  return (
    <BrowserRouter>

      <header className='flex gap-4 justify-center py-4 mb-8 bg-black'>
        <NavLink to="/" className="text-white px-4 py-2 rounded-lg hover:border-2 hover:border-white">Home</NavLink>        
        <NavLink to="/articles" className=" text-white px-4 py-2 rounded-lg hover:border-2 hover:border-white">Articles</NavLink>
        <NavLink to="/about" className=" text-white px-4 py-2 rounded-lg hover:border-2 hover:border-white">About</NavLink>
      </header>

      <Routes>
        
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/event" element={<Event />}  />
        <Route path="/articles/:id" element={<ArticleDetailsPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Mon Mini Blog. Tous droits reservés.</p>
        </div>
      </footer>

    </BrowserRouter>
  );
}

export default App;
