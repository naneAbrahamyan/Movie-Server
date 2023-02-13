import mongoose from 'mongoose';
import Genre from './genre.entity.js'
const { Schema } = mongoose;

const schema = new Schema( 
    {
            adult: Boolean,
            backdrop_path: String,
            genre_ids:  [{ type: Number, ref: 'Genre' }],
            id: Number,
            original_language: String,
            original_title: String,
            overview: String,
            popularity: Number,
            poster_path: String,
            release_date: String,
            title: String,
            video:  Boolean,
            vote_average: Number,
            vote_count: Number,
        
},

{collection: 'movies'}
);

export default mongoose.model("Movies", schema);



