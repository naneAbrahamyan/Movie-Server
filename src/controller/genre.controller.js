import axios from "axios";
import asyncHandler from "express-async-handler";
import genres from "../service/genre.service.js";

export const addGenresFromApi = asyncHandler(async (req, res) => {
  const data = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=0ea0d74041d587d10b24407ebd018913&language=en-US"
  );
  const value = await Promise.all(
    data.data.genres.map((movie) => {
      return genres.postGenre(movie);
    })
  );
  res.json(value);
});

export const getGenres = asyncHandler(async (req, res) => {
  const result = await genres.getGenres();
  res.status(201).json(result);
});
