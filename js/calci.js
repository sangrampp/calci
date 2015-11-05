(function() {
  var Calci;

  Calci = {
    init: function() {
      $('.key').click(function() {
        return Calci.handleKeyClick(this);
      });
      $('.key.delete').dblclick(function() {
        return Calci.handleClear();
      });
      return Calci.bindKeyboard();
    },
    bindKeyboard: function() {
      var i, key, keyboardShortcuts, len;
      keyboardShortcuts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '.'];
      for (i = 0, len = keyboardShortcuts.length; i < len; i++) {
        key = keyboardShortcuts[i];
        $(document).bind('keyup', key, Calci.handleInputFunctionWrapper(key));
      }
      $(document).bind('keyup', 'backspace', (function() {
        return Calci.handleDelete();
      }));
      $(document).bind('keyup', 'esc', (function() {
        return Calci.handleClear();
      }));
      return $(document).bind('keyup', 'return', (function() {
        return Calci.evaluateResult();
      }));
    },
    evaluateResult: function() {
      return $('#result').html(eval($('#preview').html()));
    },
    handleDelete: function() {
      return $('#preview').html($('#preview').html().slice(0, -1));
    },
    handleClear: function() {
      $('#preview').html('');
      return $('#result').html('');
    },
    handleKeyClick: function(ele) {
      switch (ele.dataset.keyType) {
        case "delete":
          return Calci.handleDelete();
        case "equals":
          return Calci.evaluateResult();
        default:
          return Calci.handleInput(ele.dataset.keyValue);
      }
    },
    handleInput: function(val) {
      if (val === '.') {
        if (!Calci.allowDecimal()) {
          return;
        }
      }
      return $('#preview').append(val);
    },
    handleInputFunctionWrapper: function(val) {
      return function() {
        return Calci.handleInput(val);
      };
    },
    allowDecimal: function() {
      var lastNumber, preview;
      preview = $('#preview').html();
      lastNumber = preview.match(/[\d.]*$/)[0];
      if (lastNumber === '') {
        return true;
      }
      return !lastNumber.match(/\./);
    }
  };

  $(function() {
    return Calci.init();
  });

}).call(this);
