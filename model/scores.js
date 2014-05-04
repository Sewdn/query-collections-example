Scores = new Meteor.Collection('scores');

if(Meteor.isServer){
  Meteor.startup(function () {
    //check if games exist
    if(Scores.find().count() < 1){
      _.each([
        {_id: "001", player: "001", game: "001", score: 350},
        {_id: "002", player: "002", game: "001", score: 400},
        {_id: "003", player: "003", game: "001", score: 450},
        {_id: "004", player: "001", game: "001", score: 420},
        {_id: "005", player: "001", game: "002", score: 3500},
        {_id: "006", player: "003", game: "002", score: 2500},
        {_id: "007", player: "003", game: "002", score: 3700}
      ], function(score){
        Scores.insert(score);
      });
    }
  });
}