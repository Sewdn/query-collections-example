Template.ranking3.helpers({
  'ranking': function(){
    return GameRanking2.find(
      {}
    );
  },
  'unique': function(){
    return Random.id().substr(0,3);
  }
});

Template.ranking3.created = function() {
  $(".ranking").on("webkitTransitionEnd", function () {
    $(this).hide().offset();
    $(this).show();
  });
};