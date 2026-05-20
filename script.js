const body = document.getElementById("fake-body"); // because fuck you
const main = document.getElementById("main");
const carouselSelection = document.getElementById("carousel-selection");
const carouselContainer = document.getElementById("carousel-container");

let quotes = [
    {
        id: "Dimension 20",
        content: [
            {
                id: "gorg_death",
                big: false,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJm_s2ByzxmPT7Cg4xtfBbWsn-tAZ3vvGEHw&s",
                quote: '"I died!" - Gorgug Thistlespring',
            },
            {
                id: "gorg_dad",
                big: false,
                image: "https://static.wikia.nocookie.net/fantasy-high/images/c/c8/Zac_Oyama_as_Gorgug_Thistlespring.png/revision/latest?cb=20200508135435",
                quote: '"If someone is your dad, they have to tell you right?" - Gorgug Thistlespring',
            },
            {
                id: "gorg_disaster",
                big: false,
                image: "https://external-preview.redd.it/edit-while-theyre-killing-it-with-zac-oyama-adventuring-v0-1SYpdgc5-RwUFoQYTxhxCgmkAbE0zACrwDPbYEgMmtA.jpg?width=640&crop=smart&auto=webp&s=c5b2ca419a8caca748fcbe927297d7da8bdd72c1",
                quote: '"Tornado! Earthquake!" - Gorgug Thistlespring',
            },
            {
                id: "d20temp",
                big: false,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F3vkSn8zyPx1aX8qBFCw00frCFhQ.jpg&f=1&nofb=1&ipt=f45369423fd0668616caa0b80e5bb76e20566856420770deb8e204b20755a754",
                quote: "just fig flirting with goldenrod because its funny i cant remember specific quotes right now ill fix it i promise",
            },
            {
                id: "blm_butthole",
                big: false,
                image: "https://variety.com/wp-content/uploads/2024/05/Dimension-20-Brennan-Lee-Mulligan.jpg?w=1000&h=563&crop=1",
                quote: `"And now comes the time as Dungeon Master where I have to decide what skill is involved with jumping up a corn goblin's butthole" - Brennan Lee Mulligan`,
            },
        ],
    },
    {
        id: "Make Some Noise",
        content: [
            {
                id: "knight",
                big: true,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthfvnext.bing.com%2Fth%2Fid%2FOIP._-XRO47WuLe5JzcNyIwDgwHaEK%3Fr%3D0%26cb%3Dthfvnextfalcon%26pid%3DApi&f=1&ipt=277d42de94164910c49f0ccd269fe83c24a0e15e2a800c87700c1821326734aa",
                // quote: '"My hands are sooooo stickyyy" - Jacob Wysocki. "now eat that second devilled egg". "SHITASSSSSS" "i have slain many a fowl beast. many a geese". "i was shot with a laser from space"',
                quote: '"I have slain many a fowl beast. Many a geese." - Zac',
                script: [
                    ["Zac", "My lord."],
                    ["Brennan", "Ah."],
                    ["Zac", "I have journeyed far to pledge my fealty to you."],
                    ["", "I have slain many a fowl beast."],
                    ["Brennan", "Hm."],
                    ["Zac", "Many a geese..."],
                    ["Brennan", "Hm?"],
                    ["Zac", "... running through the fields of Inishire."],
                    ["", "The geese were absolutely out of control. Many fell to my blade. They have those long, slender necks, pretty easy to take out."],
                    ["", "I didn't eat any of them. I don't like eating geese it's sort of, uh ... gamey."],
                    ["", "But enough about that."],
                    ["", "I am here and I will do whatever you want, I will kill whoever you want, I will slay whatever ... geese ... may run afowl of you, pun in-ten-ded-ah."],
                    ["", "But enough about that."],
                    ["", "What were you saying?"],
                    ["Brennan", "I didn't say shit man, I didn't say shit."],
                    ["", "You keep saying 'enough about that' and, frankly, Sir Bravas, I disagree that we've had enough about that. How many geese did you kill on the way to the castle?"],
                    ["Zac", "Sixty ... Seventy ..."],
                    ["Brennan", "Holy-"],
                    ["Zac", "... thousand."],
                    ["Brennan", "SEV- *staggers back*"],
                    ["Zac", "There are no more geese in these lands! For I have taken them all out in your name, and I shall -"],
                    ["Brennan", "In my name?!"],
                    ["Zac", "'Lord Kilbington', I said, 'For Kilbington!' *sword swooshing noises*"],
                    ["Brennan", "Oh what the -"],
                    ["", "Oh, god damn it, there's an angry mob outside you piece of shit!"],
                    ["Josh", "It's fucked up what he did!"],
                    ["Brennan", "Peasants!"],
                    ["Josh", "Yeah?"],
                    ["Brennan", "I'm handling it!"],
                    ["Zac", "You're welcome!"],
                    ["Josh", "Oh, there he is!"],
                    ["Brennan", "God damn it!"],
                    ["Zac", "But enough about that."],
                    ["Brennan", "Stop saying 'enough about that'!"],
                ],
            },
            {
                id: "sticky",
                big: false,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftvbrittanyf.com%2Fwp-content%2Fuploads%2F2024%2F09%2Fdimension-20-jacob.jpg&f=1&nofb=1&ipt=fd08d3ba5e262759b8209009b22232fa6906633d558ece3167804e12b497027f",
                quote: '"My hands are sooooo stickyyy" - Jacob Wysocki',
            },
            {
                id: "zac_coroner",
                big: false,
                image: "images/msn_zac_coroner.gif",
                quote: "*Uncontrollable laughter* - Everyone watching Zac's performance",
            },
            {
                id: "jeremy_crazy",
                big: false,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZjA3ZmMxNWQtNGQ4NS00N2FlLTljYTEtYzg3OGVhYWViYjE3XkEyXkFqcGc%40._V1_QL75_UX500_CR0%2C0%2C500%2C281_.jpg&f=1&nofb=1&ipt=437dd9d1d323777851738121c35c9f895c742970f5c37acf5e9d07ebccf578fe",
                quote: '"It was craaaaazy!" - Jeremy Culhane',
            },
            {
                id: "shitass",
                big: true,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.belloflostsouls.net%2Fwp-content%2Fuploads%2F2024%2F02%2FbrennanLM-game-changer.jpg&f=1&nofb=1&ipt=b0c0aecb7a35ed1ea4c95f57d02eb543f0502a2e233c193ebb098afc315f7b1f",
                quote: '"SHITASS, DUDE!" - Brennan Lee Mulligan',
                script: [
                    ["Brennan", "Fuck! Shit."],
                    ["Josh", "OOOH! OOOOOOHHH!"],
                    ["Brennan", "Oh fuck. No! Oh, my point! Fuck! Oh, my point, shit! Wait, pause it, shit! Oh fuck, oh shit, oh fuckass!"],
                    ["", "*whine* Oh, my point! Noo! Ohh. Oh, fuck I buffed it! I fucking buffed it, dude, I shitted it! Noo!"],
                    ["", "Nooo! I'm supposed to be the smarty! Noooo!"],
                    ["Josh", "You're okay! Bro, it's okay. We can help y-"],
                    ["Brennan", "Help! *choking noises*"],
                    ["Josh", "Shhh! Shhhhhh! Shhhhh!"],
                    ["Zac", "You're dead. YOU'RE DEAD!"],
                    ["Josh", "Shhh."],
                ],
            },
        ],
    },
    {
        id: "Brooklyn Nine-Nine",
        content: [
            {
                id: "email",
                big: false,
                image: "https://www.tvguide.com/a/img/resize/2c1149c8b636e3e3418f2976845bee4931d89ccc/hub/2020/06/23/0702856d-fbd2-4541-8cf4-6b548f84cd54/200623-terry-crews-brooklyn-nine-nine.jpg?auto=webp&fit=crop&height=1080&width=1920",
                quote: '"You emailed them all! With your email, to their email!" - Terry',
            },
            {
                id: "bagel",
                big: false,
                image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/F85F/production/_132038536_crgettyimages-1235277437.jpg.webp",
                quote: '"Well, I know just the thing to cheer you up! Wuntch is dead! Bagel! Bagel! Bagel!" - Captain Holt',
            },
        ],
    },
    {
        id: "Altolympus",
        content: [
            {
                id: "altolympus",
                big: false,
                image: "https://www.ancientworldmagazine.com/site/assets/files/1195/rubens-phaeton-1.jpg",
                quote: `"You can't just <i>SAY</i> perchance" - altolympus`,
            },
            {
                id: "linux",
                big: false,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzrZVQJhpaQeiO4NYlGTNMKc26LHTA-o-RA&s",
                quote: '"You should install a package about that" - altolympus',
            },
            {
                id: "sky",
                big: false,
                image: "https://blog.gale.com/wp-content/uploads/2024/07/iStock-1693812103.jpg",
                quote: `"What's up?" - Anon,<br />"The sky" - altolympus`,
            },
            {
                id: "windows",
                big: false,
                image: "https://i.ytimg.com/vi/PWOlJKnwFHM/maxresdefault.jpg",
                quote: '"Windows 10: Cool trapezoid... Windows 11: Spineless" - altolympus',
            },
            {
                id: "celeste_better",
                big: false,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fmadeline-scaling-celeste-mountain-85omnoj80uamw0r5.jpg&f=1&ipt=7eba0c3fe443465aa7f7f5cb4de8e34a03de1d7cdfd0c1b888008250b02d51c2",
                quote: '"Celeste better" - altolympus',
            },
        ],
    },
    {
        id: "Miscellaneous",
        content: [
            {
                id: "spider",
                big: false,
                image: "https://lh3.googleusercontent.com/proxy/mtBzXWcpqeV9IGsqzM9f4KVmPa8eukHxzdQlQxK2mPDV4vunA14hWOy1JbSw1zgFSm-QzW0GUAGLUXsNRTYyGtLeVgQpGh2bGLSRYdONBntYJhi6WL21Zq6GIK6Gufh0IL8WeU4sNIYvQ8C6B-ycto_WQA",
                quote: '"With great power comes great responsibility" - Ben Parker',
            },
            {
                id: "owl",
                big: false,
                image: "https://spotlight153.com/wp-content/uploads/2022/06/62251732-0-q80-900x506.jpg",
                quote: '"Now I am both King and Queen, best of both things" - King',
            },
            {
                id: "amphibia",
                big: false,
                image: "https://upload.wikimedia.org/wikipedia/en/4/45/Amphibia_Season_3_Intro_Image.jpg",
                quote: '"Spranne against the world!"- Sprig and Anne<br />(while against the world)',
            },
            {
                id: "history",
                big: false,
                image: "https://i.ytimg.com/vi/xuCn8ux2gbs/maxresdefault.jpg",
                quote: '"Those are the Tamil Kings, no one conquers the Tamil Kings" - Bill Wurtz',
            },
            {
                id: "arcane",
                big: false,
                image: "https://cdn.europosters.eu/image/1300/254049.jpg",
                quote: '"In our pursuit of greatness, we failed to do good" - Viktor',
            },
            {
                id: "undertale",
                big: false,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzjmDRF7gS0Jt3XBMQ6PUm5WsVJdc1G0JBw&s",
                quote: `"Despite everything, it's still you" - Asgore's mirror`,
            },
            {
                id: "sans",
                big: false,
                image: "https://cdn.mos.cms.futurecdn.net/5nULLkfBtxNpjR5SmvmSw-1200-80.jpg",
                quote: `"my brother has a very special attack" - sans`,
            },
            {
                id: "aurora",
                big: false,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTBpnkwrN-hu9sgXK1KNhVYNZAwb_qXwHOQ&s",
                quote: '"Nobody dies. Not for me. Not ever" - Kendal',
            },
            {
                id: "hades",
                big: false,
                image: "https://m.media-amazon.com/images/M/MV5BYjBlODg3ZTgtN2ViNS00MDlmLWIyMTctZmQ2NWYwMzE2N2RmXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg",
                quote: '"There is no escape." - Hades (from Hades)',
            },
            {
                id: "eda",
                big: false,
                image: "https://d23.com/app/uploads/2021/06/1180w-600h-060921_The-Owl-House_season-two_iris.jpg",
                quote: `"Quitting! It's like trying, but easier" - Eda the Owl Lady`,
            },
            {
                id: "yesorno",
                big: true,
                image: "https://external-preview.redd.it/U4uhn3jfwGR6XHpuynAbRaoYlTXaRSgFz3UYobezGB8.gif?auto=webp&s=9760fc1d125a105b0cb2d45972b4565e8c11dbb2",
                // quote: '"I am the only one out of the loop IT WOULD SEEM" - Brennan Lee Mulligan. "i killed him yeah"',
                quote: "THIS IS TEMPORARY",
                script: [
                    ["Brennanwhatifthis goesdiffline", "I am the only one out of the loop, IT WOULD SEEM!"],
                    ["", "I am Brennan Lee Mulligan and you shall all TREMBLE BEFORE MY WRATH"],
                    ["Zac", "Woah, dude"],
                    ["Ally", "Why do bad things happen to good people? I'm just asking like jeez omg why though i don't get it hey is this long enough i want it to be on multiple lines"],
                    ["", "so i can see how this would look i dont know if ive written enough but hey"],
                    ["Lou", "I'm rich fuck you"],
                ],
            },
            {
                id: "buttholes",
                big: false,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhelios-i.mashable.com%2Fimagery%2Farticles%2F00QPGsVu3R8QcxdtrRH5XNx%2Fimages-1.fill.size_2000x1125.v1702009412.jpg&f=1&nofb=1&ipt=8e3dad4639640c06cebfbcf17790b607b6122b6e95ccd1c8c9bb64b53af4e896",
                quote: '"Buttholes, all over the universe" - Izzy Roland',
            },
            {
                id: "skulduggery",
                big: false,
                image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/9/15/1410786067310/Derek-Landy-010.jpg?width=465&dpr=1&s=none&crop=none",
                quote: '"Doors are for people with no imagination" - Skulduggery Pleasant',
            },
            {
                id: "dead",
                big: false,
                image: "https://i.ytimg.com/vi/E4dETjG6MqY/maxresdefault.jpg",
                quote: '"Then, why am I dead?!" - Gerard Way',
            },
            {
                id: "gerson_old",
                big: false,
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fk5OuQ9OuqbE%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=b86784b91ea788c07148b01867a53a4d8616d1e258cca345edee611cb5f499e9",
                quote: `"I'm old!" - Gerson Boom`,
            },
            {
                id: "jaiden",
                big: false,
                image: "https://www.papermag.com/media-library/image.jpg?id=29585887&width=1200&height=800&quality=70&coordinates=58%2C0%2C59%2C0",
                quote: `"It's scary to think you have it, and it's also scary to think that you don't have it" - JaidenAnimations`,
            },
        ],
    },
];

