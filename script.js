/* =====================================================================
   Ce fichier construit le site à partir de config.js.
   Tu n'as normalement rien à modifier ici (sauf pour ajouter un logo
   de technologie dans la liste ICONS).
   ===================================================================== */
(function () {
  'use strict';

  const C = CONFIG;
  const $ = (s) => document.querySelector(s);
  const calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Protège le texte venant de config.js
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Logos des technologies (Devicon). Ajoute une ligne pour une nouvelle techno.
  const ICONS = {
    HTML: 'html5', CSS: 'css3', TailwindCSS: 'tailwindcss', JavaScript: 'javascript', React: 'react',
    'Next.js': 'nextjs', Python: 'python', Django: 'django', 'Django REST Framework': 'django',
    FastAPI: 'fastapi', 'Node.js': 'nodejs', Express: 'express', 'React Native': 'react', Expo: 'expo',
    Git: 'git', GitHub: 'github', Docker: 'docker', 'CI/CD': 'githubactions', Streamlit: 'streamlit',
    PostgreSQL: 'postgresql', MySQL: 'mysql', 'VS Code': 'vscode'
  };
  const logo = (n) => {
    const k = ICONS[n];
    return k
      ? `<img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${k}/${k}-${k === 'django' ? 'plain' : 'original'}.svg" alt="" width="22" height="22" loading="lazy">`
      : '';
  };
  // Un logo qui ne charge pas (hors ligne...) disparaît sans casser la page
  const nettoyerLogos = (racine) => racine.querySelectorAll('img.logo').forEach((img) => {
    const retirer = () => img.remove();
    img.addEventListener('error', retirer, { once: true });
    if (img.complete && img.naturalWidth === 0) retirer();
  });

  /* ---------- Identité ---------- */
  const nomComplet = `${C.prenom} ${C.nom}`;
  document.title = `${nomComplet} · ${C.titre}`;
  $('#brand').textContent = C.prenom;
  $('#nom').innerHTML = `${esc(C.prenom)}<br>${esc(C.nom)}`;
  $('#accroche').textContent = C.accroche;
  $('#ville').textContent = C.ville;
  $('#dispo').innerHTML = `<span class="dot" aria-hidden="true"></span>${esc(C.disponibilite)}`;
  $('#langues').textContent = C.langues;
  $('#footer-nom').textContent = nomComplet;
  $('#annee').textContent = new Date().getFullYear();

  $('#photo-wrap').innerHTML =
    `<span class="photo-initial" aria-hidden="true">${esc(C.prenom.charAt(0))}</span>` +
    `<img src="${esc(C.photo)}" alt="Photo de ${esc(nomComplet)}" width="800" height="800" fetchpriority="high">`;
  const photo = $('#photo-wrap img');
  photo.addEventListener('error', () => photo.remove(), { once: true });

  // CV : le bouton n'apparaît que si le fichier existe vraiment
  const cv = $('#cv-link');
  if (C.cv) {
    cv.setAttribute('href', C.cv);
    if (location.protocol.indexOf('http') === 0) {
      fetch(C.cv, { method: 'HEAD' }).then((r) => { if (r.ok) cv.hidden = false; }).catch(() => {});
    } else {
      cv.hidden = false;   // ouvert depuis ton ordinateur : on l'affiche
    }
  }

  /* ---------- À propos ---------- */
  $('#apropos-texte').innerHTML = C.apropos.map((p) => `<p>${esc(p)}</p>`).join('');
  const uniques = [...new Set(C.competences.flatMap((g) => g.items))];
  $('#chiffres').innerHTML = [
    [C.projets.length, 'projets réalisés'],
    [uniques.length, 'technologies utilisées'],
    [C.experiences.length, C.experiences.length > 1 ? 'expériences pro' : 'expérience pro']
  ].map(([n, l]) =>
    `<li><span class="count" data-to="${n}">${n}</span><span class="lbl">${l}</span></li>`).join('');

  /* ---------- Compétences ---------- */
  $('#competences-liste').innerHTML = C.competences.map((g) => `
    <div>
      <h3 class="display">${esc(g.groupe)}</h3>
      <ul>${g.items.map((i) => `<li class="skill">${logo(i)}<span>${esc(i)}</span></li>`).join('')}</ul>
    </div>`).join('');

  // Bandeau défilant
  const rang = uniques.filter((n) => ICONS[n])
    .map((n) => `<span class="marq-item">${logo(n)}${esc(n)}</span>`).join('');
  $('#marquee').innerHTML = `<div class="marq-track">${rang}${rang}</div>`;

  /* ---------- Projets ---------- */
  const lien = (url, texte, titre) => url
    ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${texte} : ${esc(titre)}">${texte}</a>`
    : '';

  $('#projets-liste').innerHTML = C.projets.map((p, i) => {
    const vignette = p.image
      ? `<button type="button" class="card-img" data-i="${i}" aria-label="Agrandir la capture d'écran de ${esc(p.titre)}">
           <span class="card-initial" aria-hidden="true">${esc(p.titre.charAt(0))}</span>
           <img src="${esc(p.image)}" alt="Capture d'écran du projet ${esc(p.titre)}" width="1600" height="810" loading="lazy" decoding="async">
           <span class="zoom-hint" aria-hidden="true">Agrandir</span>
         </button>`
      : `<div class="card-img"><span class="card-initial" aria-hidden="true">${esc(p.titre.charAt(0))}</span></div>`;
    return `
      <article class="card">
        ${vignette}
        <div class="card-body">
          <h3 class="display">${esc(p.titre)}</h3>
          <p class="card-year">${esc(p.annee)}</p>
          <p class="card-desc">${esc(p.description)}</p>
          <ul class="tags">${p.technos.map((t) => `<li class="tag">${logo(t)}${esc(t)}</li>`).join('')}</ul>
          <p class="card-links">${lien(p.github, 'Code source', p.titre)}${lien(p.demo, 'Voir en ligne', p.titre)}</p>
        </div>
      </article>`;
  }).join('');

  // Si une capture est introuvable, on garde l'initiale et on désactive l'agrandissement
  document.querySelectorAll('button.card-img img').forEach((img) => {
    const echec = () => {
      const b = img.closest('button');
      b.disabled = true;
      b.querySelector('.zoom-hint').remove();
      img.remove();
    };
    img.addEventListener('error', echec, { once: true });
    if (img.complete && img.naturalWidth === 0) echec();
  });

  /* ---------- Capture agrandie ---------- */
  const lb = $('#lightbox');
  if (lb && typeof lb.showModal === 'function') {
    document.addEventListener('click', (e) => {
      const b = e.target.closest('button.card-img');
      if (!b) return;
      const p = C.projets[+b.dataset.i];
      $('#lb-img').src = p.image;
      $('#lb-img').alt = `Capture d'écran du projet ${p.titre}`;
      $('#lb-cap').textContent = p.titre;
      lb.showModal();
    });
    $('#lb-close').addEventListener('click', () => lb.close());
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });   // clic à côté de l'image
  }

  /* ---------- Parcours ---------- */
  const frise = (liste) => liste.map((e) => `
    <li>
      <h4 class="display">${esc(e.poste)}</h4>
      <p class="meta">${esc(e.lieu)} · ${esc(e.periode)}</p>
      ${e.details ? `<p class="det">${esc(e.details)}</p>` : ''}
    </li>`).join('');
  $('#experience-liste').innerHTML = frise(C.experiences);
  $('#formation-liste').innerHTML = frise(C.formations);

  /* ---------- Contact ---------- */
  $('#contact-texte').textContent = C.contactTexte;
  const nat = String(C.telephone).replace(/\D/g, '');
  const intl = String(C.indicatif || '').replace(/\D/g, '') + nat;
  const affiche = nat.length === 9
    ? `+${C.indicatif} ${nat[0]} ${nat.slice(1, 3)} ${nat.slice(3, 5)} ${nat.slice(5, 7)} ${nat.slice(7)}`
    : `+${intl}`;
  const lignes = [['Email', C.email, `mailto:${C.email}`]];
  if (nat.length >= 8) {
    lignes.push(['WhatsApp', affiche, `https://wa.me/${intl}`]);
    lignes.push(['Téléphone', affiche, `tel:+${intl}`]);
  }
  if (C.github) lignes.push(['GitHub', C.github.replace('https://', ''), C.github]);
  if (C.linkedin) lignes.push(['LinkedIn', C.linkedin.replace('https://', ''), C.linkedin]);
  $('#contact-liste').innerHTML = lignes.map(([k, v, href]) => {
    const externe = href.indexOf('http') === 0 ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<li><a class="contact-row" href="${esc(href)}"${externe}><span class="k">${k}</span><span class="v">${esc(v)}</span></a></li>`;
  }).join('');

  nettoyerLogos(document);

  /* ---------- Thème clair / sombre ---------- */
  const root = document.documentElement;
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const appliquerTheme = (t) => {
    root.setAttribute('data-theme', t);
    if (metaTheme) metaTheme.setAttribute('content', t === 'dark' ? '#0E1230' : '#F4F6FC');
  };
  appliquerTheme(root.getAttribute('data-theme'));
  $('#theme-toggle').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    appliquerTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---------- Menu mobile ---------- */
  const menuBtn = $('#menu-toggle');
  const menu = $('#mobile-menu');
  const setMenu = (ouvert) => {
    menu.hidden = !ouvert;
    menuBtn.setAttribute('aria-expanded', String(ouvert));
    menuBtn.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
  };
  menuBtn.addEventListener('click', () => setMenu(menu.hidden));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Phrases qui s'écrivent toutes seules ---------- */
  (function () {
    const el = $('#typed'), r = C.roles;
    if (!el || !r || !r.length) return;
    if (calme) { el.textContent = r[0]; return; }
    let i = 0, c = 0, eff = false;
    (function tick() {
      el.textContent = r[i].slice(0, c);
      let d = eff ? 35 : 70;
      if (!eff && c === r[i].length) { eff = true; d = 1600; }
      else if (eff && c === 0) { eff = false; i = (i + 1) % r.length; d = 300; }
      else c += eff ? -1 : 1;
      setTimeout(tick, d);
    })();
  })();

  /* ---------- Barre de progression de lecture ---------- */
  const barre = document.createElement('div');
  barre.id = 'progress';
  barre.setAttribute('aria-hidden', 'true');
  document.body.prepend(barre);
  let attente = false;
  addEventListener('scroll', () => {
    if (attente) return;
    attente = true;
    requestAnimationFrame(() => {
      const h = document.documentElement;
      barre.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
      attente = false;
    });
  }, { passive: true });

  /* ---------- Menu actif (marche aussi avec mouvement réduit) ---------- */
  if ('IntersectionObserver' in window) {
    const liens = [...document.querySelectorAll('.nav-link')];
    const actif = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      liens.forEach((a) => {
        const on = a.getAttribute('href') === '#' + e.target.id;
        a.classList.toggle('active', on);
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => actif.observe(s));
  }

  /* ---------- Apparition au défilement + compteurs ---------- */
  if ('IntersectionObserver' in window && !calme) {
    const cibles = document.querySelectorAll('.section > *, .card, .timeline > li, .contact-list li, .skill');
    cibles.forEach((el) => {
      const rang = [...el.parentElement.children].indexOf(el);
      el.style.transitionDelay = Math.min(rang, 8) * 70 + 'ms';
      el.classList.add('reveal');
    });
    const vu = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      setTimeout(() => { e.target.style.transitionDelay = ''; }, 1300);
      vu.unobserve(e.target);
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    cibles.forEach((el) => vu.observe(el));

    const compte = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, to = +el.dataset.to, t0 = performance.now();
      (function pas(t) {
        const k = Math.min(1, (t - t0) / 1200);
        el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(pas);
      })(t0);
      compte.unobserve(el);
    }));
    document.querySelectorAll('.count').forEach((el) => { el.textContent = '0'; compte.observe(el); });
  }
})();
