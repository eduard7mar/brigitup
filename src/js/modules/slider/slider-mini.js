import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, btnsNext, btnsPrev, activeClass, animate, autoplay) {
    super(container, btnsNext, btnsPrev, activeClass, animate, autoplay);
  }

  decorizeSlides() {
    [...this.slides].forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });

    if (!this.slides[0].closest("button")) {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
      this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
    }
  }

  nextSlide() {
    if (this.btnsPrev.parentNode === this.container) {
      this.container.insertBefore(this.slides[0], this.btnsPrev);
    } else {
      this.container.appendChild(this.slides[0]);
    }
    this.decorizeSlides();
  }

  bindTriggers() {
    this.btnsNext.forEach((btn) => {
      btn.addEventListener("click", () => this.nextSlide());
    });

    this.btnsPrev.forEach((btn) => {
      btn.addEventListener("click", () => {
        for (let i = this.slides.length - 1; i > 0; i--) {
          if (this.slides[i].tagName !== "BUTTON") {
            let active = this.slides[i];
            this.container.insertBefore(active, this.slides[0]);
            this.decorizeSlides();
            break;
          }
        }
      });
    });
  }

  activateAnimation() {
    const play = setInterval(() => this.nextSlide(), 5000);

    this.container.addEventListener("mouseenter", () => {
      clearInterval(play);
    });
    this.container.addEventListener("mouseleave", () => {
      this.activateAnimation();
    });
    this.btnsNext.forEach((btn) => {
      btn.parentNode.addEventListener("mouseenter", () => {
        clearInterval(play);
      });
    });
    this.btnsNext.forEach((btn) => {
      btn.parentNode.addEventListener("mouseleave", () => {
        this.activateAnimation();
      });
    });
  }

  init() {
    try {
      this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
      `;

      this.bindTriggers();
      this.decorizeSlides();

      if (this.autoplay) {
        this.activateAnimation();
      }
    } catch (e) {}
  }
}
