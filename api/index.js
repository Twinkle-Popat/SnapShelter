import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect("mongodb+srv://twinkle:twinkle@snapshelter.5ldxzpf.mongodb.net/?retryWrites=true&w=majority&appName=SnapShelter").then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error:', error);
});
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});