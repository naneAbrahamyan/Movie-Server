import Genre from "../models/genre.entity.js";

class MoviesService {
  getGenres() { //removed async as at wasn't needed
    return Genre.find({}).exec();
  }

  postGenre(payload) {
    const { id, name } = payload;
    const genre = new Genre({ _id: id, name });
    return genre.save();
  }
}

const genres = new MoviesService();
export default genres;
