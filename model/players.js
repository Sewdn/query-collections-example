Players = new Meteor.Collection('players');

if(Meteor.isServer){
  Meteor.startup(function () {
    //check if games exist
    if(Players.find().count() < 1){
      _.each([
        {_id: "001", name: "Frans"},
        {_id: "002", name: "Jos"},
        {_id: "003", name: "Alain"}
      ], function(player){
        Players.insert(player);
      });
    }
  });
}