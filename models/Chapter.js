const mongo = require('../utils/database');

const { Schema } = mongo;

const ChapterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  content: {
    type: String,
    required: true,
  },
  songName: String,
  link: String,
  tips: String,
  tablature: [{ type: Object }],
  finished: Boolean,
});

const ChapterModel = mongo.model('Chapter', ChapterSchema);

module.exports = ChapterModel;
