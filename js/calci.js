(function() {
  var Calci;

  Calci = {
    init: function() {
      $('.key').click(function() {
        return Calci.handleInput(this);
      });
      return $('.key.delete').dblclick(function() {
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
      switch (ele.dataset.keyType) {
        case "delete":
          return Calci.handleDelete();
        case "equals":
          return Calci.evaluateResult();
        default:
          return $('#preview').append(ele.dataset.keyValue);
      }
    }
  };

  $(function() {
    return Calci.init();
  });

}).call(this);
