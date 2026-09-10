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
    { name: 'Billion Balls', image: 'BillionBalls.jpg', url: 'https://billionballs.win/', className: 'platform-billion-balls', accent: '#45d6a8' },
    { name: 'Blue Dragon', image: 'BlueDragon.jpg', url: 'http://app.bluedragon777.com/', className: 'platform-blue-dragon', accent: '#4b9dff' },
    { name: 'Cash Frenzy', image: 'CashFrenzy.png', url: 'https://www.cashfrenzy777.com/', className: 'platform-cash', accent: '#ffd34e' },
    { name: 'Cash Machine', image: 'CashMachine.jpg', url: 'https://www.cashmachine777.com/', className: 'platform-cash-machine', accent: '#f4a642' },
    { name: 'Eldorado', image: 'Eldorado.jpg', url: 'https://www.eldorado777.co/login', className: 'platform-eldorado', accent: '#e5bd52' },
    { name: 'FireKirin', image: 'FireKirin.jpg', url: 'https://start.firekirin.xyz:8580/', className: 'platform-firekirin', accent: '#ff4b4b' },
    { name: 'Funstation', image: 'Funstation.jpg', url: 'https://www.funstation.site/download/', className: 'platform-funstation', accent: '#ff6c9d' },
    { name: 'Game Room', image: 'GameRoom.jpg', url: 'https://www.gameroom777.com/', className: 'platform-game-room', accent: '#6e8cff' },
    { name: 'GameVault', image: 'GameVault.jpg', url: 'https://gamevault999.com/', className: 'platform-gamevault', accent: '#45e0ff' },
    { name: 'Hi-Rollin', image: 'Hi-Rollin.jpg', url: 'https://hi-rollin.online/download', className: 'platform-hi-rollin', accent: '#d9a441' },
    { name: 'Joker', image: 'Joker.jpg', url: 'https://www.joker777.win/', className: 'platform-joker', accent: '#b875ff' },
    { name: 'Juwa', image: 'JUWA.jpg', url: 'https://juwa777.com/juwa', className: 'platform-juwa', accent: '#9d6cff' },
    { name: 'Juwa 2.0', image: 'Juwa2.jpg', url: 'https://juwa777.com/juwa', className: 'platform-juwa-2', accent: '#c06cff' },
    { name: 'Mafia', image: 'Mafia.jpg', url: 'https://mafia77777.com/m', className: 'platform-mafia', accent: '#e15d5d' },
    { name: 'Medusa', image: 'Medusa.jpg', url: 'https://medusa777.com/', className: 'platform-medusa', accent: '#d96cff' },
    { name: 'Milky Way', image: 'Milkyway.jpg', url: 'https://milkywayapp.xyz/', className: 'platform-milky-way', accent: '#79b7ff' },
    { name: 'MR.Allinone', image: 'AllinOne.jpeg', url: 'https://www.mrallinone777.com/', className: 'platform-allinone', accent: '#55a7ff' },
    { name: 'Orion Star', image: 'OrionStar.jpeg', url: 'http://start.orionstars.vip:8580/', className: 'platform-orion', accent: '#4bb3ff' },
    { name: 'Panda Master', image: 'Pandamaster.jpg', url: 'https://pandamaster.vip:8888/', className: 'platform-panda', accent: '#f05d8b' },
    { name: 'Panda Power', image: 'PandaPower.jpg', url: 'https://dev.pandapower777.com/login/', className: 'platform-panda-power', accent: '#67d8a1' },
    { name: 'SpinCity', image: 'SpinCity.jpg', url: 'https://play.spincity777.vip/', className: 'platform-spincity', accent: '#ff709d' },
    { name: 'Ultra Panda', image: 'UltraPanda.jpg', url: 'https://www.ultrapanda.club/', className: 'platform-ultra-panda', accent: '#62d9b1' },
    { name: 'Vblink', image: 'Vblink.jpeg', url: 'https://www.vblink777.club/', className: 'platform-vblink', accent: '#24d5a5' },
    { name: 'Vegas Sweeps', image: 'VegasSweeps.jpg', url: 'https://m.lasvegassweeps.com/', className: 'platform-vegas-sweeps', accent: '#f0c04f' },
    { name: 'Winners Club', image: 'WinnersClub.jpg', url: 'https://www.winnersclub777.com/', className: 'platform-winners-club', accent: '#6bd58f' },
    { name: 'YOLO', image: 'YOLO.jpg', url: 'https://yolo777.game/', className: 'platform-yolo', accent: '#ff8c5a' }
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
        menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
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
        thumbnail.setAttribute('aria-label', `View ${imageTitle(image.src.split('/').pop())}`);
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
            { headers: { Accept: 'application/vnd.github+json' } }
        );

        if (!response.ok) {
            throw Error('Gallery unavailable');
        }

        const files = (await response.json())
            .filter((file) => file.type === 'file' && /\.(jpe?g|png|webp|gif)$/i.test(file.name))
            .map((file) => file.name)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

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
    title.textContent = slides[index].querySelector('img').alt.replace(/ platform$/i, '');
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
    play.setAttribute('aria-label', playing ? 'Pause automatic slideshow' : 'Play automatic slideshow');
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
   DYNAMIC PLATFORM PROMOTIONS

   Add promotion images to:
   images/promotions/

   Every image becomes one floating promotion bubble.
   If the folder has no valid images, no promotion UI is shown.
========================================================= */

const promotionFolder = 'images/promotions';
const promotionApi = 'https://api.github.com/repos/Kabikesu/Gkingeldorad.us/contents/images/promotions?ref=main';
const promotionDelay = 30000;

