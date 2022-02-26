import express from 'express';
const app = express();
app.get('/', async (req, res) => res.send('HELLO MY NAME IS OHDARE'));
app.listen(443, () => console.log('running on port 443'));