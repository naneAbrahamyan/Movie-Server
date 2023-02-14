import asyncHandler from "express-async-handler";

import watchlist from "../service/watchlist.service.js";

export const getWatchList = asyncHandler(async (req, res) => {
  const movieList = await watchlist.viewWatchList(req.user);
  res.json(movieList);
});

export const addToWatchList = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await watchlist.addWatchList(req.user, id);
  res.send(`Successfully added movie : ${result}`); //to be changed to real movie name
});

export const deleteFromWatchList = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await watchlist.deleteFromWatchList(req.user, id);
  res.send(`Removed movie with ${result}`);
});

export const filter = asyncHandler(async (req, res) => {
  const { genreIds, vote_count, sortBy, sortOrder } = req.body; // basic filter
  const result = await watchlist.filter(
    req.user,
    genreIds,
    vote_count,
    sortBy,
    sortOrder
  );
  res.json(result);
});
