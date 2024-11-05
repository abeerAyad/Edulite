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




  document.querySelectorAll('[data-accordion-target]').forEach(button => {
    button.addEventListener('click', function () {
      const target = document.querySelector(this.getAttribute('data-accordion-target'));

      const isOpen = !target.classList.contains('hidden');

      document.querySelectorAll('[data-accordion="collapse"]').forEach(item => {
        item.querySelectorAll('.hidden').forEach(hiddenItem => hiddenItem.classList.add('hidden'));
        item.querySelectorAll('.icon-plus').forEach(icon => icon.classList.remove('hidden'));
        item.querySelectorAll('.icon-minus').forEach(icon => icon.classList.add('hidden'));
      });

      if (!isOpen) {
        target.classList.remove('hidden');
        this.querySelector('.icon-plus').classList.add('hidden');
        this.querySelector('.icon-minus').classList.remove('hidden');
      }
    });
  });

