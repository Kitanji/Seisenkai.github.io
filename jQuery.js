$(function(){
  animation01();
});
function animation01(){
  $('#SHINSHI').animate({opacity:1;},500,'liner',animation02);
}
function animation02(){
  $('#ALmighty').animate({opacity:1;},500,'liner',animation03);
}
function animation03(){
  $('#Leader').animate({opacity:1;},500,'liner',animation04);
}
function animation04(){
  $('.headTitle').animate({opacity:1;},300,'swing',animation05);
}
function animation05(){
  $('.remark').animate({visibility:visible;},animation06);
}
function animation06(){
  $('.mainSub').animate({visibility:visible;},animation07);
}
function animation07(){
  $('.footTitle').animate({visibility:visible;});
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
  $('.kaicho').click(
    function(){
      $('.kaicho').hide();
      $('#kaichoSign').hide();
      $('#kaichoComment').hide();
      $('#kanegonOriginal').show();
      $('#kanegonSign').show();
      $('#kanegonComment').show();
    },
    function(){
      $('.kaicho').show();
      $('#kaichoSign').show();
      $('#kaichoComment').show();
      $('#kanegonOriginal').hide();
      $('#kanegonSign').hide();
      $('#kanegonComment').hide();
    }
  )
});
