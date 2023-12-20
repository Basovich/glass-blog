export const initMobileMenu = () => {
  // VARS
  const hamburger = document.querySelector('[data-hamburger]');
  const activeMobileMenuClass = 'mobile-menu-is-open';

  // LISTENERS
  hamburger.addEventListener('click', handleOnClickHamburger);

  // HANDLERS
  function handleOnClickHamburger() {
    document.body.classList.toggle(activeMobileMenuClass);
  }
}