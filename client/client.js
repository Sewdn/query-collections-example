Meteor.startup(function(){
  Deps.autorun(function () {
    Meteor.subscribe('gameRanking', Session.get('selectedGame'));
  });
  Meteor.subscribe('games');
});