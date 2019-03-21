$('.on').on('click', event =>{
  $('.on').removeClass('on-active');
  $('.off').removeClass('off-active');
  $(event.currentTarget).addClass('on-active');
});
$('.on').on('dblclick', event =>{
  $(event.currentTarget).removeClass('on-active');
});
$('.off').on('click', event =>{
  $('.on').removeClass('on-active');
  $('.off').removeClass('off-active');
  $(event.currentTarget).addClass('off-active');
});

$('.off').on('dblclick', event =>{
  $(event.currentTarget).removeClass('off-active');
});
