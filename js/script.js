const loadingText = document.querySelector('#ring > div:last-child');
const loadingProgress = document.querySelector('#progress');
let percentage = 1;

document.querySelector('#mobile i').addEventListener('click', (e) => {
    document.querySelector('#mobile menu').classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if(!event.target.matches('#mobile i')) {
        document.querySelector('#mobile menu').classList.remove('show');
    }
});

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