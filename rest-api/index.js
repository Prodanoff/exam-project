const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const routes = require('./routes');
const { auth } = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

mongoose.connect('mongodb://localhost/exam-react', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`DB Connected`);
});

app.use(cors());
app.use(express.json()); // IMPORTANT FOR REST API!!!

app.use(auth);

app.get('/', (req, res) => {
    res.json({ message: 'rest api on'});
});

app.use('/api', routes);
app.use(errorHandler);

app.listen(5000, console.log.bind(console, 'Server is listening on port 5000...'));
