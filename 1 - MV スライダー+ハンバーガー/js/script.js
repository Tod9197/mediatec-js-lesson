// ハンバーガーメニュー
const hamburger = document.getElementById('js-hamburger');
const gnav = document.getElementById('js-gnav');
const gnavLinks = document.querySelectorAll('.gnav__link');//全てのgnav__link要素を取得

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('open');
    gnav.classList.toggle('open');
});

//各gnav__linkをクリックした時にハンバーガーメニューが閉じる。
gnavLinks.forEach((gnavLink) => {
    gnavLink.addEventListener('click', (e) => {
        const href = gnavLink.getAttribute('href');
        
        if(href.startsWith('#')){
        e.preventDefault();

        hamburger.classList.remove('open');
        gnav.classList.remove('open');

        setTimeout(() => {
            const target = document.querySelector(href);
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 200);
    } else {
        hamburger.classList.remove('open');
        gnav.classList.remove('open');
    }
    });
});


// メインビジュアルsplide
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'fade',
        autoplay: true,
        interval: 6000,
        speed: 4000,
        rewind: true,
        arrows: false,
        pagination: false,
        pauseOnHover: false,
    }).mount();
});
