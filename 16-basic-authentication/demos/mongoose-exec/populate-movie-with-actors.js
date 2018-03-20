const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
  name: String
});

const MovieSchema = new mongoose.Schema({
  title: String,
  star: {type: mongoose.Schema.Types.ObjectId, ref: 'Actor'}
});

const Actor = mongoose.model('Actor', ActorSchema);
const Movie = mongoose.model('Movie', MovieSchema);

mongoose.connect('mongodb://localhost/mongoose-exec')
.then(() => {
  return Promise.all([
    Actor.remove(),
    Movie.remove()
  ]);
})
.then(() => {
  let brad = new Actor({name: 'Brad Pitt'});
  let keanu = new Actor({name: 'Keanu Reeves'});
  return Promise.all([brad.save(), keanu.save()]);
})
.then(actors => {
  let fightClub = new Movie({
    title: 'Fight Club',
    star: actors[0]
  });

  let matrix = new Movie({
    title: 'The Matrix',
    star: actors[1]
  });
   
  return Promise.all([fightClub.save(), matrix.save()]);
})
.then(() => {
  return Movie.find().populate('star');
})
.then((movies) => {
  console.log('Populated Movies:', movies);
})
.then(() => {
  mongoose.disconnect();
});