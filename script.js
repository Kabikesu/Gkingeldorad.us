/* =========================================================
   GKING ELDORAD
   MAIN JAVASCRIPT
========================================================= */

/* =========================================================
   ELEMENT HELPERS
========================================================= */

const $ = (selector) => document.querySelector(selector);

/* =========================================================
   HERO ELEMENTS
========================================================= */

const hero = $('.parallax');
const text = $('#text');
const treeLeft = $('#tree-left');
const treeRight = $('#tree-right');
const gateLeft = $('#gate-left');
const gateRight = $('#gate-right');

/* =========================================================
   PLATFORM DATA
========================================================= */

const platforms = [
    {
        name: 'Billion Balls',
        image: 'BillionBalls.jpg',
        url: 'https://billionballs.win/',
        className: 'platform-billion-balls',
        accent: '#45d6a8'
    },
    {
        name: 'Blue Dragon',
        image: 'BlueDragon.jpg',
        url: 'http://app.bluedragon777.com/',
        className: 'platform-blue-dragon',
        accent: '#4b9dff'
    },
    {
        name: 'Cash Frenzy',
        image: 'CashFrenzy.png',
        url: 'https://www.cashfrenzy777.com/',
        className: 'platform-cash',
        accent: '#ffd34e'
    },
    {
        name: 'Cash Machine',
        image: 'CashMachine.jpg',
        url: 'https://www.cashmachine777.com/',
        className: 'platform-cash-machine',
        accent: '#f4a642'
    },
    {
        name: 'Eldorado',
        image: 'Eldorado.jpg',
        url: 'https://www.eldorado777.co/login',
        className: 'platform-eldorado',
        accent: '#e5bd52'
    },
    {
        name: 'FireKirin',
        image: 'FireKirin.jpg',
        url: 'https://start.firekirin.xyz:8580/',
        className: 'platform-firekirin',
        accent: '#ff4b4b'
    },
    {
        name: 'Funstation',
        image: 'Funstation.jpg',
        url: 'https://www.funstation.site/download/',
        className: 'platform-funstation',
        accent: '#ff6c9d'
    },
    {
        name: 'Game Room',
        image: 'GameRoom.jpg',
        url: 'https://www.gameroom777.com/',
        className: 'platform-game-room',
        accent: '#6e8cff'
    },
    {
        name: 'GameVault',
        image: 'GameVault.jpg',
        url: 'https://gamevault999.com/',
        className: 'platform-gamevault',
        accent: '#45e0ff'
    },
    {
        name: 'Hi-Rollin',
        image: 'Hi-Rollin.jpg',
        url: 'https://hi-rollin.online/download',
        className: 'platform-hi-rollin',
        accent: '#d9a441'
    },
    {
        name: 'Joker',
        image: 'Joker.jpg',
        url: 'https://www.joker777.win/',
        className: 'platform-joker',
        accent: '#b875ff'
    },
    {
        name: 'Juwa',
        image: 'JUWA.jpg',
        url: 'https://juwa777.com/juwa',
        className: 'platform-juwa',
        accent: '#9d6cff'
    },
    {
        name: 'Juwa 2.0',
        image: 'Juwa2.jpg',
        url: 'https://juwa777.com/juwa',
        className: 'platform-juwa-2',
        accent: '#c06cff'
    },
    {
        name: 'Mafia',
        image: 'Mafia.jpg',
        url: 'https://mafia77777.com/m',
        className: 'platform-mafia',
        accent: '#e15d5d'
    },
    {
        name: 'Medusa',
        image: 'Medusa.jpg',
        url: 'https://medusa777.com/',
        className: 'platform-medusa',
        accent: '#d96cff'
    },
    {
        name: 'Milky Way',
        image: 'Milkyway.jpg',
        url: 'https://milkywayapp.xyz/',
        className: 'platform-milky-way',
        accent: '#79b7ff'
    },
    {
        name: 'MR.Allinone',
        image: 'AllinOne.jpeg',
        url: 'https://www.mrallinone777.com/',
        className: 'platform-allinone',
        accent: '#55a7ff'
    },
    {
        name: 'Orion Star',
        image: 'OrionStar.jpeg',
        url: 'http://start.orionstars.vip:8580/',
        className: 'platform-orion',
        accent: '#4bb3ff'
    },
    {
        name: 'Panda Master',
        image: 'Pandamaster.jpg',
        url: 'https://pandamaster.vip:8888/',
        className: 'platform-panda',
        accent: '#f05d8b'
    },
    {
        name: 'Panda Power',
        image: 'PandaPower.jpg',
        url: 'https://dev.pandapower777.com/login/',
        className: 'platform-panda-power',
        accent: '#67d8a1'
    },
    {
        name: 'SpinCity',
        image: 'SpinCity.jpg',
        url: 'https://play.spincity777.vip/',
        className: 'platform-spincity',
        accent: '#ff709d'
    },
    {
        name: 'Ultra Panda',
        image: 'UltraPanda.jpg',
        url: 'https://www.ultrapanda.club/',
        className: 'platform-ultra-panda',
        accent: '#62d9b1'
    },
    {
        name: 'Vblink',
        image: 'Vblink.jpeg',
        url: 'https://www.vblink777.club/',
        className: 'platform-vblink',
        accent: '#24d5a5'
    },
    {
        name: 'Vegas Sweeps',
        image: 'VegasSweeps.jpg',
        url: 'https://m.lasvegassweeps.com/',
        className: 'platform-vegas-sweeps',
        accent: '#f0c04f'
    },
    {
        name: 'Winners Club',
        image: 'WinnersClub.jpg',
        url: 'https://www.winnersclub777.com/',
        className: 'platform-winners-club',
        accent: '#6bd58f'
    },
    {
        name: 'YOLO',
        image: 'YOLO.jpg',
        url: 'https://yolo777.game/',
        className: 'platform-yolo',
        accent: '#ff8c5a'
    }
];

