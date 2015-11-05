$(document).ready(function() {
  $('.key').click(function() {
    handleInput(this);
  });
});

function evaluateResult() {
  $('#result').html(eval($('#preview').html()));
}

function handleDelete() {
  $('#preview').html($('#preview').html().slice(0, -1));
}

function handleInput(ele) {
  if($(ele).hasClass('delete')) {
    handleDelete();
  } else if ($(ele).hasClass('equals')) {
    evaluateResult();
  } else {
    $('#preview').append($(ele).html());
  }
}
