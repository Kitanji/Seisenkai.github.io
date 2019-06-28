$(function(){
  var d = new $.Deferred();
  d.promise()
  .then(animation01())
  .then(animation02())
  .then(animation03());
});

function animation01(){
  $('#body').hide();
  d.resolve();
}
function animation02(){
  $('.mainTitles').fadeIn(1000);
}
function animation03(){
  $('.headTitle').fadeIn(500);
}
function animation04(){
  $('.remark').show();
  $('.mainSub').show();
  $('.footTitle').show();
}

$(function(){
  $('.headTitle').hover(
    function(){
      $('#title-kaicho').hide();
      $('#kanegon').show();
    },
    function(){
      $('#title-kaicho').show();
      $('#kanegon').hide();
    }
  )
  $('.kaicho').hover(
    function(){
      $('.kaicho').hide();
      $('#kanegonOriginal').show();
    },
    function(){
      $('.kaicho').show();
      $('#kanegonOriginal').hide();
    }
  )
});
