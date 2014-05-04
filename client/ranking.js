Template.ranking.helpers({
  'ranking': function(){
    return Scores.find(
      {game: Session.get('selectedGame')},
      {sort: {score: -1}}
    );
  },
  'dataScope': function(){
    return {
      player: Players.findOne(this.player),
      score: this.score
    };
  },
  'games': function(){
    return Games.find();
  },
  'unique': function(){
    return Random.id().substr(0,3);
  }
});

Template.ranking.events({
  'click ul.games li': function(e,t){
    Session.set('selectedGame', this._id);
  }
});

Template.ranking.created = function() {
  $(".ranking").on("webkitTransitionEnd", function () {
    $(this).hide().offset();
    $(this).show();
  });
};