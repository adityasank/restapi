import express from 'express';
import usersRoute from './routes/users.js'
const app = express()
const PORT = 5000;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use('/favicon.ico', express.static('public/favicon.ico'));
app.use('/users', usersRoute)
app.get('/', (req, res) =>
    res.send('Hello i am food ')
)
app.listen(PORT, () => console.log(`Server running on ${PORT}`))