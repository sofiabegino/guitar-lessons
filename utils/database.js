const mongoose = require('mongoose');

mongoose.plugin((schema) => {
  schema.pre('findOneAndUpdate', setRunValidators);
});

function setRunValidators() {
  this.setOptions({ runValidators: true });
}

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nxnu1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

const db = mongoose.connection;

db.on('open', () => console.log('MongoDB connection successful'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;
