const main = document.getElementById("main");
// const altolympus = document.getElementById("altolympus");
// const misc = document.getElementById("misc");
const carousels = document.querySelectorAll(".carousel");

let quotes = [
    [
        {
            id: "altolympus",
            image: "https://www.ancientworldmagazine.com/site/assets/files/1195/rubens-phaeton-1.jpg",
            quote: `"You can't just <i>SAY</i> perchance" - altolympus`,
        },
        {
            id: "linux",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzrZVQJhpaQeiO4NYlGTNMKc26LHTA-o-RA&s",
            quote: '"You should install a package about that" - altolympus',
        },
        {
            id: "sky",
            image: "https://blog.gale.com/wp-content/uploads/2024/07/iStock-1693812103.jpg",
            quote: `"What's up?" - Anon,<br />"The sky" - altolympus`,
        },
    ],

    [
        {
            id: "spider",
            image: "https://lh3.googleusercontent.com/proxy/mtBzXWcpqeV9IGsqzM9f4KVmPa8eukHxzdQlQxK2mPDV4vunA14hWOy1JbSw1zgFSm-QzW0GUAGLUXsNRTYyGtLeVgQpGh2bGLSRYdONBntYJhi6WL21Zq6GIK6Gufh0IL8WeU4sNIYvQ8C6B-ycto_WQA",
            quote: '"With great power comes great responsibility" - Ben Parker',
        },
        {
            id: "owl",
            image: "https://spotlight153.com/wp-content/uploads/2022/06/62251732-0-q80-900x506.jpg",
            quote: '"Now I am both King and Queen, best of both things" - King',
        },
        {
            id: "amphibia",
            image: "https://upload.wikimedia.org/wikipedia/en/4/45/Amphibia_Season_3_Intro_Image.jpg",
            quote: '"Spranne against the world!"- Sprig and Anne<br />(while against the world)',
        },
        {
            id: "history",
            image: "https://i.ytimg.com/vi/xuCn8ux2gbs/maxresdefault.jpg",
            quote: '"Those are the Tamil Kings, no one conquers the Tamil Kings" - Bill Wurtz',
        },
        {
            id: "arcane",
            image: "https://cdn.europosters.eu/image/1300/254049.jpg",
            quote: '"In our pursuit of greatness, we failed to do good" - Viktor',
        },

        {
            id: "undertale",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzjmDRF7gS0Jt3XBMQ6PUm5WsVJdc1G0JBw&s",
            quote: `"Despite everything, it's still you" - Asgore's mirror`,
        },
        {
            id: "sans",
            image: "https://cdn.mos.cms.futurecdn.net/5nULLkfBtxNpjR5SmvmSw-1200-80.jpg",
            quote: `"my brother has a very special attack" - sans`,
        },
        {
            id: "aurora",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTBpnkwrN-hu9sgXK1KNhVYNZAwb_qXwHOQ&s",
            quote: '"Nobody dies. Not for me. Not ever" - Kendal',
        },
        {
            id: "hades",
            image: "https://m.media-amazon.com/images/M/MV5BYjBlODg3ZTgtN2ViNS00MDlmLWIyMTctZmQ2NWYwMzE2N2RmXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
            quote: '"There is no escape." - Hades (from Hades)',
        },

        {
            id: "eda",
            image: "https://d23.com/app/uploads/2021/06/1180w-600h-060921_The-Owl-House_season-two_iris.jpg",
            quote: `"Quitting! It's like trying, but easier" - Eda the Owl Lady`,
        },
    ],
];

