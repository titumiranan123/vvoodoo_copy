const carousel = document.querySelector(".carousel");
const firstCardWidth = document.querySelector(".card").offsetWidth;
const carouselChildren = Array.from(carousel.children);
let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;
let cardsPerPage = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to the beginning and end of the carousel for infinite scrolling
carouselChildren.slice(-cardsPerPage).forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildren.slice(0, cardsPerPage).forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

let dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.scrollLeft = carousel.offsetWidth;
    }
};

const autoPlay = () => {
    if (window.innerWidth >= 800) {
        timeoutId = setInterval(() => (carousel.scrollLeft += firstCardWidth), 2500);
    }
};

autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
