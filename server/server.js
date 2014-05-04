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
  Meteor.publish('games', function(){
    return Games.find();
  });
});