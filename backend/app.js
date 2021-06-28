const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello BG');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
