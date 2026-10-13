/* Progressive enhancement: keep native links, history, focus and content updates. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  let pending = Promise.resolve();
  let active = null;
  let revision = 0;
  const regions = new Set();
  let nameIndex = 0;

  function prepare(elements) {
    elements.forEach(element => {
      if (!element) return;
      if (!element.style.getPropertyValue('--motion-name')) {
        element.style.setProperty('--motion-name', `sa-region-${++nameIndex}`);
      }
      element.classList.add('motion-region');
      regions.add(element);
    });
  }
  function clear() {
    root.removeAttribute('data-motion-mode');
    regions.forEach(element => element.classList.remove('motion-region'));
    regions.clear();
  }

  window.saTransition = function(update, elements = []) {
    // Wait only for the last DOM update, not its animation; quick clicks stay responsive.
    const token = ++revision;
    active?.skipTransition();
    const job = pending.catch(() => {}).then(() => {
      if (reduced.matches || typeof document.startViewTransition !== 'function') {
        clear();
        update();
        return;
      }
      root.setAttribute('data-motion-mode', 'local');
      prepare(elements);
      let applied = false;
      const apply = () => { if (!applied) { applied = true; update(); } };
      try {
        const transition = document.startViewTransition(apply);
        active = transition;
        transition.ready.catch(() => {});
        transition.finished.catch(() => {}).then(() => {
          if (revision === token) { active = null; clear(); }
        });
        return transition.updateCallbackDone.catch(error => {
          if (!applied) apply();
          else console.error('Unable to update the interface:', error);
        });
      } catch {
        apply();
        if (revision === token) clear();
      }
    });
    pending = job;
    return job;
  };

  // Native summary click also covers keyboard Enter/Space activation.
  document.querySelectorAll('details > summary').forEach(summary => {
    summary.addEventListener('click', event => {
      if (event.defaultPrevented) return;
      const details = summary.parentElement;
      const container = details.parentElement;
      const section = details.closest('section');
      event.preventDefault();
      const elements = [...container.querySelectorAll(':scope > details')];
      if (!elements.length) elements.push(details);
      // Capture the following block too, so opening content moves it smoothly.
      if (section?.nextElementSibling) elements.push(section.nextElementSibling);
      window.saTransition(() => { details.open = !details.open; }, elements);
    });
  });

  reduced.addEventListener('change', () => {
    if (reduced.matches) { active?.skipTransition(); clear(); }
  });
  // Never carry temporary local snapshot names into cross-page navigation or bfcache.
  addEventListener('pageswap', () => { active?.skipTransition(); clear(); });
  addEventListener('pageshow', () => clear());
})();
