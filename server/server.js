const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

// これで指定したoriginからのアクセスを許可する
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST'],
  credentials: true, // Cookieを残すことが可能らしい
}));

app.get('/', (rea, res) => {
  res.send('Hello');
});

app.get('/data', (req, res) => {
  res.json({
    name: 'test user',
    age: 27
  })
})

app.listen(PORT, () => console.log('server is running'));