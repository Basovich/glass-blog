
export const initScrollTop = () => {
  // VARS
  const scrollTopBtn = document.querySelector('[data-scroll-top]');
  if (!scrollTopBtn) return;

  // LISTENERS
  scrollTopBtn.addEventListener('click', handleOnClickBtn);
  window.addEventListener('scroll', handleOnScrollPage);

  // HANDLERS
  function handleOnClickBtn() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleOnScrollPage() {
    window.pageYOffset > 100
      ? scrollTopBtn.classList.add('visible')
      : scrollTopBtn.classList.remove('visible')
  }
};