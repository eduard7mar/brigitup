import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", () => {
    const slider = new Slider(".page", ".next", ".prev", ".logo__btn");
    slider.render();

    const player = new VideoPlayer(".showup .play", ".overlay");
    player.init();
});