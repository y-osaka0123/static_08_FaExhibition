$(function(){
  
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  //ハンバーガーメニューをクリックした時
  $('.hamburger').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す。
    hamburger();
  })
  //メニューのリンクをクリックした時
  $('#navi a').on('click', function() {
    hamburger();
  });

  /*=================================================
  フェード表示
  ===================================================*/
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      //要素 (inviewクラス)が表示されたらshowクラスを追加する
      $(this).stop().addClass("show");
    }
  });

  /*=================================================
  スクロール時のイベント
  ===================================================*/
  $(window).scroll(function() {
    //スクロール位置を取得
    let scroll = $(window).scrollTop();
  
    /*=================================================
    背景画像の表示
    ===================================================*/
    //画面下から#contactまでの距離を取得
    let contact_position = $('#contact').offset().top - $(window).height();
    //画面下から#access までの距離を取得
    let access_position = $('#access').offset().top - $(window).height();

    //#access が表示された場合
    if(scroll > access_position) {
      // #contact が表示されるまでの間は、背景画像をfadeINで表示する。
      if(scroll < contact_position){
        $('.bg').fadeIn(500);
      } else {
        $('.bg').fadeOut(500);
      }
      // #access が表示される前の場合
    } else {
      // 背景画像を表示しない
      $('.bg').fadeOut(500);
    }

  });
});


/*=================================================
ハンバーガ―メニュー (共通処理)
===================================================*/
// ハンバーガーメニューのクリック時とメニュー内のメニューのクリック時の
// 処理が同じなので共通化する
function hamburger() {
  //toggleClass を使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  //存在しない場合は追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    // hamburger クラスにactive がある場合は、naviにもactiveクラスを追加する
    $('#navi').addClass('active');
  } else {
    // active が無い場合は、navi から active クラスを削除する
    $('#navi').removeClass('active');
  }
}













