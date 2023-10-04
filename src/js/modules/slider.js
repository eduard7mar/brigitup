export default class Slider {
  constructor(page, btnsPrev, btnsNext, firstPage) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btnsPrev = document.querySelectorAll(btnsPrev);
    this.btnsNext = document.querySelectorAll(btnsNext);
    this.firstPage = document.querySelectorAll(firstPage);
    this.slideIndex = 1;
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    [...this.slides].forEach((slide) => {
      slide.classList.add("animated");
      slide.style.display = "none";
    });

    this.slides[this.slideIndex - 1].style.display = "block";

    if (n === 3) {
        document.querySelector(".hanson").style.display = "none";
        setTimeout(() => {
        document.querySelector(".hanson").style.display = "block";
        document.querySelector(".hanson").classList.add("animated", "fadeInUp");
        }, 3000);
    }
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  render() {
    this.btnsPrev.forEach((item) => {
      item.addEventListener("click", () => {
        this.plusSlides(1);
        this.slides[this.slideIndex - 1].classList.remove("fadeInUp");
        this.slides[this.slideIndex - 1].classList.add("fadeInDown");
      });
    });
    this.btnsNext.forEach((item) => {
      item.addEventListener("click", () => {
        this.plusSlides(-1);
        this.slides[this.slideIndex - 1].classList.remove("fadeInDown");
        this.slides[this.slideIndex - 1].classList.add("fadeInUp");
      });
    });
    this.firstPage.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides((this.slideIndex = 1));
  }
}
