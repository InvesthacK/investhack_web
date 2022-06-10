//スムーススクロール
$('a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - 0;
  $('body,html').animate({ scrollTop: pos }, 1000);
  return false;
});

//ハンバーガーメニュー
$('.hamburger').on('click', function () {
  $('.hamburger , #js-nav').toggleClass('is-active');
});

//nav内のリンクをクリックでメニューが閉じる
$('.js-a').on('click', function () {
  $('.hamburger , #js-nav').removeClass('is-active');
});

//初めてページを読み込んだときだけ処理される
if ($(window).scrollTop() > 300) {
  $('#js-header_inner').addClass('active');
} else {
  $('#js-header_inner').removeClass('active');
}

//h1ロゴ
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('#js-header_inner').addClass('active');
  } else {
    $('#js-header_inner').removeClass('active');
  }
});

//h1ロゴ　スクロールで非表示
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    // $('header').css({'overflow':'hidden','width':'100px','height':'100px'});
    $('h1').css('display', 'none');
  } else {
    // $('header').css({'overflow':'visible','width':'100vw','height':'70px'});
    $('h1').css('display', 'block');
  }
});

//introductionテキスト
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    $('.intro_text').addClass('is-show');
  } else {
    $('.intro_text').removeClass('is-show');
  }
});

//web料金表
document.querySelectorAll('.price_list_web').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('price_list_web_open').style.display = 'flex';
  });
});

document.getElementById('price_list_web_close').onclick = (e) => {
  e.preventDefault();
  document.getElementById('price_list_web_open').style.display = 'none';
}