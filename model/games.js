Games = new Meteor.Collection('games');

if(Meteor.isServer){
  Meteor.startup(function () {
    //check if games exist
    if(Games.find().count() < 1){
      _.each([
        {_id: "001", name: "snake"},
        {_id: "002", name: "tetris"}
      ], function(game){
        Games.insert(game);
      });
    }
  });
}