import mongoose from 'mongoose';

//update in .env file username+password ->
mongoose.connect('mongodb+srv://smthik:smthik123@cluster0.iqojifn.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.set('debug', true);

const { connection } = mongoose;

connection.once('open', () => {
  console.log('Mongodb database connection established successfully.');
});
