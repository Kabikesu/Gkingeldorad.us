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
        name: 'FireKirin',
        image: 'FireKirin.jpg',
        url: 'http://start.firekirin.xyz:8580/index.html',
        className: 'platform-firekirin',
        accent: '#ff4b4b'
    },
    {
        name: 'ParaCasino',
        image: 'ParaCasino.jpg',
        url: 'https://download.paracasino.net//',
        className: 'platform-paracasino',
        accent: '#f0a83c'
    },
    {
        name: 'Orionstar',
        image: 'OrionStar.jpeg',
        url: 'https://www.orionstarsonline.com/',
        className: 'platform-orion',
        accent: '#4bb3ff'
    },
    {
        name: 'Juwa',
        image: 'JUWA.jpg',
        url: 'https://dl.juwa777.com/',
        className: 'platform-juwa',
        accent: '#9d6cff'
    },
    {
        name: 'Vblink',
        image: 'Vblink.jpeg',
        url: 'https://www.vblink777.club/',
        className: 'platform-vblink',
        accent: '#24d5a5'
    },
    {
        name: 'Pandmaster',
        image: 'Pandamaster.jpg',
        url: 'https://www.pandamaster.vip:8888/index.html',
        className: 'platform-panda',
        accent: '#f05d8b'
    },
    {
        name: 'CashFrenzy',
        image: 'CashFrenzy.png',
        url: 'https://www.cashfrenzy777.com',
        className: 'platform-cash',
        accent: '#ffd34e'
    },
    {
        name: 'MR.Allinone',
        image: 'AllinOne.jpeg',
        url: 'https://www.mrallinone777.com',
        className: 'platform-allinone',
        accent: '#55a7ff'
    },
    {
        name: 'Medusa',
        image: 'Medusa.jpg',
        url: 'https://medusa777.com',
        className: 'platform-medusa',
        accent: '#d96cff'
    },
    {
        name: 'GameVault',
        image: 'GameVault.jpg',
        url: 'http://download.gamevault999.com/',
        className: 'platform-gamevault',
        accent: '#45e0ff'
    }
];

const platformGrid = $('#platform-grid');

if (platformGrid) {
    platformGrid.innerHTML = platforms.map((platform, index) => `
        <a class="platform-card ${platform.className}" style="--accent:${platform.accent}" href="${platform.url}">
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
        counter.textContent = 'Gallery unavailable';
        title.textContent = 'Please try again later';
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
