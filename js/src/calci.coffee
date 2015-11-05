Calci =
  init: ->
    $('.key').click ->
      Calci.handleKeyClick(this)
    $('.key.delete').dblclick ->
      Calci.handleClear()
    Calci.bindKeyboard()
  bindKeyboard: ->
    keyboardShortcuts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '.']
    for key in keyboardShortcuts
      $(document).bind('keyup', key, Calci.handleInputFunctionWrapper(key))
    $(document).bind('keyup', 'backspace', (-> Calci.handleDelete()))
    $(document).bind('keyup', 'esc', (-> Calci.handleClear()))
    $(document).bind('keyup', 'return', (-> Calci.evaluateResult()))
  evaluateResult: ->
    $('#result').html(eval($('#preview').html()))
  handleDelete: ->
    $('#preview').html($('#preview').html().slice(0, -1))
  handleClear: ->
    $('#preview').html('')
    $('#result').html('')
  handleKeyClick: (ele) ->
    switch ele.dataset.keyType
      when "delete" then Calci.handleDelete()
      when "equals" then Calci.evaluateResult()
      else Calci.handleInput(ele.dataset.keyValue)
  handleInput: (val) ->
    return if val == '.' && !Calci.allowDecimal()
    return if Calci.checkOperator(val) && Calci.lastCharIsOperator()
    $('#preview').append(val)
  checkOperator: (val) ->
    ['/', '*', '-', '+'].indexOf(val) > -1
  lastCharIsOperator: ->
    val = $('#preview').html().slice(-1)
    Calci.checkOperator(val)
  handleInputFunctionWrapper: (val) ->
    return -> Calci.handleInput(val)
  allowDecimal: ->
    preview = $('#preview').html()
    lastNumber = preview.match(/[\d.]*$/)[0]
    return true if lastNumber == ''
    return !lastNumber.match(/\./)

$ ->
  Calci.init()