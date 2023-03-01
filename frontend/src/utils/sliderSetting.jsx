

export default function sliderSetting(slides, play=false, dot=false, infi=false) {
    return {
        dots: dot,
        infinite: infi,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        autoplay: play,
        autoplaySpeed: 5000,
    }
}
