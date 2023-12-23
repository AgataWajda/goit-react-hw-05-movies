import { Routes, Route } from 'react-router-dom';

import { MainConteiner } from './MainConteiner/MainConteiner';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies';

import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainConteiner />}>
        <Route index element={<Home />} />
        <Route path="goit-react-hw-05-movies" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};
