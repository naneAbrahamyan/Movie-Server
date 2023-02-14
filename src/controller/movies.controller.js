import axios from "axios";
import asyncHandler from "express-async-handler";
import movies from "../service/movies.service.js";
export const getMovies = asyncHandler(async (req, res) => {
  const result = await movies.getMovies();
  res.status(201).json(result);
});

export const addMovie = asyncHandler(async (req, res) => {
  const { body } = req;
  const result = await movies.postMovie(body);
  res.status(201).json(result);
});

export const addMoviesFromApi = asyncHandler(async (req, res) => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=0ea0d74041d587d10b24407ebd018913&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );
  const value = await Promise.all(
    data.data.results.map((movie) => {
      return movies.postMovie(movie);
    })
  );
  res.json(value);
});

export const filter = asyncHandler(async (req, res) => {
  const { genreIds, vote_count, sortBy, sortOrder } = req.body; //now just genre can be expanded
  const result = await movies.filter(genreIds, vote_count, sortBy, sortOrder);
  res.json(result);
});
