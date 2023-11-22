import express from "express";
import morgan from "morgan";
import routes from "./routes";
const app = express();
const port = 8080;
app.use(morgan("combined"));
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to the server!" });
});
routes(app);
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
