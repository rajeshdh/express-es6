// Import node module
import express from 'express';
const router = express.Router();

// Arrow functions
router.get('/', (req, res) => {
  res.send({message: 'Hello World!!'});
});

export default router;
