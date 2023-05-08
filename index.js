const log = console.log;

// Header

const headerContainer = document.querySelector("[data-header='container']");

// Banner Video

const bannerVideo = document.querySelector("[data-banner=img]");

["pointermove", "poniterdown", "poniterenter", "pointerover"].forEach(
  (eventType) => {
    bannerVideo.addEventListener(eventType, () => {
      // bannerVideo.play()
      bannerVideo.style.opacity = "1";
    });
  }
);

["pointerleave", "poniterout", "ponitercancel", "lostpointercapture"].forEach(
  (eventType) => {
    bannerVideo.addEventListener(eventType, () => {
      // bannerVideo.pause()
      bannerVideo.style.opacity = ".8";
    });
  }
);

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    headerContainer.classList.add("onscroll");
  } else {
    headerContainer.classList.remove("onscroll");
  }

  const playTime = 100;
  bannerVideo.currentTime = scrollY / (playTime - 15);
});

// Nav
const [hamburgerMenu, closeNav, nav] = [
  document.querySelector("[data-menu='open']"),
  document.querySelector("[data-menu='close']"),
  document.querySelector("[data-nav-list='primary']"),
];

hamburgerMenu.onclick = () => {
  nav.style.display = "block";
};

closeNav.onclick = () => {
  nav.style.display = "none";
};

// Add to Cart

const carts = document.querySelectorAll("[data-menu-food='type']");
const output = document.querySelector(".output");
log(carts);

carts.forEach((item) => {
  item.addEventListener("click", (e) => {
    const itemName = item.querySelector("small").innerText;
    const itemPrice = item.querySelector("h2").innerText;
    const itemImg = item.querySelector("img");
    console.log(itemImg, itemPrice, itemName);
    output.append(itemImg.cloneNode(true));
  });
});

// Intersection observer

const [menu, statementContainer, statementImg, statementText, footer] = [
  document.querySelector("[data-menu='container']"),
  document.querySelector("[data-section='statement']"),
  document.querySelectorAll("[data-statement='img']"),
  document.querySelectorAll("[data-statement='text']"),
  document.querySelector("footer"),
];

console.log(statementContainer.querySelectorAll("[data-statement='img']")[0]);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("entryImg")) {
          entry.target.classList.add("img-anime");
        } else if (entry.target.classList.contains("entryText")) {
          entry.target.classList.add("text-anime");
        }

        entry.target.classList.toggle("show", entry.isIntersecting);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "150px",
    threshold: ".1",
  }
);

[menu, statementContainer, footer].forEach((element) => {
  observer.observe(element);
});
console.log(statementImg[0]);
statementImg.forEach((img) => {
  observer.observe(img);
});
statementText.forEach((img) => {
  observer.observe(img);
});

// const qrOutput = document.querySelector(".output")
// const menuList = document.querySelector(".menu-list")
// const qrBtn = document.querySelector(".qr-btn")

// const qrFunction = () => {
//     const qrcode = new QRCode(qrOutput, {

//         text: "Matthew",
//         width: 200,
//         height: 200,
//         colorDark : "#000000",
//         colorLight : "#ffffff",
//         correctLevel : QRCode.CorrectLevel.H
//     });

//     qrBtn.onclick = () => {
//         qrcode.clear();
//         qrcode.makeCode("hihdfiosfdghjklxcvkcjicxlkmvf")
//         console.log("hi")
//         menuList.style.display = "block"
//     }
// }

// qrFunction()
