import express from 'express';
import morgan from 'morgan';
const app = express();
const port = 8080;

app.use(morgan('combined'));
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Welcome to the server!' });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
