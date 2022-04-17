const slide = document.getElementsByClassName("slide")[0]
const css = slide.style.cssText.toString();
const slideItems = slide.getElementsByClassName("slide-items");
let page = document.getElementsByClassName("css-1i9tz3i")[0];

let count = 0;
let timerId = 0;

window.addEventListener("load", function () {
    timerId = setTimeout(tick, 4000);
});

slide.addEventListener("mouseover", function () {
    clearTimeout(timerId)
});

slide.addEventListener("mouseout", function () {
    timerId = setTimeout(tick, 4000)
});

back.addEventListener("click", function () {
    count--;

    setPage();
});

next.addEventListener("click", function () {
    count++;

    setPage();
});

function tick() {
    setPage();

    count++;

    timerId = setTimeout(tick, 4000);
}

function setPage() {
    let length = count % slideItems.length;
    const index = slideItems[length].getAttribute("data-index") * 720;
    let replaceCssText = css.replace(/[(][0-9]*[p][x]/, "(" + -index + "px");

    slide.style.cssText = replaceCssText;

    page.innerHTML = (length + 1) + " / " + slideItems.length;
}