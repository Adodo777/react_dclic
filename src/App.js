import { BrowserRouter, Routes, Route, NavLink, } from 'react-router-dom';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Articles from './components/pages/articles/Articles';
import ArticleDetailsPage from './components/pages/articles/ArticleDetails';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Dashbord from './components/pages/dashbord/Dashbord';
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

      {
        // hide hearder on login, dashbord and register pages
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/dashbord" &&
        window.location.pathname !== "/register" &&
        window.location.pathname !== "/articles/:id" &&
        window.location.pathname !== "/event" &&
        <header className='flex gap-4 justify-center py-4 mb-8 bg-black'>
        <NavLink to="/" className="text-white btn btn-primary px-4 py-2 rounded-lg hover:border-2 hover:border-white">Home</NavLink>        
        <NavLink to="/articles" className=" text-white px-4 py-2 rounded-lg hover:border-2 hover:border-white">Articles</NavLink>
        <NavLink to="/about" className=" text-white px-4 py-2 rounded-lg hover:border-2 hover:border-white">About</NavLink>
        <NavLink to="/login" className=" text-white px-4 py-2 rounded-lg hover:border-2 hover:border-white">Login</NavLink>
        <NavLink to="/register" className=" text-white px-4 py-2 rounded-lg hover:border-2 hover:border-white">Register</NavLink>
      </header>
      }

      <Routes>
        
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
