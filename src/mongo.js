import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`mongodb+srv://smthik:${process.env.MONGO_PASSWORD}@cluster0.iqojifn.mongodb.net/?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.set('debug', true);

const { connection } = mongoose;

connection.once('open', () => {
  console.log('Mongodb database connection established successfully.');
});
