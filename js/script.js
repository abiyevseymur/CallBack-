var circle = document.getElementById('main');
var bird = document.getElementById('bird');

circle.addEventListener('click', function () {
    down(0, 0, 250, fly);
});
function down(w, h, sek, callback) {
    circle.style.margin = '50px';
    circle.style.border = '100px solid #64a8f2';
    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.background = 'white';
    setTimeout(function () {
        circle.style.width = w + 'px';
        circle.style.height = h + 'px';
        circle.style.margin = '75px';
    }, sek)
    callback(200, 170, sek)
}
function fly(w, h, sek) {
    setTimeout(function () {
        circle.style.border = '0px solid #64a8f2';
        circle.style.width = '100px';
        circle.style.height =  '100px';
        circle.style.margin = '150px';
    }, 300)
    setTimeout(function () {
        circle.style.height = '0px';
        circle.style.width = '0px';
        circle.style.margin = '190px';
        bird.style.width = w + 'px';
        bird.style.height = h + 'px';
        bird.style.margin = '100px';
    }, 500)

}