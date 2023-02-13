import NotFound from "http-errors";
import Movie from "../entity/movies.entity.js";

class MoviesService {
  async getMovies() {
    return Movie.find({}).exec();
  }

  async postMovie(payload) {
    const movie = new Movie(payload);
    return movie.save();
  }

  async filter(genreIds, voteCount, sortBy, sortOrder) {
    const query = {};

    console.log(sortBy, "sortBy");
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

    return await Movie.find(query).sort(sort).exec();
  }

  async findMovieTitleById(movieId) {
    const movie = await Movie.findById(movieId).select('title');
    return movie;
  }}

const movies = new MoviesService();
export default movies;
