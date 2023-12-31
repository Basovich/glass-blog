export const initStopAnimateOnResize = () => {
  let resizeTimer;
  const style = document.createElement('style');
  const css =
    '.resize-animation-stopper *, .resize-animation-stopper *:after, .resize-animation-stopper *:before { animation-duration: 0s !important; transition-duration: 0s !important;}';
  (style.innerHTML = css),
    document.head.appendChild(style),
    window.addEventListener('resize', function () {
      document.body.classList.add('resize-animation-stopper'),
        clearTimeout(resizeTimer),
        (resizeTimer = setTimeout(function () {
          document.body.classList.remove('resize-animation-stopper');
        }, 600));
    });
};