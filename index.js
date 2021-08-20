
const containerBar = document.querySelector('.header__dropdown');
const bar = document.querySelector('.fas.fa-bars');
const barRemove = document.querySelector('.fas.fa-window-close');
const itemsBar = ['TRANG CHỦ', 'COFFEE', 'PHIN MẠ MÀU', 'COMBO PHIN PHÊ', 'GIFTSET', 'LIÊN HỆ',];

class Bar {
  constructor(itemsBar, container, buttonBar, buttonRemove) {
    this.itemsBar = itemsBar;
    this.container = container;
    this.buttonBar = buttonBar;
    this.buttonRemove = buttonRemove;

    this.elements = document.createElement("div");
    this.elements.classList.add("dropdown-container");

    this.list = document.createElement("ul");
    this.list.classList.add("header__lists");

    this.elements.append(this.list);

    this.buttonBar.addEventListener('click', () => {
      this.list.innerHTML = '';
      this.buttonBar.style.display = 'none';
      this.buttonRemove.style.display = 'block';
      this.itemsBar.forEach((i) => {
      this.item = document.createElement("li");
      this.item.classList.add("header__item");
      this.item.innerText = i;
      this.list.append(this.item);
      });
      this.container.append(this.elements);
      this.container.style.backgroundColor = '#415167be';
    });

    this.buttonRemove.addEventListener('click', () => {
      this.buttonBar.style.display = 'block';
      this.buttonRemove.style.display = 'none';
      this.elements.remove(this.list);
    });

    return this.container;
  };
};

const barMenu = new Bar(itemsBar, containerBar, bar, barRemove);


///////////////////////////////////////////////////////////////////////////////////////////////////////

let slider = 0;
let sliderVertical = 0;
let sliderVerticalPx = 572;
const sliderChuan = document.querySelector('.chuan__cards');
const buttonRightChuan = document.querySelector(".chuan-right__next");
const buttonDownChuan = document.querySelector(".chuan-down__next");
const buttonLeftChuan = document.querySelector(".chuan-left__next");
const buttonUpChuan = document.querySelector(".chuan-up__next");
const chuanLeft = document.querySelector(".chuan-left");

buttonRightChuan.addEventListener('click', () => {
   slider += 583;

   if (slider >= 0) {
     chuanLeft.style.display = 'block';
   };
   if(slider > 1863) {
    slider = 0;
    chuanLeft.style.display = 'none';
  };
   sliderChuan.style.left = -slider + 'px';  
});

buttonLeftChuan.addEventListener('click', () => {
  slider = slider - 583; 
  sliderChuan.style.left = -slider + 'px';   
   
  if(slider <= 0) {
    chuanLeft.style.display = 'none';
  };
});

buttonDownChuan.addEventListener('click', () => {
  if(window.screen.width <= 320) {
    sliderVerticalPx = 420;
  };

  if(sliderVertical === 1260) {
    sliderVertical = -420;
  };

  sliderVertical += sliderVerticalPx;

  if (sliderVertical >= 0) {
    chuanLeft.style.display = 'block';
  };

  if(sliderVertical === 2288) {
    sliderVertical = 0;
  };

  if(sliderVertical <= 0) {
    chuanLeft.style.display = 'none';
  };

  sliderChuan.style.top = - sliderVertical + 'px';
});

buttonUpChuan.addEventListener('click', () => {
  sliderVertical = sliderVertical - sliderVerticalPx;

  sliderChuan.style.top = -sliderVertical + 'px'; 
});

window.onresize = () => {
  if(window.screen.width > 800) {
    slider = 0;
    chuanLeft.style.display = 'none';
    sliderChuan.style.top = 0 + 'px';
  };

  if(window.screen.width <= 800) {
    sliderVertical = 0;
    chuanLeft.style.display = 'none';
    sliderChuan.style.left = 0 + 'px';
  }; 
};
