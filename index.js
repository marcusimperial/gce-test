import express from 'express';
const app = express();
app.get('/', async (req, res) => res.send('HELLO MY NAME IS OHDARE'));
app.listen(8080, () => console.log('running on port 8080'));