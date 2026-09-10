/* =========================================================
   GKING ELDORAD
   MAIN JAVASCRIPT
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
const clamp = (number, min = 0, max = 1) => Math.min(max, Math.max(min, number));

function updateHero() {
    heroRaf = 0;
    if (!hero) return;

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
    if (!heroRaf) heroRaf = requestAnimationFrame(updateHero);
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
   GALLERY
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

const imageTitle = (file) => file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());

function buildThumbnailWindow() {
    if (!thumbsBox) return;
    thumbsBox.innerHTML = '';
    if (!slides.length) return;

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

function renderGallery(files) {
    if (!galleryMain || !dotsBox) return;

    files.forEach((file) => {
        const name = imageTitle(file);
        const slide = document.createElement('div');
        const dot = document.createElement('button');

        slide.className = 'mySlides fade';
        slide.innerHTML = `<img src="gallery/${encodeURIComponent(file)}" alt="${name} platform" loading="lazy">`;
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
    } else {
        if (counter) counter.textContent = '0 / 0';
        if (title) title.textContent = 'No images yet';
    }
}

async function loadGallery() {
    try {
        const response = await fetch(
            'https://api.github.com/repos/Kabikesu/Gkingeldorad.us/contents/gallery?ref=main',
            { headers: { Accept: 'application/vnd.github+json' } }
        );
        if (!response.ok) throw Error('Gallery unavailable');

        const files = (await response.json())
            .filter((file) => file.type === 'file' && /\.(jpe?g|png|webp|gif)$/i.test(file.name))
            .map((file) => file.name)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

        renderGallery(files);
    } catch (error) {
        if (counter) counter.textContent = 'Gallery unavailable';
        if (title) title.textContent = 'Please try again later';
        console.error(error);
    }
}

function showSlide(slideIndex) {
    if (!slides.length) return;
    index = (slideIndex + slides.length) % slides.length;

    slides.forEach((slide, number) => {
        slide.style.display = number === index ? 'block' : 'none';
    });
    dots.forEach((dot, number) => dot.classList.toggle('active', number === index));

    if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
    if (title) title.textContent = slides[index].querySelector('img').alt.replace(/ platform$/i, '');
    buildThumbnailWindow();
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function start() {
    stop();
    if (slides.length > 1 && playing) timer = setInterval(() => showSlide(index + 1), 4000);
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
    playing ? start() : stop();
});

gallery?.addEventListener('mouseenter', stop);
gallery?.addEventListener('mouseleave', start);
gallery?.addEventListener('focusin', stop);
gallery?.addEventListener('focusout', (event) => {
    if (!gallery.contains(event.relatedTarget)) start();
});

loadGallery();

/* =========================================================
   PLATFORM COUNTER
   Automatically reflects the platform data above.
========================================================= */

function updatePlatformCounters() {
    document.querySelectorAll('[data-platform-count]').forEach((element) => {
        element.textContent = platforms.length;
    });

    document.querySelectorAll('[data-platform-count-label]').forEach((element) => {
        const count = platforms.length;
        element.textContent = `${count} ${count === 1 ? 'PLATFORM' : 'PLATFORMS'}`;
    });
}

updatePlatformCounters();

/* =========================================================
   PREMIUM PLATFORM CARD EFFECTS
========================================================= */

if (platformGrid && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    platformGrid.addEventListener('pointermove', (event) => {
        const card = event.target.closest('.platform-card');
        if (!card || !platformGrid.contains(card)) return;

        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - .5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - .5) * 2;

        card.style.setProperty('--tilt-x', `${y * -3}deg`);
        card.style.setProperty('--tilt-y', `${x * 3}deg`);
        card.style.setProperty('--shine-x', `${((x + 1) / 2) * 100}%`);
        card.style.setProperty('--shine-y', `${((y + 1) / 2) * 100}%`);
    });

    platformGrid.addEventListener('pointerout', (event) => {
        const card = event.target.closest('.platform-card');
        if (!card || card.contains(event.relatedTarget)) return;

        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
        card.style.setProperty('--shine-x', '50%');
        card.style.setProperty('--shine-y', '50%');
    });
}

/* =========================================================
   SUBTLE GOLDEN PARTICLES
========================================================= */

function createAmbientParticles() {
    if (document.querySelector('.ambient-particles')) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layer = document.createElement('div');
    layer.className = 'ambient-particles';
    layer.setAttribute('aria-hidden', 'true');

    const fragment = document.createDocumentFragment();
    const count = matchMedia('(max-width: 767px)').matches ? 16 : 28;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('span');
        particle.className = 'ambient-particle';
        particle.style.setProperty('--particle-left', `${Math.random() * 100}%`);
        particle.style.setProperty('--particle-delay', `${Math.random() * 12}s`);
        particle.style.setProperty('--particle-duration', `${8 + Math.random() * 10}s`);
        particle.style.setProperty('--particle-size', `${2 + Math.random() * 4}px`);
        particle.style.setProperty('--particle-drift', `${-50 + Math.random() * 100}px`);
        fragment.appendChild(particle);
    }

    layer.appendChild(fragment);
    document.body.appendChild(layer);
}

