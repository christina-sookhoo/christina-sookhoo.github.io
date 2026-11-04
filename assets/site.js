const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (menu && nav) {
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); if (nav.contains(document.activeElement)) menu.focus(); } });
  document.addEventListener('click', event => { if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu(); });
  window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());

function openLinkedProject(){const id=location.hash.slice(1);if(!id)return;const item=document.getElementById(id);if(item?.matches('.project-dropdown'))item.open=true;}
openLinkedProject();window.addEventListener('hashchange',openLinkedProject);
