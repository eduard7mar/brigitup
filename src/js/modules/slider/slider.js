export default class Slider {
  constructor({page = "", btnsPrev = "", btnsNext = "", firstPage = ""} = {}) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btnsPrev = document.querySelectorAll(btnsPrev);
    this.btnsNext = document.querySelectorAll(btnsNext);
    this.firstPage = document.querySelectorAll(firstPage);
    this.slideIndex = 1;
  }
}