createAmbientParticles();

/* =========================================================
   DYNAMIC PLATFORM PROMOTIONS

   Add promotion images to images/promotions/
   One promotion -> 6 floating bubbles
   Two promotions -> 10 floating bubbles
   Multiple promotions are shown automatically one after another.
========================================================= */

const promotionFolder = 'images/promotions';
const promotionApi = 'https://api.github.com/repos/Kabikesu/Gkingeldorad.us/contents/images/promotions?ref=main';
const promotionDelay = 30000;

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
    if (promotionLinks[fileName]) return promotionLinks[fileName];

    const normalizedFile = fileName.replace(/\.[^.]+$/, '').replace(/[-_ ]/g, '').toLowerCase();
    const matchedPlatform = platforms.find((platform) => {
        const normalizedName = platform.name.replace(/[-_ ]/g, '').toLowerCase();
        return normalizedFile.includes(normalizedName);
    });
    return matchedPlatform ? matchedPlatform.url : '';
}

function getPromotionBubbleCount(promotionCount) {
    if (promotionCount <= 1) return 6;
    if (promotionCount === 2) return 10;
    return Math.min(14, 4 + promotionCount * 4);
}

function getPromotionAutoInterval(promotionCount) {
    if (promotionCount <= 1) return 0;
    return Math.min(60000, 15000 + promotionCount * 5000);
}

function getPromotionAccent(fileName) {
    const normalizedFile = fileName.replace(/\.[^.]+$/, '').replace(/[-_ ]/g, '').toLowerCase();
    const matchedPlatform = platforms.find((platform) => {
        const normalizedName = platform.name.replace(/[-_ ]/g, '').toLowerCase();
        return normalizedFile.includes(normalizedName);
    });
    return matchedPlatform ? matchedPlatform.accent : '#e5bd52';
}

