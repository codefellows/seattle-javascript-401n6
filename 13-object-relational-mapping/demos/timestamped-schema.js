const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orm');

let nonPreTimeStampSchema = new mongoose.Schema({ date: Date, });
let timeStampSchema = new mongoose.Schema({ date: Date, });

timeStampSchema.pre('save', function(next) {
  this.date = new Date();
  next();
});

let TimeStamp = mongoose.model('TimeStamp', timeStampSchema);
let NonPreTimeStamp = mongoose.model('NonPreTimeStamp', nonPreTimeStampSchema);

let now = new TimeStamp();
let nonPreNow = new NonPreTimeStamp();

Promise.all([
  now.save(),
  nonPreNow.save()
])
.then(saved => {
  console.log("    pre timestamp", saved[0].date);
  console.log("non pre timestamp", saved[1].date);
})
.then(() => {
  mongoose.disconnect();
})
.catch((err) => {
  console.log('Error', err);
  mongoose.disconnect();
});


