(function() {
  var Calci;

  Calci = {
    init: function() {
      $('.key').click(function() {
        return Calci.handleInput(this);
      });
      return $('.delete').dblclick(function() {
        $('#preview').html('');
        return $('#result').html('');
      });
    },
    evaluateResult: function() {
      return $('#result').html(eval($('#preview').html()));
    },
    handleDelete: function() {
      return $('#preview').html($('#preview').html().slice(0, -1));
    },
    handleInput: function(ele) {
      if ($(ele).hasClass('delete')) {
        return Calci.handleDelete();
      } else if ($(ele).hasClass('equals')) {
        return Calci.evaluateResult();
      } else {
        return $('#preview').append($(ele).html());
      }
    }
  };

  $(function() {
    return Calci.init();
  });

}).call(this);
