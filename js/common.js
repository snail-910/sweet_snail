// $(function(){
//     $('.dropdwn li').hover(function(){
//         $("ul:not(:animated)", this).slideDown();
//     }, function(){
//         $("ul.dropdwn_menu",this).slideUp();
//     });
// });

// $(function(){
//     $('.footer_dropdwn li').hover(function(){
//         $("ul:not(:animated)", this).slideDown();
//     }, function(){
//         $("ul.footer_dropdwn_menu",this).slideUp();
//     });
// });

$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {  //50pxスクロールしたら
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '70px' //下から50pxの位置に
          }, 200); //0.2秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'bottom': '-50px' //下から-50pxの位置に
          }, 200); //0.2秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 300); //0.5秒かけてトップへ戻る
      return false;
    });
  });
  