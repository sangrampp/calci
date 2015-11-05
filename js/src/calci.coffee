Calci =
  init: ->
    $('.key').click ->
      Calci.handleInput(this)
    $('.key.delete').dblclick ->
      $('#preview').html('')
      $('#result').html('')
  evaluateResult: ->
    $('#result').html(eval($('#preview').html()))
  handleDelete: ->
    $('#preview').html($('#preview').html().slice(0, -1))
  handleInput: (ele) ->
    switch ele.dataset.keyType
      when "delete" then Calci.handleDelete()
      when "equals" then Calci.evaluateResult()
      else $('#preview').append(ele.dataset.keyValue)
      

$ ->
  Calci.init()