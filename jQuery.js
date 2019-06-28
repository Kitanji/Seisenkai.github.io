//function animation(){
  //$('#SHINSHI').animate({opacity:1;},500,'liner').promise()
  //.then(function(){
  //  return $('#ALmighty').animate({opacity:1;},500,'liner');
  //}).then(function(){
    //return $('#Leader').animate({opacity:1;},500,'liner');
  //}).then(function(){
    //return $('#head').animate({opacity:1;},300,'swing');
  //}).then(function(){
    //return $('.remark').animate({visibility:visible;});
  //}).then(function(){
    //return $('.mainSub').animate({visibility:visible;});
  //}).then(function(){
    //return $('.footTitle').animate({visibility:visible;});
  //}).always(function(){

  //});
//}

$(function(){
  //animation();
  $('#SHINSHI').animate({opacity:1;},500,'liner');
  $('#ALmighty').animate({opacity:1;},500,'liner');
  $('#Leader').animate({opacity:1;},500,'liner');
  $('#head').animate({opacity:1;},300,'swing');
  $('.remark').animate({visibility:visible;});
  $('.mainSub').animate({visibility:visible;});
  $('.footTitle').animate({visibility:visible;});

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
