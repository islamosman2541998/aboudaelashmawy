(() => {
  const loader = document.getElementById('site-loader');
  const app = document.getElementById('app');
  if (!loader || !app) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const started = performance.now();
  let closing = false;
  loader.hidden = false;
  document.documentElement.classList.add('site-loading');
  app.inert = true;
  app.setAttribute('aria-busy', 'true');

  function dismiss(immediate = false) {
    if (closing) return;
    closing = true;
    clearTimeout(failsafe);
    loader.classList.add('is-leaving');
    const finish = () => {
      loader.hidden = true;
      app.inert = false;
      app.removeAttribute('aria-busy');
      document.documentElement.classList.remove('site-loading');
    };
    if (immediate || reducedMotion) finish();
    else setTimeout(finish, 450);
  }

  // Never leave the visitor blocked by a slow image or unrelated script failure.
  const failsafe = setTimeout(() => dismiss(), 5000);
  document.addEventListener('DOMContentLoaded', async () => {
    const hero = document.querySelector('.hero-image');
    await Promise.allSettled([
      hero?.decode?.(),
      loader.querySelector('img').decode(),
      document.fonts.ready,
    ]);
    setTimeout(() => dismiss(), Math.max(0, (reducedMotion ? 350 : 1400) - (performance.now() - started)));
  }, { once: true });

  // A restored back/forward page must not retain the loading overlay.
  window.addEventListener('pageshow', event => {
    if (event.persisted) dismiss(true);
  });
})();
