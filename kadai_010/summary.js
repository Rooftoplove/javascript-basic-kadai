$(function(){
  //「文字色変化」ボタンを押した際に、文字色が任意の色に更新されている
  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
    // 赤にする
    $('#target').css("color" , "red");
  });

  //「文字内容変化」ボタンを押した際に、任意の文字内容に更新されている
  //id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function() {
    // Helloにする
    $('#target').text('Hello!');
  });

  //「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
    console.log('fede-out');
  });

  //「フェードイン」ボタンを押した際に、フェードインで文字が現れる
  // id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // フェードインする
    $('#target').fadeIn();
  });
});