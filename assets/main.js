// ヘッダーのスクロール制御
const header = document.getElementById("js-header");
window.addEventListener('scroll', function(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

const initSwiper = () => {

// const slideLength_case = document.querySelectorAll('.products_slider .swiper-slide').length;
const ba_products_swiper = new Swiper(".ba_products_slider", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    grabCursor: true,
    speed: 300,
    navigation: {
        nextEl: '.ba_slider .swiper-button-next',
        prevEl: '.ba_slider .swiper-button-prev',
    },
    breakpoints: {
        600: {
        slidesPerView: 3,
        spaceBetween: 24,
        speed: 650,
        },
        1024: {
        slidesPerView: 4,
        }
    },
});

const sol_products_swiper = new Swiper(".sol_products_slider", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    grabCursor: true,
    speed: 300,
    navigation: {
        nextEl: '.sol_slider .swiper-button-next',
        prevEl: '.sol_slider .swiper-button-prev',
    },
    breakpoints: {
        600: {
        slidesPerView: 3,
        spaceBetween: 24,
        speed: 600,
        },
        1024: {
        slidesPerView: 4,
        }
    },
});

const higashiyama_thumb_swiper = new Swiper('.higashiyama_thumb_slider', {
  // Optional parameters
    slidesPerView: 6,
    spaceBetween: 10,
    watchSlidesProgress: true,
    breakpoints: {
        600: {
            slidesPerView: 8,
        }
    },
});

const higashiyama_swiper = new Swiper('.higashiyama_slider', {
  // Optional parameters
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    speed: 1000,
    // centeredSlides: true,
    thumbs: {
        swiper: higashiyama_thumb_swiper,
    },
});

const kitano_thumb_swiper = new Swiper('.kitano_thumb_slider', {
  // Optional parameters
    slidesPerView: 6,
    spaceBetween: 10,
    watchSlidesProgress: true,
    breakpoints: {
        600: {
            slidesPerView: 8,
        }
    },
});

const kitano_swiper = new Swiper('.kitano_slider', {
  // Optional parameters
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    speed: 1000,
    // centeredSlides: true,
    thumbs: {
        swiper: kitano_thumb_swiper,
    },
});

const sannomiya_thumb_swiper = new Swiper('.sannomiya_thumb_slider', {
  // Optional parameters
    slidesPerView: 6,
    spaceBetween: 10,
    watchSlidesProgress: true,
    breakpoints: {
        600: {
            slidesPerView: 8,
        }
    },
});

const sannomiya_swiper = new Swiper('.sannomiya_slider', {
  // Optional parameters
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    speed: 1000,
    // centeredSlides: true,
    thumbs: {
        swiper: sannomiya_thumb_swiper,
    },
});

const nagoya_thumb_swiper = new Swiper('.nagoya_thumb_slider', {
  // Optional parameters
    slidesPerView: 6,
    spaceBetween: 10,
    watchSlidesProgress: true,
    breakpoints: {
        600: {
            slidesPerView: 8,
        }
    },
});

const nagoya_swiper = new Swiper('.nagoya_slider', {
  // Optional parameters
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    speed: 1000,
    // centeredSlides: true,
    thumbs: {
        swiper: nagoya_thumb_swiper,
    },
});

const osaka_thumb_swiper = new Swiper('.osaka_thumb_slider', {
  // Optional parameters
    slidesPerView: 6,
    spaceBetween: 10,
    watchSlidesProgress: true,
    breakpoints: {
        600: {
            slidesPerView: 8,
        }
    },
});

const osaka_swiper = new Swiper('.osaka_slider', {
  // Optional parameters
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    watchSlidesProgress: true,
    speed: 1000,
    // centeredSlides: true,
    thumbs: {
        swiper: osaka_thumb_swiper,
    },
});

const swiper = new Swiper(".ha_slider", {
  loop: true, // ループ有効
  slidesPerView: 2, // 一度に表示する枚数
  speed: 8000, // ループの時間
  allowTouchMove: false, // スワイプ無効
    autoplay: {
        delay: 0, // 途切れなくループ
    },
    breakpoints: {
        600: {
            slidesPerView: 4,
        }
    },
});

};


window.addEventListener('load', function(){
initSwiper();
});

document.addEventListener("DOMContentLoaded", () => {
    setUpAccordion();
});

/**
 * ライブラリ(GSAP)を使ってアコーディオンのアニメーションを制御します
 */
const setUpAccordion = () => {
    const details = document.querySelectorAll(".js-details");
    const IS_OPENED_CLASS = "is-opened"; // アイコン操作用のクラス名

    details.forEach((element) => {
        const summary = element.querySelector(".js-summary");
        const content = element.querySelector(".js-content");

        summary.addEventListener("click", (event) => {
            // デフォルトの挙動を無効化
            event.preventDefault();

            // is-openedクラスの有無で判定（detailsのopen属性の判定だと、アニメーション完了を待つ必要がありタイミング的に不安定になるため）
            if (element.classList.contains(IS_OPENED_CLASS)) {
                // アコーディオンを閉じるときの処理
                // アイコン操作用クラスを切り替える(クラスを取り除く)
                element.classList.toggle(IS_OPENED_CLASS);

                // アニメーション実行
                closingAnim(content, element).restart();
            } else {
                // アコーディオンを開くときの処理
                // アイコン操作用クラスを切り替える(クラスを付与)
                element.classList.toggle(IS_OPENED_CLASS);

                // open属性を付与
                element.setAttribute("open", "true");

                // アニメーション実行
                openingAnim(content).restart();
            }
        });
    });
}

/**
 * アコーディオンを閉じる時のアニメーション
 */
const closingAnim = (content, element) => gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true,
    onComplete: () => {
        // アニメーションの完了後にopen属性を取り除く
        element.removeAttribute("open");
    },
});

/**
 * アコーディオンを開く時のアニメーション
 */
const openingAnim = (content) => gsap.fromTo(
    content,
    {
        height: 0,
        opacity: 0,
    },
    {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
    });

// ハンバーガーメニュー開閉
$(document).ready(function(){
    const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
        ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
        $("body").toggleClass("active");
    });

    $('.nav_item_link').on('click', function () {
        ham.removeClass('active');
        nav.removeClass('active');
        $("body").removeClass("active");
    });
});

// フェード
const fadeInElements = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // data-delay属性から遅延時間を取得
      const delay = entry.target.dataset.delay || 0;
      // setTimeout を使用して遅延を適用
      setTimeout(() => {
        entry.target.classList.add("active");
      }, delay);
    }
  });
}, options);

fadeInElements.forEach(element => observer.observe(element));

// パララックス効果
const parallaxElements = document.querySelectorAll('.js-parallax');
parallaxElements.forEach((element) => {
  const img = element.querySelector('img');
  
  // 画像を少し大きめにする（はみ出る分の補完）
  gsap.set(img, {
    scale: 1.2
  });

  gsap.fromTo(img, {
    yPercent: 5,
  }, {
    yPercent: -5,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      // markers: true, // デバッグ用
      invalidateOnRefresh: true, // ウィンドウリサイズ時に再計算
    }
  }); 
});