function addPromotionStyles() {
    if (document.getElementById('promotion-styles')) return;

    const style = document.createElement('style');
    style.id = 'promotion-styles';
    style.textContent = `
        .site-promotion {
            position: fixed;
            inset: 0;
            z-index: 9998;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            overflow: hidden;
            font-family: inherit;
        }

        .promotion-bubbles {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .promotion-bubble {
            --bubble-accent: #e5bd52;
            position: absolute;
            top: 0;
            left: 0;
            display: grid;
            place-items: center;
            width: 60px;
            height: 60px;
            min-width: 60px;
            min-height: 60px;
            padding: 0;
            border: 1px solid color-mix(in srgb, var(--bubble-accent) 72%, white 28%);
            border-radius: 50%;
            background:
                radial-gradient(circle at 30% 24%, rgba(255,255,255,.52) 0 7%, transparent 8%),
                radial-gradient(circle at 65% 70%, color-mix(in srgb, var(--bubble-accent) 45%, transparent), transparent 58%),
                linear-gradient(145deg, rgba(255,255,255,.20), color-mix(in srgb, var(--bubble-accent) 48%, transparent));
            color: #fff;
            font: inherit;
            cursor: pointer;
            pointer-events: auto;
            opacity: .76;
            box-shadow:
                inset -7px -9px 18px rgba(255,255,255,.08),
                inset 7px 6px 15px rgba(255,255,255,.13),
                0 10px 30px rgba(0,0,0,.18),
                0 0 24px color-mix(in srgb, var(--bubble-accent) 48%, transparent);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            transform-origin: center;
            will-change: transform, opacity;
            animation: promotionWind var(--wind-duration, 18s) linear infinite alternate, promotionBubblePulse 4s ease-in-out infinite;
            transition: filter .2s ease, border-color .2s ease, opacity .2s ease, box-shadow .2s ease;
        }

        .promotion-bubble:hover,
        .promotion-bubble:focus-visible {
            opacity: .98;
            border-color: #fff;
            filter: brightness(1.14) saturate(1.12);
            box-shadow:
                inset -7px -9px 18px rgba(255,255,255,.12),
                inset 7px 6px 15px rgba(255,255,255,.16),
                0 12px 34px rgba(0,0,0,.22),
                0 0 34px color-mix(in srgb, var(--bubble-accent) 75%, transparent);
            animation-play-state: paused, paused;
            outline: none;
        }

        .promotion-bubble-icon {
            font-size: 1.25rem;
            line-height: 1;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,.25));
        }

        .promotion-bubble-name {
            position: absolute;
            left: 50%;
            bottom: -25px;
            transform: translateX(-50%);
            width: max-content;
            max-width: 130px;
            padding: 4px 8px;
            border: 1px solid color-mix(in srgb, var(--bubble-accent) 60%, white 40%);
            border-radius: 999px;
            background: color-mix(in srgb, var(--bubble-accent) 32%, rgba(8,10,15,.76));
            color: rgba(255,255,255,.96);
            font-size: .58rem;
            font-weight: 800;
            line-height: 1;
            letter-spacing: .02em;
            white-space: nowrap;
            text-align: center;
            pointer-events: none;
            text-shadow: 0 1px 4px rgba(0,0,0,.45);
            box-shadow: 0 0 12px color-mix(in srgb, var(--bubble-accent) 35%, transparent);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }

        .promotion-modal {
            position: fixed;
            inset: 0;
            display: grid;
            place-items: center;
            padding: 24px;
            background: rgba(0,0,0,.76);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: opacity .25s ease, visibility .25s ease;
        }

        .promotion-modal.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .promotion-dialog {
            position: relative;
            width: min(92vw, 820px);
            max-height: 90vh;
            overflow: auto;
            padding: 12px;
            border: 1px solid rgba(255,255,255,.2);
            border-radius: 20px;
            background: rgba(12,13,18,.94);
            box-shadow: 0 30px 80px rgba(0,0,0,.55);
        }

        .promotion-image {
            display: block;
            width: 100%;
            max-height: 78vh;
            object-fit: contain;
            border-radius: 12px;
        }

        .promotion-close {
            position: absolute;
            top: 18px;
            right: 18px;
            z-index: 2;
            display: grid;
            place-items: center;
            width: 38px;
            height: 38px;
            border: 1px solid rgba(255,255,255,.25);
            border-radius: 50%;
            background: rgba(0,0,0,.55);
            color: #fff;
            font-size: 1.25rem;
            cursor: pointer;
        }

        body.promotion-open {
            overflow: hidden;
        }

        @keyframes promotionWind {
            0% { transform: translate3d(var(--x1), var(--y1), 0) rotate(var(--r1)) scale(var(--s1)); }
            25% { transform: translate3d(var(--x2), var(--y2), 0) rotate(var(--r2)) scale(var(--s2)); }
            50% { transform: translate3d(var(--x3), var(--y3), 0) rotate(var(--r3)) scale(var(--s3)); }
            75% { transform: translate3d(var(--x4), var(--y4), 0) rotate(var(--r4)) scale(var(--s4)); }
            100% { transform: translate3d(var(--x5), var(--y5), 0) rotate(var(--r5)) scale(var(--s5)); }
        }

        @keyframes promotionBubblePulse {
            0%, 100% { opacity: .64; }
            50% { opacity: .86; }
        }

        @media (max-width: 520px) {
            .promotion-bubble {
                width: 48px;
                height: 48px;
                min-width: 48px;
                min-height: 48px;
            }

            .promotion-bubble-icon { font-size: 1rem; }
            .promotion-bubble-name { bottom: -22px; max-width: 105px; font-size: .52rem; padding: 3px 6px; }
            .promotion-modal { padding: 12px; }
            .promotion-dialog { width: 96vw; border-radius: 15px; padding: 8px; }
        }

        @media (prefers-reduced-motion: reduce) {
            .promotion-bubble { animation: none; }
        }
    `;

    document.head.appendChild(style);
}

function randomBetween(min, max) {
    return Math.round((min + Math.random() * (max - min)) * 10) / 10;
}

function setBubblePath(button, bubbleIndex) {
    const vw = Math.max(window.innerWidth, 320);
    const vh = Math.max(window.innerHeight, 500);
    const size = window.innerWidth <= 520 ? 48 : 60;
    const maxX = Math.max(0, vw - size - 8);
    const maxY = Math.max(0, vh - size - 8);
    const padX = Math.min(24, maxX / 3);
    const padY = Math.min(24, maxY / 3);

    const x = () => randomBetween(padX, Math.max(padX, maxX - padX));
    const y = () => randomBetween(padY, Math.max(padY, maxY - padY));

    button.style.setProperty('--x1', `${x()}px`);
    button.style.setProperty('--y1', `${y()}px`);
    button.style.setProperty('--x2', `${x()}px`);
    button.style.setProperty('--y2', `${y()}px`);
    button.style.setProperty('--x3', `${x()}px`);
    button.style.setProperty('--y3', `${y()}px`);
    button.style.setProperty('--x4', `${x()}px`);
    button.style.setProperty('--y4', `${y()}px`);
    button.style.setProperty('--x5', `${x()}px`);
    button.style.setProperty('--y5', `${y()}px`);

    for (let point = 1; point <= 5; point++) {
        button.style.setProperty(`--r${point}`, `${randomBetween(-18, 18)}deg`);
        button.style.setProperty(`--s${point}`, randomBetween(.76, 1.22));
    }

    button.style.setProperty('--wind-duration', `${randomBetween(15 + bubbleIndex * 1.5, 24 + bubbleIndex * 2)}s`);
    button.style.animationDelay = `${randomBetween(-10, 0)}s, ${randomBetween(-4, 0)}s`;
}