/*
   Optional links for promotion images.
   The key must exactly match the image filename.
   If no custom link is supplied, the platform URL is used when
   the promotion filename matches a platform name; otherwise the
   promotion can still be viewed without a destination link.
*/
const promotionLinks = {
    'eldorado-promotion.jpg': 'https://www.eldorado777.co/'
};

function promotionName(fileName) {
    return fileName
        .replace(/\.[^.]+$/, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (character) => character.toUpperCase());
}

function getPromotionUrl(fileName) {
    if (promotionLinks[fileName]) {
        return promotionLinks[fileName];
    }

    const normalizedFile = fileName
        .replace(/\.[^.]+$/, '')
        .replace(/[-_ ]/g, '')
        .toLowerCase();

    const matchedPlatform = platforms.find((platform) => {
        const normalizedName = platform.name.replace(/[-_ ]/g, '').toLowerCase();
        return normalizedFile.includes(normalizedName);
    });

    return matchedPlatform ? matchedPlatform.url : '';
}

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
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            font-family: inherit;
        }

        .promotion-bubbles {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 9px;
        }

        .promotion-bubble {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 58px;
            height: 58px;
            min-width: 58px;
            min-height: 58px;
            padding: 0;
            border: 1px solid rgba(255, 214, 76, .55);
            border-radius: 50%;
            background: linear-gradient(135deg, #17131f, #281b35);
            color: #fff;
            font: inherit;
            cursor: pointer;
            box-shadow: 0 14px 35px rgba(0, 0, 0, .35), 0 0 25px rgba(255, 190, 45, .12);
            animation: promotionPulse 2.4s ease-in-out infinite;
            transition: transform .2s ease, border-color .2s ease, filter .2s ease;
        }

        .promotion-bubble:hover {
            transform: translateY(-3px) scale(1.06);
            border-color: rgba(255, 214, 76, .8);
            filter: brightness(1.08);
        }

        .promotion-bubble-icon {
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
            font-size: 1.35rem;
            line-height: 1;
        }

        .promotion-bubble > span:last-child {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
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
                width: 52px;
                height: 52px;
                min-width: 52px;
                min-height: 52px;
            }

            .promotion-bubble-icon {
                font-size: 1.2rem;
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

function createPromotionUI(promotions) {
    if (!promotions.length || document.querySelector('.site-promotion')) {
        return;
    }

    addPromotionStyles();

    const wrapper = document.createElement('div');
    wrapper.className = 'site-promotion';

    const bubbles = document.createElement('div');
    bubbles.className = 'promotion-bubbles';
    bubbles.setAttribute('aria-label', 'Available promotions');

    const overlay = document.createElement('div');
    overlay.className = 'promotion-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-hidden', 'true');

    const modal = document.createElement('div');
    modal.className = 'promotion-modal';
    overlay.appendChild(modal);

    promotions.forEach((promotion, promotionIndex) => {
        const button = document.createElement('button');
        button.className = 'promotion-bubble';
        button.type = 'button';
        button.innerHTML = `
            <span class="promotion-bubble-icon" aria-hidden="true">🔥</span>
            <span>${promotionName(promotion.file)}</span>
        `;
        button.setAttribute('aria-label', `Open ${promotionName(promotion.file)} promotion`);
        button.addEventListener('click', () => openPromotion(promotionIndex));
        bubbles.appendChild(button);
    });

    wrapper.appendChild(bubbles);
    wrapper.appendChild(overlay);
    document.body.appendChild(wrapper);

    let currentPromotion = 0;

    function renderPromotion(promotionIndex) {
        currentPromotion = promotionIndex;
        const promotion = promotions[currentPromotion];
        const name = promotionName(promotion.file);
        const url = getPromotionUrl(promotion.file);

        modal.innerHTML = `
            <div class="promotion-image-wrap">
                <button class="promotion-close" type="button" aria-label="Close promotion">×</button>
                <img class="promotion-image" src="${promotion.imageUrl}" alt="${name} promotion">
            </div>
            <div class="promotion-content">
                <p class="promotion-kicker">Featured Promotion</p>
                <h2 class="promotion-title">${name}</h2>
                <p class="promotion-description">Explore this featured platform promotion.</p>
                ${url ? `<a class="promotion-action" href="${url}" target="_blank" rel="noopener noreferrer">VISIT PLATFORM →</a>` : ''}
            </div>
        `;

        modal.querySelector('.promotion-close').addEventListener('click', closePromotion);
    }

    function openPromotion(promotionIndex = 0) {
        renderPromotion(promotionIndex);
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('promotion-open');
        modal.querySelector('.promotion-close')?.focus();
    }

    function closePromotion() {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('promotion-open');
    }

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

    setTimeout(() => {
        if (!overlay.classList.contains('open')) {
            openPromotion(0);
        }
    }, promotionDelay);
}

async function loadPromotions() {
    try {
        const response = await fetch(promotionApi, {
            headers: { Accept: 'application/vnd.github+json' }
        });

        if (!response.ok) {
            return;
        }

        const files = await response.json();
        const promotions = files
            .filter((file) => file.type === 'file' && /\.(jpe?g|png|webp|gif)$/i.test(file.name))
            .map((file) => ({
                file: file.name,
                imageUrl: `${promotionFolder}/${encodeURIComponent(file.name)}`
            }));

        if (promotions.length) {
            createPromotionUI(promotions);
        }
    } catch (error) {
        console.info('No promotions available.');
    }
}

loadPromotions();
