const priceMonth = document.querySelector('.month-price');
const priceYear = document.querySelector('.year-price');
const toggleBtns = [...document.querySelectorAll(".toggle-btn")];

toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        toggleBtns.forEach(button => button.classList.remove('bg-primary', 'text-white'));

        e.target.classList.add('bg-primary', 'text-white');

        if (e.target.classList.contains('month-btn')) {
            priceMonth.classList.remove('hidden');
            priceYear.classList.add('hidden');
        } else {
            priceMonth.classList.add('hidden');
            priceYear.classList.remove('hidden');
        }
    });
});



const videoContent = document.getElementById('video-content');
console.log(videoContent)
const videoPlay = () => {
    const video = document.querySelector('.video');
    video.style.display = 'flex';
    video.play();

    document.querySelector('.image-overlay').style.display = 'none';
    document.querySelector('.bg-overlay-custom').style.display = 'none';
  }
videoContent.addEventListener('click', videoPlay)





