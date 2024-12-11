import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import AllMovies from './components/AllMovies.jsx';
import AddMovies from './components/AddMovies.jsx';
import MyFavorites from './components/MyFavorites.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import { fetchURL } from '../fetchURL.js';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import UpdateMovie from './components/UpdateMovie.jsx';
import PrivateRouter from './PrivateRouter.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ContactUs from './components/ContactUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_movies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch(`${fetchURL}/movies`),
      },
      {
        path: "/add_movies",
        element: <PrivateRouter><AddMovies></AddMovies></PrivateRouter>,
      },

      {
        path: "/update_movie/:id",
        element: <UpdateMovie></UpdateMovie>,
        loader: ({params})=> fetch (`${fetchURL}/movies/${params.id}`)
      },
      {
        path: "/my_fav/",
        element: <PrivateRouter><MyFavorites></MyFavorites></PrivateRouter>,
         
        
      },
      {
        path: "/contact_us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/movies/:id",
        element: <PrivateRouter><MovieDetails></MovieDetails></PrivateRouter>,
        loader: ({params})=> fetch(`${fetchURL}/movies/${params.id}`)
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
