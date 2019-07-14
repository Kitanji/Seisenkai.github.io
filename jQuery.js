function animation(){
  $('#SHINSHI').animate({'opacity':'1'},500).promise()
  .then(function(){
    return $('#Almighty').animate({'opacity':'1'},500);
  }).then(function(){
    return $('#Leader').animate({'opacity':'1'},500);
  }).then(function(){
    return $('#head').animate({'opacity':'1'},300);
  }).then(function(){
    return $('.remark').animate({'visibility':'visible'});
  }).then(function(){
    return $('.mainSub').animate({'visibility':'visible'});
  }).then(function(){
    return $('.footTitle').animate({'visibility':'visible'});
  }).always(function(){
  });
}

$(function(){
  animation();

  $('.headTitle').hover(
    function(){
      $('#title-kaicho').hide();
      $('#kanegon').show();
    },
    function(){
      $('#title-kaicho').show();
      $('#kanegon').hide();
    }
  );
  $('.kaicho').click(
    function(){
      $('.kaicho').hide();
      $('#kaichoSign').hide();
      $('#kaichoComment').hide();
      $('#kanegonOriginal').show();
      $('#kanegonSign').show();
      $('#kanegonComment').show();
    }
  );
  $('#kanegonOriginal').click(
    function(){
      $('.kaicho').show();
      $('#kaichoSign').show();
      $('#kaichoComment').show();
      $('#kanegonOriginal').hide();
      $('#kanegonSign').hide();
      $('#kanegonComment').hide();
    }
  );
});
