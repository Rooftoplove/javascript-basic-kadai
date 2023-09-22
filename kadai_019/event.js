// textというidを持つHTML要素を取得し、定数に代入する
const oneclick = document.getElementById('text');
 
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', function() {
  oneclick.textContent='ボタンをクリックしました';
});