export const initMobileMenu = () => {
  // VARS
  const hamburger = document.querySelector('[data-hamburger]');
  const btnOpenSearchForm = document.querySelector('[data-open-search-form]');
  const btnCloseSearchForm = document.querySelector('[data-close-search-form]');
  const activeMobileMenuClass = 'mobile-menu-is-open';
  const activeSearchFormClass = 'search-form-is-open';

  // LISTENERS
  hamburger?.addEventListener('click', handleOnClickHamburger);
  btnOpenSearchForm?.addEventListener('click', handleOnClickOpenSearchForm);
  btnCloseSearchForm?.addEventListener('click', handleOnClickCloseSearchForm);

  // HANDLERS
  function handleOnClickHamburger() {
    document.body.classList.toggle(activeMobileMenuClass);
  }

  function handleOnClickOpenSearchForm() {
    document.body.classList.remove(activeMobileMenuClass);
    document.body.classList.add(activeSearchFormClass);
  }

  function handleOnClickCloseSearchForm() {
    document.body.classList.remove(activeSearchFormClass);
  }
}