import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'hello, flyrank!',
  });
});

app.post('/greet', (req, res, next) => {
  const { name } = req.body;
  if (name)
    return res.status(200).json({
      message: `hello, ${name}`,
    });

  res.status(400).json({
    message: 'no name provided',
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
