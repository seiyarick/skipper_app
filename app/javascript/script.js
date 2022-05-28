/* global $*/
// let title = "javascriptが使えました";

// // console.log(title);
// alert(title);

$(document).ready(function(){ /*(document).readyは省略可*/
  // HTMLと紐づける記述↑
  $('.jquery').on('click', function(){
    // ',jquery'セレクタをクリックした時に以下の処理を行う
    $(this).css({
      'color':'red',
      'font-size':'200px'
    });
    // (this)'click'された時'jquery'の文字を赤色にする。フォントサイズを200pxのサイズにする。
  });
});

$(document).ready(function () {
  $("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'fade',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類('div' or 'img')
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : false,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 3000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
  });
});


