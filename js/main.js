const loader1 = document.querySelector('.loader1');
const loader2 = document.querySelector('.loader2');
const loader3 = document.querySelector('.loader3');
const main = document.querySelector('.main');

function init() {
  const lists = [loader1, loader2, loader3];
  const loader = lists[Math.floor(Math.random() * 3)];

  loader.style.opacity = 1;
  loader.style.display = 'block';
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';
    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 4000);
}

init();
