
const buttonRight0 = document.getElementById('slideRight0');
const buttonLeft0 = document.getElementById('slideLeft0');

buttonRight0.onclick = function () {
    document.getElementById('Recent').scrollLeft += 500;
};
buttonLeft0.onclick = function () {
    document.getElementById('Recent').scrollLeft -= 500;
};