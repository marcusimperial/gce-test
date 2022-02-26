import express from 'express';
const app = express();
app.get('/', async (req, res) => res.send('ok'));
app.listen(8080, () => console.log('running on port 80'));