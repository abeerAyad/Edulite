const priceMonth = document.querySelector('.month-price');
const priceYear = document.querySelector('.year-price');
const monthBtns = [...document.querySelectorAll(".btn")];

monthBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        monthBtns.forEach(button => button.classList.remove('bg-primary', 'text-white'));

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




  