let SMALLSCREEN = false;

function mix(arr) {
    // console.log("this should show up twice");
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

quotes.forEach((n) => mix(n.content));

quotes.forEach((group, index) => {
    let active = index == 0;

    carouselContainer.innerHTML += `<div class="carousel" data-active="${active}"></div>`;
    carouselSelection.innerHTML += `<p class="selector" data-active="${active}">${group.id}</p>`;
});

// help me

const carousels = document.querySelectorAll(".carousel");

const big = document.getElementById("big");
const content = big.lastElementChild;

quotes.forEach((group, index) => {
    for (const quote of group.content) {
        let outer = document.createElement("div");
        outer.id = "outer";
        outer.dataset.big = quote.big;

        // #region different colours for different names
        if (quote.big) bigQuote(quote.script, outer);

        outer.innerHTML += `
			<div class="quote">
				<div class="container ${quote.id}">
					<div class="img" style="background-image: url(${quote.image})"></div>
					<p class="caption">${quote.quote}</p>
				</div>
			</div>
		`;

        carousels[index].appendChild(outer);
    }
    // }
});

function bigQuote(script, outer) {
    let hidden = document.createElement("div");
    hidden.classList.add("hidden");

    for (const line of script) {
        let row = document.createElement("div");
        row.classList.add("row");

        let name = document.createElement("div");
        name.classList.add("name");
        name.innerText = line[0];

        if (line[0] != "") {
            let colon = document.createElement("span");
            colon.classList.add("colon");
            colon.innerHTML = ":";
            name.appendChild(colon);
        }

        let speech = document.createElement("div");
        speech.classList.add("speech");
        speech.innerText = line[1];

        row.appendChild(name);
        row.appendChild(speech);

        hidden.appendChild(row);
    }

    outer.appendChild(hidden);
}

const outers = document.querySelectorAll("#outer");
let timeouts = [];

function perspective(e) {
    const outer = e.target.closest("#outer");
    const quote = outer.querySelector(".quote");

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

    outer.onmousedown = () => {
        if (outer.dataset.big == "true") {
            content.appendChild(outer.querySelector(".hidden").cloneNode(true));

            big.dataset.active = "true";
            big.style.display = "flex";

            big.animate({ opacity: [0, 1] }, { duration: 400, easing: "ease", fill: "forwards" });
            content.animate({ transform: ["translateY(-200%)", "translateY(0%)"] }, { duration: 700, easing: "ease", fill: "forwards" });

            document.body.style.overflowY = "hidden";
            body.style.overflowY = "hidden";
        } else if (!SMALLSCREEN) {
            setTimeout(() => zoom(outer));
        }
    };
});

