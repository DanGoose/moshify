const collapsibles = document.querySelectorAll('.nav__toggler');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    console.log(this.parentElement);
    this.parentElement.classList.toggle('collapsible--expanded');
  })
);
