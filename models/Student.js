const mongo = require('../utils/database');

const { Schema } = mongo;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: Number,
  sex: String,
  experienceLevel: String,
  hasGuitar: Boolean,
});

const StudentModel = mongo.model('Student', StudentSchema);

module.exports = StudentModel;
