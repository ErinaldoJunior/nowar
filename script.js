const btnlogin = document.querySelector('.header-menu .login');
const modal = document.querySelector('.container-modal');
const fechar = document.querySelector('.fechar');

if (btnlogin && modal && fechar) {
  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle('ativo');
  }

  function fecharFora(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
}

btnlogin.addEventListener('click', toggleModal);
fechar.addEventListener('click', toggleModal);
modal.addEventListener('click', fecharFora);

const dropDownMenu = document.querySelectorAll('[data-dropdown]'); // menu drop do link forum

dropDownMenu.forEach((menu) => {
  menu.addEventListener('click', clicarMenu);
  menu.addEventListener('touchstart', clicarMenu);
});

//remover menu ao clicar fora

function clicarMenu(event) {
  event.preventDefault();
  this.classList.toggle('active');
  outsideClick(this, () => {
    this.classList.remove('active');
  });
}

function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener('click', handleOutsideClick);
      callback();
    }
  }
}

//////////////////////////////////////

const menuButton = document.querySelector('.button-menu');
const menuList = document.querySelector('.list-menu');

function openMenu(event) {
  menuList.classList.toggle('aparecer');
  menuButton.classList.toggle('aparecer');
}

menuButton.addEventListener('click', openMenu);

///////////////////////////////////

const links = document.querySelectorAll('.links a');

function clicarLinkIntro(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(novoTexto) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = novoTexto;

  const oldContent = document.querySelector('.intro');
  const newContent = newHtml.querySelector('.intro');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', function () {
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener('click', clicarLinkIntro);
});

//////////////////////////////////////// CONTAGEM

class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _diftime() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._diftime / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._diftime / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._diftime / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._diftime / 1000);
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}

const fimDaPromoção = new Countdown('30 July 2023 23:59:59 GMT-0300');

const conteudo = document.querySelector('.contagem-conteudo');
const contagem = setInterval(() => {
  conteudo.innerText =
    fimDaPromoção.total.days +
    ' dias, ' +
    fimDaPromoção.total.hours +
    ' h, ' +
    fimDaPromoção.total.minutes +
    ' min, ' +
    fimDaPromoção.total.seconds +
    ' s';
}, 1000);

const conteudo2 = document.querySelector('.contagem-conteudo2');
const contagem2 = setInterval(() => {
  conteudo2.innerText =
    fimDaPromoção.total.days +
    ' dias, ' +
    fimDaPromoção.total.hours +
    ' h, ' +
    fimDaPromoção.total.minutes +
    ' min, ' +
    fimDaPromoção.total.seconds +
    ' s';
}, 1000);

const conteudo3 = document.querySelector('.contagem-conteudo3');
const contagem3 = setInterval(() => {
  conteudo3.innerText =
    fimDaPromoção.total.days +
    ' dias, ' +
    fimDaPromoção.total.hours +
    ' h, ' +
    fimDaPromoção.total.minutes +
    ' min, ' +
    fimDaPromoção.total.seconds +
    ' s';
}, 1000);
