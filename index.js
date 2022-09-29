import express from "express";
import todoRoutes from './routes/todo.route';
import userRoutes from './routes/user.route'

const app = express();

const port = process.env.PORT || 3000;

// middleware 
app.use(
  express.urlencoded({
    extended: true,
  })
);

// // middlware
app.use(express.json())

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);


app.listen(port, () => {
    console.log(`Server started on ${port}`);
})