let zoomBox = document.getElementById("zoom");

zoomBox.onmousemove = perspective;

let prevPos = {
    x: zoomBox.offsetLeft,
    y: zoomBox.offsetTop,
};

let mouse = {
    x: window.innerWidth,
    y: window.innerHeight,
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
};

let scale = 1;

zoomBox.onwheel = (e) => {
    if (scale > 5) {
        scale = e.deltaY < 0 ? scale + 1 : Math.max(scale - 1, 0.05);
    } else {
        scale = e.deltaY < 0 ? scale + 0.1 : Math.max(scale - 0.1, 0.05);
    }
    // dir += Math.max(Math.sign(e.deltaY) / 10, 0.05);

    zoomBox.style.scale = scale;
};

function zoom(el) {
    document.body.style.overflowY = "hidden";
    body.style.overflowY = "hidden";

    const p = el.getBoundingClientRect();

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

    document.body.style.overflowY = "auto";
    body.style.overflowY = "auto";

    zoomout.style.display = "block";
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

    setTimeout(() => {
        zoomout.style.display = "none";
        zoomout.innerHTML = "";
    }, 550);
}

function leaveBig() {
    if (big.dataset.active == "true") {
        big.dataset.active = "false";
        big.animate({ opacity: [1, 0] }, { duration: 600, easing: "ease", fill: "forwards" });
        content.animate({ transform: ["translateY(0%)", "translateY(200%)"] }, { duration: 700, easing: "ease", fill: "forwards" });

        setTimeout(() => {
            big.style.display = "none";
            big.lastElementChild.innerHTML = "";
            document.body.style.overflowY = "auto";
            body.style.overflowY = "auto";
        }, 600);
    }
}

