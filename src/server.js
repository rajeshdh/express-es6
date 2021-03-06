// Impor node modules
import express from 'express';
// Import routes
import routes from './routes/main.routes';

const app = express();

app.use('/', routes);

// arrow functions
const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});
