require('dotenv').config();

const express = require('express');

const app = express();
const path = require('path');
const Chapter = require('./models/Chapter');
const chapterRoute = require('./routers/chapter');
const studentRoute = require('./routers/student');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/chapters', chapterRoute);
app.use('/student', studentRoute);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/teacher', async (req, res) => {
  const chapters = await Chapter.find().exec();
  res.render('teacher/index.ejs', { chapters });
});

module.exports = app;
