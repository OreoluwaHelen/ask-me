import express from 'express';
import bodyparser from 'body-parser';

const app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send({ message: 'welcome to ask me' }));

app.listen(3000, () => console.log('app started!!!'));

export default app;
