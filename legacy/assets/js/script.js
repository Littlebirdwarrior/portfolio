
//Stars

function createSquare(){
    const section = document.querySelector('.stars_section');
    const square = document.createElement('b');
    let size = Math.random() * -10;

    square.style.width = 8 + size + 'px';
    square.style.height = 8 + size + 'px';

    square.style.top = Math.random() * innerHeight +'px';
    square.style.left = Math.random() * innerWidth +'px';

    section.appendChild(square);
}
let interval = setInterval(createSquare , 500)
setTimeout(() => clearInterval(interval), 500 * 20)
