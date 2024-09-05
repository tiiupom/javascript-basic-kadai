
//HTML-body内　bottonのid「btn」を取得、定数「btn」に代入
const btn = document.getElementById('btn');

//HTML-body内　h2のid「text」を取得、定数「text」に代入
const text = document.getElementById('text');


//定数「btn」をクリックしたら
btn.addEventListener('click', () => {

//定数「text」の内容を更新する
  text.textContent = 'ボタンをクリックしました';
});
