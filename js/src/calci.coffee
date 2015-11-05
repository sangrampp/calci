Calci =
  init: ->
    $('.key').click ->
      Calci.handleInput(this)
    $('.delete').dblclick ->
      $('#preview').html('')
      $('#result').html('')
  evaluateResult: ->
    $('#result').html(eval($('#preview').html()))
  handleDelete: ->
    $('#preview').html($('#preview').html().slice(0, -1))
  handleInput: (ele) ->
    if $(ele).hasClass('delete')
      Calci.handleDelete()
    else if $(ele).hasClass('equals')
      Calci.evaluateResult()
    else
      $('#preview').append($(ele).html())

$ ->
  Calci.init()