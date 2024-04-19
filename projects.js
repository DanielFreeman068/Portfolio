//Pauses the carousel
const box = document.getElementById('carousel');

box.addEventListener('mouseenter', () => {
    box.classList.add('carouselHover');
    setTimeout(() => {
        box.classList.remove('carouselHover');
    },2000);
});
//pops up tic tac toe info
const infoOne = document.getElementById('one');
const displayOne = document.getElementById('uno');

infoOne.addEventListener('mouseenter', () => {
    displayOne.classList.add('magic');
    setTimeout(() => {
        displayOne.classList.remove('magic');
    }, 2000);
});
//pops up card memory info
const infoTwo = document.getElementById('two');
const displayTwo = document.getElementById('dos');

infoTwo.addEventListener('mouseenter', () => {
    displayTwo.classList.add('magic');
    setTimeout(() => {
        displayTwo.classList.remove('magic');
    }, 2000);
});
//pops up photo gallery info
const infoThree = document.getElementById('three');
const displayThree = document.getElementById('tres');

infoThree.addEventListener('mouseenter', () => {
    displayThree.classList.add('magic');
    setTimeout(() => {
        displayThree.classList.remove('magic');
    }, 2000);
});
//pops up calculator info
const infoFour = document.getElementById('four');
const displayFour = document.getElementById('quatro');

infoFour.addEventListener('mouseenter', () => {
    displayFour.classList.add('magic');
    setTimeout(() => {
        displayFour.classList.remove('magic');
    }, 2000);
});