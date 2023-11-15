import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
import MovieDetails from "./containers/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularMovies />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