function mix(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

quotes.forEach((n) => mix(n));

quotes.forEach((group, index) => {
    for (const quote of group) {
        carousels[index].innerHTML += `
        <div id=outer>
            <div class="quote">
                <div class="container ${quote.id}">
                    <div class="img" style="background-image: url(${quote.image})"></div>
                    <p class="caption">${quote.quote}</p>
                </div>
            </div>
        </div>
    `;
    }
});

// for (const quote of quotes[1]) {
//     misc.innerHTML += `
//         <div id=outer>
//             <div class="quote">
//                 <div class="container ${quote.id}">
//                     <div class="img" style="background-image: url(${quote.image})"></div>
//                     <p class="caption">${quote.quote}</p>
//                 </div>
//             </div>
//         </div>
//     `;
// }

const outers = document.querySelectorAll("#outer");
let timeouts = [];

function perspective(e) {
    const outer = e.target.closest("#outer");
    const quote = outer.firstElementChild;

    let px = e.offsetX / outer.offsetWidth;
    let py = 1 - e.offsetY / outer.offsetHeight;

    quote.style.setProperty("--x", `${py * 20 - 10}deg`);
    quote.style.setProperty("--y", `${px * 20 - 10}deg`);
}

outers.forEach((outer, i) => {
    outer.onmousemove = perspective;

    outer.onmouseenter = () => {
        clearTimeout(timeouts[i]);
        outer.style.zIndex = "3";
    };

    outer.onmouseleave = () => {
        outer.style.zIndex = "2";
        timeouts[i] = setTimeout(() => (outer.style.zIndex = "1"), 200);
    };

    outer.onmousedown = () => setTimeout(() => zoom(outer));
});

let zoomBox = document.getElementById("zoom");

zoomBox.onmousemove = perspective;

let prevPos = {
    x: zoomBox.offsetLeft,
    y: zoomBox.offsetTop,
};

let mouse = {
    x: 0,
    y: 0,
};

let zoomClicked = false;

zoomBox.onmousedown = (e) => {
    zoomClicked = true;

    mouse.x = e.clientX;
    mouse.y = e.clientY;
};

document.onmouseup = () => {
    zoomClicked = false;

    // console.log(zoomBox.offsetLeft);

    prevPos.x = zoomBox.offsetLeft;
    prevPos.y = zoomBox.offsetTop;
};

document.onmousemove = (e) => {
    if (!zoomClicked) return;

    // console.log(prevPos.x);

    let xDelta = e.clientX - mouse.x;
    let yDelta = e.clientY - mouse.y;

    let x = prevPos.x + xDelta;
    let y = prevPos.y + yDelta;

    // let scale = 0.01;

    // console.log(x);

    zoomBox.animate(
        {
            left: `${x}px`,
            top: `${y}px`,
        },
        { duration: 100, fill: "forwards" },
    );

    // zoomBox.style.translate = `${x}px 10%`;
};

let scale = 1;

zoomBox.onwheel = (e) => {
    scale = e.deltaY < 0 ? scale + 0.1 : Math.max(scale - 0.1, 0.05);
    // dir += Math.max(Math.sign(e.deltaY) / 10, 0.05);

    zoomBox.style.scale = scale;
};

function zoom(el) {
    document.body.style.overflow = "hidden";

    const p = el.getBoundingClientRect();

    // console.log(el.cloneNode(true));

    zoomBox.appendChild(el.cloneNode(true));

    zoomBox.animate(
        [
            {
                left: `${p.left}px`,
                top: `${p.top}px`,
                width: `${p.width}px`,
                height: `${p.height}px`,
                translate: "-0% -0%",
            },
            {
                left: "50%",
                top: "50%",
                width: "50%",
                height: "auto",
                translate: "-50% -50%",
            },
        ],
        {
            duration: 400,
            easing: "cubic-bezier(0.165, 0.84, 0.44, 1)",
            fill: "forwards",
        },
    );

    zoomBox.style.display = "block";
}

const zoomout = document.getElementById("zoomout");

function unzoom() {
    if (zoomBox.innerHTML == "" || zoomClicked) return;

    scale = 1;

    setTimeout(() => (zoomBox.style.scale = scale), 600);

    document.body.style.overflow = "auto";

    zoomout.innerHTML = zoomBox.innerHTML;

    zoomBox.innerHTML = "";
    zoomBox.style.display = "none";

    zoomout.animate(
        {
            opacity: 0,
            scale: [zoomBox.style.scale, 0],
        },
        {
            duration: 600,
            easing: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        },
    );

    setTimeout(() => (zoomout.innerHTML = ""), 550);
}

document.onmousedown = unzoom;

document.onkeydown = (e) => {
    if (e.key == "Escape") unzoom();
};
// document.onscroll = () => {
//     // console.log("ya done scrolled bitch");
//     // console.log((document.documentElement.scrollTop = 0));

// };

// hyerplexed anime grid thing but mostly invisible, sometimes quick wipe thing
const bg = document.getElementById("bg");

let maxWidth, maxHeight, columns, rows;

function resize() {
    bg.innerHTML = "";
    bg.style.height = Math.max(document.documentElement.offsetHeight, window.innerHeight) + "px";

    maxWidth = bg.offsetWidth;
    maxHeight = bg.offsetHeight;

    columns = Math.floor(maxWidth / 100);
    rows = Math.floor(maxHeight / 100);

    // console.log(columns);
    // console.log(rows);

    bg.style.setProperty("--columns", columns);
    bg.style.setProperty("--rows", rows);

    for (let i = 0; i < rows * columns; i++) {
        let tile = document.createElement("div");
        tile.id = "tile";

        bg.appendChild(tile);
    }
}

resize();
window.onresize = resize;

const carouselSelectors = document.querySelectorAll("#carousel-selector > p");

for (const selector of carouselSelectors) {
    selector.onclick = () => {
        carouselSelectors.forEach((n) => (n.dataset.active = "false"));
        carousels.forEach((n) => {
            if (n.dataset.active == "true") n.dataset.active = "false";
        });

        selector.dataset.active = "true";
        carousels[selector.id].dataset.active = "true";
        // console.log(selector.id);
    };
}

// sometimes background tiles get smaller across screen in wave style
// randomize buncha shit
// absolute leg
