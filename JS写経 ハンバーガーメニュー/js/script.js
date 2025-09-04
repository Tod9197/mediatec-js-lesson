// ハンバーガーメニュー
const hamburger = document.getElementById('js-hamburger');
const gnav = document.getElementById('js-gnav');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('open');
    gnav.classList.toggle('open');
});