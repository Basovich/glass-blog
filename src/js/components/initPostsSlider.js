import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const initPostsSlider = () => {
  // VARS
  const postsSlider = document.querySelector('[data-posts-slider]');
  if (!postsSlider) return;

  // INITS
  new Swiper('[data-posts-slider]', {
    speed: 400,
    spaceBetween: 12,
    slidesPerView: 1.02,
    modules: [ Navigation ],
    navigation: {
      nextEl: '[data-button-next]',
      prevEl: '[data-button-prev]',
    },
    breakpoints: {
      680: {
        slidesPerView: 1.6,
      },
      1024: {
        slidesPerView: 2.2,
      }
    }
  });
}