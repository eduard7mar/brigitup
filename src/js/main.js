import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Form from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({
    container: ".page",
    btnsPrev: ".prev",
    btnsNext: ".next",
  });
  slider.render();

  const modulePageSlider = new MainSlider({
    container: ".moduleapp",
    btnsNext: ".next",
  });
  modulePageSlider.render();

  const modulePageMiniSlider = new MainSlider({
    container: ".moduleapp",
    btnsPrev: ".prev",
    btnsNext: ".next",
  });
  modulePageMiniSlider.render();

  const showUpSlider = new MiniSlider({
    container: ".showup__content-slider",
    btnsPrev: ".showup__prev",
    btnsNext: ".showup__next",
    activeClass: "card-active",
    animate: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: ".modules__content-slider",
    btnsPrev: ".modules__info-btns .slick-prev",
    btnsNext: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    btnsPrev: ".feed__slider .slick-prev",
    btnsNext: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  });
  feedSlider.init();

  const player = new VideoPlayer(".showup .play", ".overlay");
  player.init();

  new Difference(".officerold", ".officernew", ".officer__card-item").init();

  new Form(".form").init();
});
