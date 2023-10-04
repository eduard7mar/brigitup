import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", () => {
    // const slider = new Slider(".page", ".next", ".prev", ".logo__btn");
    const slider = new MainSlider({page: ".page", btnsPrev: ".prev", btnsNext: ".next", firstPage: ".logo__btn"});
    slider.render();

    const player = new VideoPlayer(".showup .play", ".overlay");
    player.init();
});