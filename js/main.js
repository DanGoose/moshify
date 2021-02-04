import AOS from 'aos';

document.querySelector('.nav__toggler').addEventListener('click', function () {
  this.parentElement.classList.toggle('collapsible--expanded');
});

const collapsibles = document.querySelectorAll('.collapsible__header');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    console.log('hi');
    this.parentElement.classList.toggle('collapsible--expanded');
  })
);

AOS.init({
  duration: 500,
});