const platformGrid = $('#platform-grid');

if (platformGrid) {
    platformGrid.innerHTML = platforms.map((platform, index) => `
        <a class="platform-card ${platform.className}" style="--accent:${platform.accent}" href="${platform.url}" target="_blank" rel="noopener noreferrer">
            <span class="platform-number">${String(index + 1).padStart(2, '0')}</span>
            <img class="platform-image" src="images/platforms/${encodeURIComponent(platform.image)}" alt="${platform.name} platform" loading="lazy">
            <span class="platform-name">${platform.name}</span>
            <span class="platform-action">ENTER PLATFORM <b>→</b></span>
        </a>
    `).join('');
}

/* =========================================================
   HERO PARALLAX EFFECT
========================================================= */

let heroRaf = 0;

const clamp = (number, min = 0, max = 1) => {
    return Math.min(max, Math.max(min, number));
};

function updateHero() {
    heroRaf = 0;

    if (!hero) {
        return;
    }

    const rect = hero.getBoundingClientRect();
    const progress = clamp(-rect.top / (hero.offsetHeight * .72));
    const mobile = matchMedia('(max-width: 767px)').matches;
    const tablet = matchMedia('(max-width: 1100px)').matches;
    const gateMove = mobile ? 170 : tablet ? 320 : 480;
    const treeMove = mobile ? 75 : tablet ? 145 : 220;
    const titleMove = mobile ? 55 : tablet ? 85 : 120;
    const fade = clamp(progress * 1.35);

    if (text) {
        text.style.transform = `translate3d(0, ${progress * titleMove}px, 0)`;
        text.style.opacity = 1 - fade;
    }

    if (treeLeft) {
        treeLeft.style.transform = `translate3d(${-progress * treeMove}px, ${progress * (mobile ? 12 : 25)}px, 0)`;
        treeLeft.style.opacity = 1 - clamp(progress * 1.15);
    }

    if (treeRight) {
        treeRight.style.transform = `translate3d(${progress * treeMove}px, ${progress * (mobile ? 12 : 25)}px, 0)`;
        treeRight.style.opacity = 1 - clamp(progress * 1.15);
    }

    if (gateLeft) {
        gateLeft.style.transform = `translate3d(${-progress * gateMove}px, 0, 0)`;
        gateLeft.style.opacity = 1 - clamp(progress * 1.08);
    }

    if (gateRight) {
        gateRight.style.transform = `translate3d(${progress * gateMove}px, 0, 0)`;
        gateRight.style.opacity = 1 - clamp(progress * 1.08);
    }
}

function requestHeroUpdate() {
    if (!heroRaf) {
        heroRaf = requestAnimationFrame(updateHero);
    }
}

