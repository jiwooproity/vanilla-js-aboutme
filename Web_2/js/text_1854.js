const title = document.querySelector(".main-content__subtitle");
let plus_text = 1;

function plus_typing() {
    if(plus_text < 1854) {
        plus_text += 1;
        title.innerHTML = `브레이브걸스 ${plus_text}일의 기적`;
    } else {
    }
}

setInterval(plus_typing, 1);