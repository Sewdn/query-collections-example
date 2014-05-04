Meteor.startup(function(){
  Deps.autorun(function () {
    Meteor.subscribe('gameRanking', Session.get('selectedGame'));
  });
  Deps.autorun(function () {
    Meteor.subscribe("gameRanking2", Session.get('selectedGame'));
  });
  Deps.autorun(function () {
    Meteor.subscribe("gameRanking3", Session.get('selectedGame'));
  });
  Meteor.subscribe('games');
});

GameRanking = new Meteor.Collection("gameranking");
GameRanking2 = new Meteor.Collection("gameranking2");