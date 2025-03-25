const loadingText = document.querySelector('#ring > div:last-child');
const loadingProgress = document.querySelector('#progress');
const decodeText = document.querySelector('#home h2');
const charDuration = 1 / 20;
const timeoutDuration = 0.75;
let percentage = 1;

document.querySelector('#mobile i').addEventListener('click', (e) => {
    document.querySelector('#mobile menu').classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if(!event.target.matches('#mobile i')) {
        document.querySelector('#mobile menu').classList.remove('show');
    }
});

function randomChar() {
    const str = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
    const c = str[Math.floor(Math.random() * str.length)];
    return Math.random() > 0.5 ? c : c.toUpperCase();
}

function easeIn(x) {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
}

function animate(e) {
    let elem = e.target;
    let text = elem.textContent;

    let newText = [];

    for (let i = 0; i < text.length; i++) {
        newText.push(randomChar());
    }

    elem.textContent = newText.join('');

    let i = 0;
    let int = setInterval(() => {
        if (i >= text.length) {
            clearInterval(int);
        }

        let t = [];
        for (let j = 0; j <= i; j++) {
            t.push(text[j]);
        }
        for (let j = i + 1; j < newText.length; j++) {
            t.push(randomChar());
        }
        let p  = easeIn(i / text.length);
        let tim = setTimeout(() => {
            if (p == 1) {
                clearTimeout(tim);
            }
            let upText = t.join('');
            elem.textContent = upText;
        }, p * timeoutDuration);
        i++;
    }, charDuration * 1000);
}

decodeText.addEventListener('mouseenter', animate);

function updateLoading() {
    if (percentage <= 100) {
        loadingText.textContent = `${percentage}%`;
        loadingProgress.style.width = `${percentage}%`;
        percentage++;
        setTimeout(updateLoading, 50);
    }

    if (percentage == 100) { 
        document.querySelector('#load').classList.add('hide');
        document.querySelector('header').style.display = 'block';
    }
}

// updateLoading();