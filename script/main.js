addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.credentials a').forEach(e => {
        animateTextInLink(e);
    });
    enableShowBlockOneAfterAnother();
    enableTitleShortener()
})

//#region text animation
function animateTextInLink(link) {
    const linkText = link.text;
    let index = 0;


    const textAnimator = setInterval(() => {
        animateTheCharacter(link, linkText, index);
        index = index === linkText.length - 1 ? 0 : index + 1;
    }, 300)
}

function animateTheCharacter(target, text, index) {
    const textLength = text.length;
    const textStart = text.slice(0, index);
    const textEnd = text.slice(index + 1, textLength);
    const newLinkHtml = '<span>' + textStart + '</span>' + '<span class="elected">' + text[index] + '</span>' + '<span>' + textEnd + '</span>';
    target.innerHTML = newLinkHtml;
}
//#endregion text animation

//#region title short animation
function titleHeightToSet() {
    const hideLvl = document.querySelector('h1.main-title').style.height;

    if (document.body.scrollTop > hideLvl || document.documentElement.scrollTop > hideLvl) {
        return "2vw";
    } else {
        return "5vw";
    }
}

function enableTitleShortener() {
    window.addEventListener('scroll', () => { titleShortener() });
}

function titleShortener() {
    const title = document.querySelector('h1.main-title');
    title.style.fontSize = titleHeightToSet();
}
//#endregion title short animation

//#region show animation enabler
// function enableShowBlockOneAfterAnother() {
//     const blocksToShow = document.querySelectorAll('.show-animation');

//     // show that needs to be shown at start
//     onBodyScroll(blocksToShow);

//     window.addEventListener('scroll', () => { onBodyScroll(blocksToShow) });
//     window.addEventListener('resize', () => { onBodyScroll(blocksToShow) });
// }

// function onBodyScroll(blocks) {
//     const scrollPosition = window.scrollY;
//     const bottomEdgePosition = scrollPosition + window.pageYOffset;

//     blocks.forEach((block) => {
//         if (block.getBoundingClientRect().bottom <= bottomEdgePosition) {
//             showBlock(block);
//         }
//     })
// }

// function showBlock(block) {
//     block.classList.add('show');
// }

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}

function enableShowBlockOneAfterAnother() {

    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.show-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }
}
//#endregion show animation enabler
