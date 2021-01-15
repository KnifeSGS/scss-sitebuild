$(window).scroll(function () {
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.menuBurger').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.brandName').toggleClass('scrolled', $(this).scrollTop() > 50);
});

function scrollTo(className, rate = 15) {
    const elements = document.getElementsByClassName(className).length; if (elements === 1) {
        // eslint-disable-next-line max-len
        const objective = document.getElementsByClassName(className)[0]; const page = document.documentElement; const start = page.scrollTop; const end = objective.offsetTop; const difference = end - start; const sign = Math.sign(difference); const moveScroll = (position) => {
            // eslint-disable-next-line max-len
            const gap = position - start; if (gap < (Math.abs(difference) - rate)) { position += rate; page.scrollTop = start + (gap * sign); return setTimeout(() => { moveScroll(position); }, 1); }
            page.scrollTop = end; return end;
        }; if (start !== end) moveScroll(start);
    } else console.log(`Warning on scrollTo(): Multiple class name "${className}" were found`);
}

window.onclick = (e) => {
    e.preventDefault();

    switch (e.target.tagName) {
        case 'A':
            scrollTo(e.target.href.split('#')[1]);
            break;

        case 'SPAN':
            scrollTo(e.target.parentElement.href.split('#')[1]);

        default: break;
    }
};
