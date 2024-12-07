import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import AllMovies from './components/AllMovies.jsx';
import AddMovies from './components/AddMovies.jsx';
import MyFavorites from './components/MyFavorites.jsx';
import ExtraRoute from './components/ExtraRoute.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import { fetchURL } from '../fetchURL.js';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import MovieDetails from './components/MovieDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <AddMovies></AddMovies>,
      },
      {
        path: "/my_fav",
        element: <MyFavorites></MyFavorites>,
      },
      {
        path: "/extra_route",
        element: <ExtraRoute></ExtraRoute>,
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
        element: <MovieDetails></MovieDetails>,
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