if (hero) {
    updateHero();
    addEventListener('scroll', requestHeroUpdate, { passive: true });
    addEventListener('resize', requestHeroUpdate);
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = $('.menu-toggle');
const navigation = $('.navigation');

if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
        const open = navigation.classList.toggle('open');

        menuToggle.setAttribute('aria-expanded', open);
        menuToggle.setAttribute(
            'aria-label',
            open ? 'Close navigation menu' : 'Open navigation menu'
        );
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navigation.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (event) => {
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
            navigation.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

/* =========================================================
   GALLERY ELEMENTS
========================================================= */

const galleryMain = $('#gallery-main');
const dotsBox = $('#gallery-dots');
const thumbsBox = $('#gallery-thumbnails');
const prev = $('.prev');
const next = $('.next');
const play = $('.gallery-play');
const counter = $('#gallery-counter');
const title = $('#gallery-title-current');
const gallery = $('.slideshow-container');

let slides = [];
let dots = [];
let index = 0;
let timer = null;
let playing = true;

const imageTitle = (file) => {
    return file
        .replace(/\.[^.]+$/, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (character) => character.toUpperCase());
};

/* =========================================================
   GALLERY THUMBNAILS
========================================================= */

function buildThumbnailWindow() {
    if (!thumbsBox) {
        return;
    }

    thumbsBox.innerHTML = '';

    if (!slides.length) {
        return;
    }

    for (let offset = 0; offset < Math.min(4, slides.length); offset++) {
        const imageIndex = (index + offset) % slides.length;
        const image = slides[imageIndex].querySelector('img');
        const thumbnail = document.createElement('button');

        thumbnail.className = `thumb${offset === 0 ? ' active' : ''}`;
        thumbnail.type = 'button';
        thumbnail.setAttribute(
            'aria-label',
            `View ${imageTitle(image.src.split('/').pop())}`
        );
        thumbnail.innerHTML = `<img src="${image.src}" alt="">`;
        thumbnail.onclick = () => setSlide(imageIndex);

        thumbsBox.appendChild(thumbnail);
    }
}

/* =========================================================
   GALLERY RENDERING
========================================================= */

function renderGallery(files) {
    if (!galleryMain || !dotsBox) {
        return;
    }

    files.forEach((file) => {
        const name = imageTitle(file);
        const slide = document.createElement('div');
        const dot = document.createElement('button');

        slide.className = 'mySlides fade';
        slide.innerHTML = `
            <img src="gallery/${encodeURIComponent(file)}" alt="${name} platform" loading="lazy">
        `;
        galleryMain.insertBefore(slide, prev);

        dot.className = 'dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show ${name}`);
        dot.onclick = () => setSlide(dots.indexOf(dot));
        dotsBox.appendChild(dot);
    });

    slides = [...galleryMain.querySelectorAll('.mySlides')];
    dots = [...dotsBox.querySelectorAll('.dot')];

    if (slides.length) {
        showSlide(0);
        start();
        return;
    }

    counter.textContent = '0 / 0';
    title.textContent = 'No images yet';
}

/* =========================================================
   LOAD GALLERY FROM GITHUB
========================================================= */

async function loadGallery() {
    try {
        const response = await fetch(
            'https://api.github.com/repos/Kabikesu/Gkingeldorad.us/contents/gallery?ref=main',
            {
                headers: {
                    Accept: 'application/vnd.github+json'
                }
            }
        );

        if (!response.ok) {
            throw Error('Gallery unavailable');
        }

        const files = (await response.json())
            .filter((file) => {
                return file.type === 'file' && /\.(jpe?g|png|webp|gif)$/i.test(file.name);
            })
            .map((file) => file.name)
            .sort((a, b) => {
                return a.localeCompare(b, undefined, {
                    numeric: true,
                    sensitivity: 'base'
                });
            });

        renderGallery(files);
    } catch (error) {
        if (counter) {
            counter.textContent = 'Gallery unavailable';
        }
        if (title) {
            title.textContent = 'Please try again later';
        }
        console.error(error);
    }
}

/* =========================================================
   GALLERY SLIDESHOW
========================================================= */

function showSlide(slideIndex) {
    if (!slides.length) {
        return;
    }

    index = (slideIndex + slides.length) % slides.length;

    slides.forEach((slide, number) => {
        slide.style.display = number === index ? 'block' : 'none';
    });

    dots.forEach((dot, number) => {
        dot.classList.toggle('active', number === index);
    });

    counter.textContent = `${index + 1} / ${slides.length}`;
    title.textContent = slides[index]
        .querySelector('img')
        .alt
        .replace(/ platform$/i, '');

    buildThumbnailWindow();
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function start() {
    stop();

    if (slides.length > 1 && playing) {
        timer = setInterval(() => showSlide(index + 1), 4000);
    }
}

function setSlide(slideIndex) {
    showSlide(slideIndex);
    start();
}

prev?.addEventListener('click', () => setSlide(index - 1));
next?.addEventListener('click', () => setSlide(index + 1));

play?.addEventListener('click', () => {
    playing = !playing;
    play.textContent = playing ? 'Ⅱ' : '▶';
    play.setAttribute(
        'aria-label',
        playing ? 'Pause automatic slideshow' : 'Play automatic slideshow'
    );
    play.setAttribute('aria-pressed', playing);

    if (playing) {
        start();
    } else {
        stop();
    }
});

gallery?.addEventListener('mouseenter', stop);
gallery?.addEventListener('mouseleave', start);
gallery?.addEventListener('focusin', stop);

gallery?.addEventListener('focusout', (event) => {
    if (!gallery.contains(event.relatedTarget)) {
        start();
    }
});

loadGallery();

/* =========================================================
   PLATFORM PROMOTION POPUP

   The promotion is site-wide because script.js is shared.
   The floating button appears immediately.
   The popup opens automatically after 30 seconds.
========================================================= */

const promotionConfig = {
    image: 'images/promotions/eldorado-promotion.jpg',
    title: 'EL DORADO',
    description: 'Discover the El Dorado platform and explore more games.',
    url: 'https://www.eldorado777.co/',
    delay: 30000
};

function addPromotionStyles() {
    if (document.getElementById('promotion-styles')) {
        return;
    }

    const style = document.createElement('style');
    style.id = 'promotion-styles';
    style.textContent = `
        .site-promotion {
            position: fixed;
            right: 22px;
            bottom: 22px;
            z-index: 9998;
            font-family: inherit;
        }

        .promotion-bubble {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            min-height: 48px;
            padding: 10px 16px;
            border: 1px solid rgba(255, 214, 76, .42);
            border-radius: 999px;
            background: linear-gradient(135deg, #17131f, #281b35);
            color: #fff;
            font: inherit;
            font-size: .78rem;
            font-weight: 900;
            letter-spacing: .06em;
            cursor: pointer;
            box-shadow: 0 14px 35px rgba(0, 0, 0, .35), 0 0 25px rgba(255, 190, 45, .12);
            animation: promotionPulse 2.4s ease-in-out infinite;
            transition: transform .2s ease, border-color .2s ease, filter .2s ease;
        }

        .promotion-bubble:hover {
            transform: translateY(-3px) scale(1.02);
            border-color: rgba(255, 214, 76, .7);
            filter: brightness(1.08);
        }

        .promotion-bubble-icon {
            font-size: 1.05rem;
        }

        .promotion-overlay {
            position: fixed;
            inset: 0;
            z-index: 10000;
            display: grid;
            place-items: center;
            padding: 24px;
            background: rgba(3, 5, 8, .78);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: opacity .25s ease, visibility .25s ease;
        }

        .promotion-overlay.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .promotion-modal {
            position: relative;
            width: min(420px, 94vw);
            max-height: min(90vh, 820px);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, .14);
            border-radius: 24px;
            background: #101218;
            box-shadow: 0 35px 90px rgba(0, 0, 0, .65), 0 0 45px rgba(255, 191, 47, .1);
            transform: translateY(16px) scale(.97);
            transition: transform .3s ease;
        }

        .promotion-overlay.open .promotion-modal {
            transform: translateY(0) scale(1);
        }

        .promotion-image-wrap {
            position: relative;
            max-height: 68vh;
            overflow: hidden;
            background: #08090d;
        }

        .promotion-image {
            display: block;
            width: 100%;
            max-height: 68vh;
            object-fit: contain;
        }

        .promotion-close {
            position: absolute;
            top: 12px;
            right: 12px;
            width: 40px;
            height: 40px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, .22);
            border-radius: 50%;
            background: rgba(7, 8, 12, .78);
            color: #fff;
            font-size: 1.35rem;
            line-height: 1;
            cursor: pointer;
            z-index: 2;
            transition: background .2s ease, transform .2s ease;
        }

        .promotion-close:hover {
            background: rgba(7, 8, 12, .96);
            transform: rotate(4deg) scale(1.05);
        }

        .promotion-content {
            padding: 18px 20px 20px;
            text-align: center;
        }

        .promotion-kicker {
            margin: 0 0 5px;
            color: #f5c84b;
            font-size: .68rem;
            font-weight: 900;
            letter-spacing: .16em;
            text-transform: uppercase;
        }

        .promotion-title {
            margin: 0;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 900;
        }

        .promotion-description {
            margin: 7px 0 15px;
            color: #aab1bd;
            font-size: .84rem;
            line-height: 1.55;
        }

        .promotion-action {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 48px;
            padding: 11px 18px;
            border: 1px solid rgba(255, 215, 72, .42);
            border-radius: 13px;
            background: linear-gradient(135deg, #d89d16, #f1c63f);
            color: #17110a;
            font-size: .82rem;
            font-weight: 950;
            letter-spacing: .08em;
            text-decoration: none;
            box-shadow: 0 10px 28px rgba(224, 169, 30, .2);
            transition: transform .2s ease, filter .2s ease, box-shadow .2s ease;
        }

        .promotion-action:hover {
            transform: translateY(-2px);
            filter: brightness(1.07);
            box-shadow: 0 14px 32px rgba(224, 169, 30, .3);
        }

        @keyframes promotionPulse {
            0%, 100% { box-shadow: 0 14px 35px rgba(0, 0, 0, .35), 0 0 20px rgba(255, 190, 45, .08); }
            50% { box-shadow: 0 14px 35px rgba(0, 0, 0, .35), 0 0 32px rgba(255, 190, 45, .22); }
        }

        @media (max-width: 520px) {
            .site-promotion {
                right: 14px;
                bottom: 14px;
            }

            .promotion-bubble {
                min-height: 44px;
                padding: 9px 13px;
                font-size: .72rem;
            }

            .promotion-overlay {
                padding: 12px;
            }

            .promotion-modal {
                width: min(420px, 96vw);
                border-radius: 19px;
            }

            .promotion-image-wrap,
            .promotion-image {
                max-height: 70vh;
            }

            .promotion-content {
                padding: 15px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .promotion-bubble,
            .promotion-overlay,
            .promotion-modal,
            .promotion-action,
            .promotion-close {
                animation: none;
                transition: none;
            }
        }
    `;

    document.head.appendChild(style);
}

function createPromotion() {
    if (document.querySelector('.site-promotion')) {
        return;
    }

    addPromotionStyles();

    const wrapper = document.createElement('div');
    wrapper.className = 'site-promotion';
    wrapper.innerHTML = `
        <button class="promotion-bubble" type="button" aria-label="Open El Dorado promotion">
            <span class="promotion-bubble-icon" aria-hidden="true">🔥</span>
            <span>Special Promotion</span>
        </button>

        <div class="promotion-overlay" role="dialog" aria-modal="true" aria-labelledby="promotion-title" aria-hidden="true">
            <div class="promotion-modal">
                <div class="promotion-image-wrap">
                    <button class="promotion-close" type="button" aria-label="Close promotion">×</button>
                    <img class="promotion-image" src="${promotionConfig.image}" alt="El Dorado promotion">
                </div>
                <div class="promotion-content">
                    <p class="promotion-kicker">Featured Platform</p>
                    <h2 class="promotion-title" id="promotion-title">${promotionConfig.title}</h2>
                    <p class="promotion-description">${promotionConfig.description}</p>
                    <a class="promotion-action" href="${promotionConfig.url}" target="_blank" rel="noopener noreferrer">
                        VISIT EL DORADO →
                    </a>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(wrapper);

    const bubble = wrapper.querySelector('.promotion-bubble');
    const overlay = wrapper.querySelector('.promotion-overlay');
    const close = wrapper.querySelector('.promotion-close');

    const openPromotion = () => {
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('promotion-open');
        sessionStorage.setItem('gking-promotion-shown', 'true');
        close.focus();
    };

    const closePromotion = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('promotion-open');
        bubble.focus();
    };

    bubble.addEventListener('click', openPromotion);
    close.addEventListener('click', closePromotion);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closePromotion();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('open')) {
            closePromotion();
        }
    });

    if (!sessionStorage.getItem('gking-promotion-shown')) {
        setTimeout(openPromotion, promotionConfig.delay);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createPromotion, { once: true });
} else {
    createPromotion();
}