document.onmousedown = unzoom;

document.onkeydown = (e) => {
    if (e.key == "Escape") {
        unzoom();
        leaveBig();
    }
};

const carouselSelector = document.getElementById("carousel-selector");

document.onscroll = () => {
    if (document.documentElement.scrollTop > 0) {
        carouselSelector.classList.add("scrolled");
    } else {
        carouselSelector.classList.remove("scrolled");
    }
};

// hyerplexed anime grid thing but mostly invisible, sometimes quick wipe thing
const bg = document.getElementById("bg");

let carouselsHeight = Array.from(carousels);

let maxWidth, maxHeight, columns, rows;

function resize() {
    SMALLSCREEN = window.innerWidth < 500 ? true : false;

    let excessWidth = SMALLSCREEN ? 100 : 400;

    carouselsHeight = carouselsHeight.sort((a, b) => b.offsetHeight - a.offsetHeight);
    carouselContainer.style.height = carouselsHeight[0].offsetHeight + "px";

    bg.innerHTML = "";
    bg.style.height = Math.max(document.documentElement.offsetHeight, window.innerHeight) + "px";
    bg.style.width = `calc(100% + ${excessWidth * carousels.length}px)`;

    maxWidth = bg.offsetWidth;
    maxHeight = bg.offsetHeight;

    let colWidth = SMALLSCREEN ? 70 : 100;
    let colHeight = SMALLSCREEN ? 70 : 100;

    columns = Math.floor(maxWidth / colWidth);
    rows = Math.floor(maxHeight / colHeight);

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

const carouselSelectors = Array.from(document.querySelectorAll("#carousel-selection > p"));

let activeIndex = 0;
let bgOffset = 0;

carouselSelectors.forEach(selectCarousel);

function selectCarousel(selector, index) {
    selector.onclick = () => {
        let dir = Math.sign(index - activeIndex);

        carouselSelectors.forEach((n) => {
            n.dataset.active = "false";
        });

        carousels.forEach((n) => {
            if (n.dataset.active == "true") {
                n.dataset.active = "false";
                n.style.transform = `translateX(${-100 * dir}%)`;
            }
        });

        // console.log(dir);
        let offsetAmount = SMALLSCREEN ? -100 : -400;
        bgOffset = index * offsetAmount;

        // console.log(carouselSelector.scrollWidth);
        if (carouselSelection.clientWidth > window.innerWidth) {
            carouselSelection.style.transform = `translateX(${Math.min(0, index * (-100 / carouselSelectors.length) + 10)}%)`;
        } else {
            carouselSelection.style.transform = `translateX(0%)`;
        }

        bg.style.transform = `translateX(${bgOffset}px)`;

        selector.dataset.active = "true";

        let newCarousel = carousels[carouselSelectors.indexOf(selector)];

        newCarousel.style.transition = "none";
        newCarousel.style.transform = `translateX(${100 * dir}%)`;

        setTimeout(() => {
            // thanks for teaching me this hyperplexed!
            newCarousel.dataset.active = "true";
            newCarousel.style.transition = "transform 750ms cubic-bezier(.16,.3,.28,1.02)";
            newCarousel.style.transform = "translateX(0%)";
        }, 5);

        activeIndex = index;

        // console.log(selector.id);
    };
}

// sometimes background tiles get smaller across screen in wave style
// randomize buncha shit
// absolute leg
