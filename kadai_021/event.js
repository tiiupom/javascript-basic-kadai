
//HTML-body内　bottonのid「btn」を取得、定数「btn」に代入
const btn = document.getElementById('btn');

//HTML-body内　h2のid「text」を取得、定数「text」に代入
const text = document.getElementById('text');



  btn.addEventListener('click', () => {
    setTimeout(() => {
      text.textContent = 'ボタンをクリックしました';
  }, 2000);
});