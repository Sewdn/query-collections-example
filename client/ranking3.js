Template.ranking3.helpers({
  'ranking': function(){
    return query;
  },
  'unique': function(){
    return Random.id().substr(0,3);
  }
});

var query;

Template.ranking3.created = function() {
  $(".ranking").on("webkitTransitionEnd", function () {
    $(this).hide().offset();
    $(this).show();
  });
  query = GameRanking2.find(
    {}
  );
  query.observeChanges({
    added: function (id, fields) {
      console.log('added', fields);
      // ...
    },
    changed: function (id, fields) {
      console.log('changed', fields);
      // ...
    },
    movedBefore: function (id, fields) {
      // ...
    },
    removed: function (id) {
      // ...
    }
  });
};