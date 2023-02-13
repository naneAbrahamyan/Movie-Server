import NotFound from 'http-errors';
import Genre from '../entity/genre.entity.js';
import axios from 'axios';

class MoviesService {
   async getGenres() {
      return Genre.find({}).exec();
   }

   async postGenre(payload){
      const  { id , name} = payload;
       const genre = new Genre({ _id: id, name});
       return genre.save();
   }

}

const genres = new MoviesService();
export default genres;