Meteor.startup(function () {
  Meteor.publish('gameRanking', function(gameId){
    check(gameId, String);
    // lookup all playerIds that have played this game
    // and make them unique
    var playerIds = _.uniq(_.pluck(
      Scores.find({game: gameId}, {fields:{player: true}}).fetch(),
      'player'
    ));
    return [
      Scores.find({game: gameId}),
      Players.find({_id: {$in: playerIds}}),
      Games.find({_id: gameId})
    ];
  });
  Meteor.publish("gameRanking2", function (gameId) {
    var self = this;
    check(gameId, String);
    var handle = Scores.find({game: gameId}).observeChanges({
        added: function (id, data, index) {
          self.added("gameranking", id, {
            score: data.score,
            player: data.player
          });
          self.added("Scores", id, data);
          self.added("Players", data.player, Players.findOne(data.player));
        }
    });
    self.ready();
    self.onStop(function () {
      handle.stop();
    });
  });
  Meteor.publish("gameRanking3", function (gameId) {
    var self = this;
    check(gameId, String);
    var topScores = {};
    var handle = Scores.find({game: gameId}).observeChanges({
        added: function (id, data, index) {
          if(!topScores[data.player]){
            self.added("gameranking2", data.player, {
              score: data.score,
              player: {
                _id: data.player,
                name: Players.findOne(data.player).name
              }
            });
            topScores[data.player] = data.score;
          } else if(data.score > topScores[data.player]){
            self.changed("gameranking2", data.player, {
              score: data.score
            });
            topScores[data.player] = data.score;
          }
        }
    });
    self.ready();
    self.onStop(function () {
      handle.stop();
    });
  });
  Meteor.publish('games', function(){
    return Games.find();
  });
});