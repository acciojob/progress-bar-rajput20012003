//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentCircleIndex = 0;

prevBtn.addEventListener('click', () => {
    circles[currentCircleIndex].classList.remove('active');
    currentCircleIndex--;
    updateButtons();
});

nextBtn.addEventListener('click', () => {
    circles[currentCircleIndex].classList.add('active');
    currentCircleIndex++;
    updateButtons();
});

function updateButtons() {
    if (currentCircleIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentCircleIndex === circles.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

