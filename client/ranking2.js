Template.ranking2.helpers({
  'ranking': function(){
    return GameRanking.find(
      {}
    );
  },
  'dataScope': function(){
    return {
      player: Players.findOne(this.player),
      score: this.score
    };
  },
  'unique': function(){
    return Random.id().substr(0,3);
  }
});

Template.ranking2.created = function() {
  $(".ranking").on("webkitTransitionEnd", function () {
    $(this).hide().offset();
    $(this).show();
  });
};