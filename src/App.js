import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const API_URL = "http://www.omdbapi.com/?apikey=cd6623af";
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    searchMovie({ search });
  }, [search]);
  return (
    <div className="App box-border pt-[30px] sm:pt-[40px] lg:pt-[50px] mx-auto flex flex-col gap-y-[20px] items-center min-h-screen font-Poppins text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1 className="font-extrabold text-5xl cursor-pointer">MovieLand</h1>
      <div className="search flex flex-col sm:flex-row gap-[5px] justify-center items-center">
        <input
          type="text"
          className="h-[45px] w-[300px] sm:w-[500px] rounded-xl px-[10px] text-black outline-none border-2 border-white focus:border-pink-500"
          placeholder="Search for your favorite film"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="w-[150px] h-[45px] bg-indigo-500 shadow-lg shadow-indigo-500/50 px-[10px] text-lg font-semibold rounded-xl"
          onClick={() => searchMovie(search)}
        >
          Search Now
        </button>
      </div>
      {movies?.length > 0 ? (
        <div className="containe grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
