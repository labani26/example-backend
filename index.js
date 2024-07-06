import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import blogRouter from './routes/blog.js';

const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Ensure views directory is set correctly

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'static')));

// Use the routes defined in routes/blog.js
app.use('/', blogRouter);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.listen(3000);
