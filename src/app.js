import "./mongo.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import users from "./routes/users.route.js";
import movies from "./routes/movies.route.js";
import genres from "./routes/genre.route.js";
import watchlist from "./routes/watchlist.route.js";
import jwtMiddleware from "./common/auth.middleware.js";
import handleError from "./common/error-handler.middleware.js";
import dotenv from 'dotenv';

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));


app.use(
  jwtMiddleware.unless({
    path: ["/users/login", "users/", "/movies", "/genres", "/movies/filter"],
  })
);

app.use("/users", users);
app.use("/movies", movies);
app.use("/watchlist", watchlist);
app.use("/genres", genres);
app.use(handleError)

app.get("/", (req, res) => {
  res.status(200).send("I work!");
});


export default app;