function createPromotionSystem(promotions) {
    if (!promotions.length) return;

    addPromotionStyles();

    const root = document.createElement('div');
    root.className = 'site-promotion';
    root.innerHTML = `
        <div class="promotion-bubbles" aria-label="Promotions"></div>
        <div class="promotion-modal" aria-hidden="true">
            <div class="promotion-dialog" role="dialog" aria-modal="true" aria-label="Promotion">
                <button class="promotion-close" type="button" aria-label="Close promotion">×</button>
                <img class="promotion-image" src="" alt="Promotion">
            </div>
        </div>
    `;
    document.body.appendChild(root);

    const bubbles = root.querySelector('.promotion-bubbles');
    const overlay = root.querySelector('.promotion-modal');
    const modal = root.querySelector('.promotion-dialog');
    const image = root.querySelector('.promotion-image');
    const closeButton = root.querySelector('.promotion-close');

    let currentPromotion = 0;
    let autoPromotionIndex = 0;
    let autoTimer = null;
    let autoOpening = false;

    function renderPromotion(promotionIndex) {
        const promotion = promotions[promotionIndex];
        currentPromotion = promotionIndex;
        image.src = `${promotionFolder}/${encodeURIComponent(promotion.file)}`;
        image.alt = `${promotionName(promotion.file)} promotion`;
        modal.setAttribute('aria-label', `${promotionName(promotion.file)} promotion`);
    }

    function openPromotion(promotionIndex = 0) {
        renderPromotion(promotionIndex);
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('promotion-open');
        closeButton.focus();
    }

    function scheduleNextAutomaticPromotion() {
        clearTimeout(autoTimer);
        autoTimer = null;

        if (autoPromotionIndex >= promotions.length) return;

        const interval = getPromotionAutoInterval(promotions.length);
        autoTimer = setTimeout(() => {
            if (!overlay.classList.contains('open')) {
                autoOpening = true;
                openPromotion(autoPromotionIndex);
                autoPromotionIndex += 1;
            } else {
                scheduleNextAutomaticPromotion();
            }
        }, interval);
    }

    function closePromotion() {
        const wasAutomatic = autoOpening;
        autoOpening = false;
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('promotion-open');

        if (wasAutomatic && autoPromotionIndex < promotions.length) {
            scheduleNextAutomaticPromotion();
        }
    }

    const bubbleCount = getPromotionBubbleCount(promotions.length);

    for (let bubbleIndex = 0; bubbleIndex < bubbleCount; bubbleIndex++) {
        const promotionIndex = bubbleIndex % promotions.length;
        const promotion = promotions[promotionIndex];
        const name = promotionName(promotion.file);
        const button = document.createElement('button');
        button.className = 'promotion-bubble';
        button.type = 'button';
        button.style.setProperty('--bubble-accent', getPromotionAccent(promotion.file));
        button.innerHTML = `
            <span class="promotion-bubble-icon" aria-hidden="true">🔥</span>
            <span class="promotion-bubble-name">${name}</span>
        `;
        button.setAttribute('aria-label', `Open ${name} promotion`);
        setBubblePath(button, bubbleIndex);
        button.addEventListener('click', () => openPromotion(promotionIndex));
        bubbles.appendChild(button);
    }

    closeButton.addEventListener('click', closePromotion);
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) closePromotion();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('open')) closePromotion();
    });

    setTimeout(() => {
        if (!overlay.classList.contains('open')) {
            autoOpening = true;
            openPromotion(0);
            autoPromotionIndex = 1;
        }
    }, promotionDelay);
}

async function loadPromotions() {
    try {
        const response = await fetch(promotionApi, {
            headers: { Accept: 'application/vnd.github+json' }
        });
        if (!response.ok) throw Error('Promotion folder unavailable');

        const files = await response.json();
        const promotions = files
            .filter((file) => file.type === 'file' && /\.(jpe?g|png|webp|gif)$/i.test(file.name))
            .map((file) => ({
                file: file.name,
                url: getPromotionUrl(file.name)
            }));

        createPromotionSystem(promotions);
    } catch (error) {
        console.error('Promotions unavailable:', error);
    }
}

loadPromotions();