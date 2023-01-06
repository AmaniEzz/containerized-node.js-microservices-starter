import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/store", (req, res) => {
  res.status(200).send({ message: "Get Response from store server!" });
});

const port = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Store server listening on port ${port}`);
});
