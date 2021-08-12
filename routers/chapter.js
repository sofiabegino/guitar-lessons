const express = require('express');

const router = express.Router();
const Chapter = require('../models/Chapter');

router.post('/', (req, res) => {
  Chapter.create(req.body, (err, data) => {
    if (err) {
      res.sendStatus(400);
      return;
    }

    res.send(data);
  });
});

router.post('/:id/update', (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  if (!Object.keys(req.body).includes('tablature')) {
    newData.tablature = [];
  }

  Chapter.findByIdAndUpdate(id, newData, (err, data) => {
    if (err) {
      res.send(err);
      return;
    }

    res.send(data);
  });
});

router.get('/new', (req, res) => {
  res.render('teacher/createChapter');
});

router.get('/:id/edit', async (req, res) => {
  const { id } = req.params;
  const chapter = await Chapter.findById(id).exec();
  res.render('teacher/modifyChapter', { chapter });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const chapter = await Chapter.findById(id).exec();
  res.render('student/viewChapter', { chapter });
});

router.get('/:id/tablature', async (req, res) => {
  const { id } = req.params;
  const chapter = await Chapter.findById(id).exec();
  res.send(chapter.tablature);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Chapter.findByIdAndRemove(id, (err) => {
    if (err) res.sendStatus(400);

    res.sendStatus(200);
  });
});

router.post('/:id/finish', (req, res) => {
  const { id } = req.params;
  Chapter.findByIdAndUpdate(id, { finished: true }, (err) => {
    if (err) res.sendStatus(400);

    res.sendStatus(200);
  });
});

module.exports = router;
