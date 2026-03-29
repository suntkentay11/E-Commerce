

function openMenu () {
    document.body.classList += " menu--open"
}

function closeMenu (){
    document.body.classList.remove('menu--open')
}

document.querySelectorAll(".arrow").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const targetSelector = arrow.dataset.target; // like "#scroller-featured"
    const scroller = document.querySelector(targetSelector);
    if (!scroller) return;

    const dir = arrow.classList.contains("arrow--left") ? -1 : 1;

    // one-card scroll: card width + gap
    const card = scroller.querySelector(".book");
    const gap = parseFloat(getComputedStyle(scroller).gap) || 0;
    const amount = (card?.getBoundingClientRect().width || 245) + gap;

    scroller.scrollBy({ left: dir * amount, behavior: "smooth" });
  });
});

