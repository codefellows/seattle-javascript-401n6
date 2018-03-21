/* All in one file (and very basic) demo
of Mongoose populate functionality */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/football-teams');

app.use(bodyParser.json());

// Player models
const playerSchema = Schema({
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    name: String
});

const Player = mongoose.model('Player', playerSchema);

// Team model
const teamSchema = Schema({
    city: String,
    mascot: String,
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
  });
  
  const Team = mongoose.model('Team', teamSchema);

// Team routes
app.get('/teams', (req, res) => {

    if (req.query.id) {
        Team
            .find({
                _id: req.query.id
            })
            .populate('players')
            .exec()
            .then(teams => {
                res.send(teams[0]);
            })
    } else {

        Team.find().populate('players').exec().then(teams => res.send(teams));
    }
});

app.post('/teams', (req, res) => {

    Team.create({
        city: req.body.city,
        mascot: req.body.mascot
    }).then(team => {
        const playerPromises = [];
        for (player of req.body.players) {
            const playerModel = new Player({
                name: player.name,
                team: team._id
            });
            playerPromises.push(playerModel.save());
        }

        Promise.all(playerPromises).then(players => {
            team.players = players;
            team.save().then(t => res.send(t));
        })
    })
});

app.put('/teams', (req, res) => {
    Team.update({
        city: req.body.city,
        mascot: req.body.mascot
    }).then(team => {

        res.send(team);
    });
});

app.delete('/teams', (req, res) => {
    Team.remove().then(result => res.send(result));
});


// Player routes
app.get('/players', (req, res) => {

    Player.find().populate('team').
    exec(function (err, player) {
        if (err) return res.send('ouch')
        res.send(player);
    });

});

app.delete('/players', (req, res) => {
    Player.remove().then(result => res.send(result));
})


// listen for requests
app.listen(3000, () => console.log('server started'));