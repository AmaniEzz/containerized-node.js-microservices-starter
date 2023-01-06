import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/users", (req, res) => {
  res.status(200).send({ message: "Get Response from users server!" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Users server listening on port ${port}`);
});
