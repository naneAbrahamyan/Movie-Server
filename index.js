import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8050;

app.listen(port, () => {
    console.log(`Listening to port ${port}.`);
  });