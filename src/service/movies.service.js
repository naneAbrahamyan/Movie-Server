import NotFound from "http-errors";
import Movie from "../models/movies.entity.js";

class MoviesService {
  getMovies() {
    return Movie.find({}).exec();
  }

  postMovie(payload) {
    const movie = new Movie(payload);
    return movie.save();
  }

  filter(genreIds, voteCount, sortBy, sortOrder) {
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

    return Movie.find(query).sort(sort).exec();
  }

  async findMovieTitleById(movieId) {
    const movie = await Movie.findById(movieId).select("title");
    return movie;
  }
}

const movies = new MoviesService();
export default movies;
