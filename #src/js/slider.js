
/**Slider**/
let sliders = document.querySelectorAll('._swiper');
if(sliders){
    for (let index = 0; index< sliders.length; index++){
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')){
            let slider_items = slider.children;
            if (slider_items){
                for (let index = 0; index < slider_items.length; index++){
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swper-bild');
        }
        if (slider.classList.contains('_gallery')){

        }
    }
    sliders_bild_callback();
}
function sliders_bild_callback(param) {}

if (document.querySelector('.mainslider')){
    let mainslider = new Swiper('.mainslider__body', {
        /*
        effect: 'fade',
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        }
        */
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        //touchRatio: 0,
        //simulateTouch: false,
        //Loop: true,
        //preLoodImages: false,
        //Lazy: true,
        //Dotts
        pagination:{
            el:'.mainslider__dots',
            clickable: true,
        },
        /*Arrows*/
        /*
        navigation: {
            nextEL: '.about__more .more__item_next',
            prevEL: '.about_more .more__item_prev',
        },*/
        /*
        breackpoints:{
            320:{
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            },
            768:{
            slidesPerView: 2,
            spaceBetween: 20,
            },
            992:{
            slidesPerView: 3,
            spaceBetween: 20,
            }
            1268:{
            slidesPerView: 4,
            spaceBetween: 30,
            }
        },
        */
        on:{
            lazyImageReady: function () {
                ibg();
            },
        }
    });
    let mainsliderImages = document.querySelectorAll('.mainslider__img');
    let mainsliderDots = document.querySelectorAll('.mainslider__dots .swiper-pagination-bullet');
    for (let index = 0; index<mainsliderImages.length; index++){
        const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
        mainsliderDots[index].style.backgroundImage="url('"+mainsliderImage+"')";
    }
}





















































