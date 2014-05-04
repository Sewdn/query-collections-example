Template.games.helpers({
  'games': function(){
    return Games.find();
  }
});

Template.games.events({
  'click ul.games li': function(e,t){
    Session.set('selectedGame', this._id);
  }
});