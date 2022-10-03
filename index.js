import express from "express";
import dbConnect from './dbConnect'
import todoRoutes from './routes/todo.route';
import userRoutes from './routes/user.route'
import trainerRoutes from './routes/trainer.route'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

dbConnect();

// middleware 
app.use(
  express.urlencoded({
    extended: true,
  })
);

// // middlware
app.use(express.json())

app.use('/api/todos', todoRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/trainers', trainerRoutes);


app.listen(port, () => {
    console.log(`Server started on ${port}`);
})


