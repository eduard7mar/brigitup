export default class Slider {
  constructor({
    container = null, 
    btnsPrev = null, 
    btnsNext = null,
    activeClass = "",
    animate,
    autoplay} = {}) {
    this.container = document.querySelector(container);
    try {this.slides = this.container.children;} catch(e){}
    this.btnsPrev = document.querySelectorAll(btnsPrev);
    this.btnsNext = document.querySelectorAll(btnsNext);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}