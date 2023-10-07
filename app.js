
let arrowBtn = document.querySelector('.arrow');
    let info = arrowBtn.nextElementSibling;
    let thisArrow = arrowBtn;

    arrowBtn.onclick = function (){
        info.classList.toggle('open');
        thisArrow.classList.toggle('active');
}