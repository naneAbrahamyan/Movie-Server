import NotFound from "http-errors";
import Watchlist from "../entity/watchlist.entity.js";
import movies from "./movies.service.js";
import Movie from "../entity/movies.entity.js";

class WatchListService {
  async addWatchList(user, movie_id) {
    const newValue = await new Watchlist({ user_id: user.userId, movie_id });
    newValue.save();
    const movieTitle = movies.findMovieTitleById(movie_id);
    return movieTitle;
  }

  async viewWatchList(user) {
    const userWatchList = await Watchlist.find({ user_id: user.userId })
      .populate("movie_id")
      .select('movie_id')
      .exec();
    return userWatchList;
  }

  async deleteFromWatchList(user, movie_id) {
    const result = await Watchlist.deleteOne({
      user_id: user.userId,
      movie_id,
    }).exec();
    console.log(result);
    const movieTitle = movies.findMovieTitleById(movie_id);
    return movieTitle;
  }

  async filter(user, genreIds, voteCount, sortBy, sortOrder) {
    const query = {};
    if (genreIds && genreIds.length) {
      query.genre_ids = { $in: genreIds };
    }

    if (voteCount) {
      query.vote_count = { $gte: voteCount };
    }

    const sort = {};
    if (sortBy) {
      sort[sortBy] = sortOrder || 1;
    }

    const filteredWL = await Watchlist.find({ user_id: user.userId }).exec();
    const movieIds = filteredWL.map((item) => item.movie_id);
    query._id = { $in: movieIds };

    const moviesList = await Movie.find(query).sort(sort).exec();

    return moviesList;
  }
}

export default new WatchListService();
