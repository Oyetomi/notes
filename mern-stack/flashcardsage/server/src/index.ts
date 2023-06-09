import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import Deck from "./models/Deck";

const PORT = "9000";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/decks", async (req: Request, res: Response) => {
  const decks = await Deck.find();
  res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
  const deckId = req.params.deckId;
  const deck = await Deck.findByIdAndDelete(deckId);
  res.json(deck);
});

mongoose.connect(process.env.MONGO_URL ?? "").then(() => {
  console.log(`Listening on port ${PORT}`);
  app.listen(PORT);
});
