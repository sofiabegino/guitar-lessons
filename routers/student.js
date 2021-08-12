const express = require('express');

const router = express.Router();
const Chapter = require('../models/Chapter');
const Student = require('../models/Student');

router.get('/', async (req, res) => {
  const chapters = await Chapter.find().exec();
  res.render('student/index.ejs', { chapters });
});

router.get('/exists', async (req, res) => {
  const count = await Student.estimatedDocumentCount().exec();

  res.json({ count });
});

router.post('/', async (req, res) => {
  const count = await Student.estimatedDocumentCount().exec();

  if (count === 0) {
    Student.create(req.body, (err) => {
      if (err) {
        res.sendStatus(400);
        return;
      }

      res.sendStatus(200);
    });
  } else {
    res.sendStatus(400);
  }
});

router.post('/profile/update', async (req, res) => {
  Student.findOneAndUpdate({}, req.body, { sort: { created_at: -1 } }, (err) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.sendStatus(200);
  });
});

router.get('/new', (req, res) => {
  res.render('student/createProfile');
});

router.get('/profile', async (req, res) => {
  const student = await Student.findOne({}, {}, { sort: { created_at: -1 } }).exec();
  res.render('student/modifyProfile', { student });
});

module.exports = router;
