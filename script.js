/* =====================================================================
   ÉTAPE 1 : COMPLÈTE TES INFORMATIONS CI-DESSOUS
   ---------------------------------------------------------------------
   Tout ce qui est écrit entre [crochets] est à remplacer par tes vraies
   informations (supprime aussi les crochets). Tant qu'il en reste, ils
   s'affichent en jaune sur le site, ce qui te permet de les repérer.
   Pour cacher un élément optionnel (LinkedIn, lien démo...), mets '' .
   Tu n'as pas besoin de toucher au reste du fichier ni au HTML.
   ===================================================================== */

const CONFIG = {
  // --- Identité ---
  prenom: 'Portfolio',
  nomComplet: 'DYLAN NGOUAFON',
  titre: 'Développeur logiciel full-stack',
  // Phrases qui s'écrivent toutes seules sous ton nom
  roles: ['Développeur logiciel full-stack', 'Applications web et mobiles', 'React · Django · FastAPI'],
  // Ta photo : mets un fichier photo.jpg dans le même dossier (carrée, visage centré)
  photo: 'photo.jpg',
  // Captures de projets : images/projet-1.jpg, images/projet-2.jpg, images/projet-3.jpg (dossier "images")
  ville: 'Bandjoun, Cameroun',
  disponibilite: 'Ouvert aux postes de développeur et aux stages',
  langues: 'Français (courant), Anglais (debutant)',

  // --- Texte d'accueil (2 phrases maximum) ---
  accroche:
    'Je conçois des applications web et mobiles, du backend à l\'interface. ' +
    'Je cherche une équipe où construire des produits utiles et progresser.',

  // --- À propos (un paragraphe par ligne) ---
  apropos: [
    'Je suis développeur logiciel basé à Bandjoun. Je travaille avec React, Next.js et React Native côté interface, et avec Django, FastAPI et Express côté serveur.',
    'J\'ai conçu une application complète de gestion d\'école secondaire adaptée au système éducatif camerounais, et j\'ai effectué un stage en 2024 chez Sigeris SARL.',
    // '[Ajoute une phrase sur ce qui te motive ou ce que tu recherches.]'
  ],

  // --- Compétences (modifie, ajoute ou supprime des lignes) ---
  competences: [
    { groupe: 'Front-end', items: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'Next.js'] },
    { groupe: 'Back-end', items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Node.js', 'Express'] },
    { groupe: 'Mobile', items: ['React Native'] },
    { groupe: 'Bases de données', items: ['PostgreSQL' , 'MYSQL'] },
    { groupe: 'Outils et déploiement', items: ['Git', 'GitHub', 'Docker', 'CI/CD' ,'Vscode'] }
  ],

  // --- Projets (garde ceux qui sont vrais, supprime les autres) ---
  projets: [
    {
      titre: 'SchoolManager : gestion d\'école secondaire',
      annee: '2026',
      description:
        'Application web et mobile de gestion des établissements secondaires francophones du Cameroun : élèves, inscriptions, notes, absences, emplois du temps et bulletins. ' +
        'J\'ai conçu la base de données (modélisation Merise) et développé l\'API REST du backend.',
      technos: ['Django', 'Django REST Framework', 'React', 'React Native'],
      github: 'https://github.com/livainexus-dot/gestion-ecole-secondaire',
      demo: './images/projet-1'
    },
    {
      titre: 'Ferme Intelligente (ManiChicks)',
      annee: '2026',
      description:
        'Application mobile de gestion d\'une ferme avicole : suivi de l\'élevage de poulets au quotidien depuis un téléphone.',
      technos: ['React Native', 'Expo'],
      github: 'https://github.com/SOFTWARE-ING/Ferme-Intelligente-IoT-BigData-Machine-Learning-/tree/main/mobile',
      demo: ''
    },
    // {
    //   titre: 'BibleGPT',
    //   annee: '[année]',
    //   description:
    //     'Petit modèle de langage de type Transformer entraîné caractère par caractère, avec une API FastAPI et une interface Streamlit. ' +
    //     'Projet personnel pour apprendre le deep learning de bout en bout.',
    //   technos: ['Python', 'Deep learning', 'FastAPI', 'Streamlit'],
    //   github: '[LIEN GITHUB OU VIDE]',
    //   demo: ''
    // }
  ],

  // --- Expérience ---
  experiences: [
    {
      poste: 'Stagiaire développeur',
      lieu: 'Sigeris SARL',
      periode: '2024 · 3 mois',
      details: 'conception  et  developement  des applications '
    }
  ],

  // --- Formation ---
  formations: [
    {
      poste: 'Licence Technologique',
      lieu: 'IUT Fotso  Victor de Bandjoun',
      periode: '2025-2026',
      details: ''
    }
  ],

  // --- Contact ---
  contactTexte: 'Une offre, une question, un projet ? Écris-moi, je réponds rapidement.',
  email: 'dylandevjs@gmail.com',
  telephone: '650946982',   // même numéro pour WhatsApp (avec l'indicatif 237)
  github: 'https://github.com/Dylan-DevData',
  linkedin: '',                       // optionnel : colle ton lien LinkedIn ou laisse ''
  cv: 'CV.pdf'                        // nom exact de ton CV PDF placé dans le même dossier
};

/* =====================================================================
   ÉTAPE 2 : NE MODIFIE RIEN À PARTIR D'ICI (le site se construit seul)
   ===================================================================== */

// Met en jaune les [champs à compléter]
const ph = (t) => String(t).replace(/\[[^\]]+\]/g, (m) => `<mark class="ph">${m}</mark>`);

// Remplit les éléments marqués data-bind="..."
document.querySelectorAll('[data-bind]').forEach((el) => {
  const v = CONFIG[el.dataset.bind];
  if (v !== undefined) el.innerHTML = ph(v);
});

document.title = `${CONFIG.nomComplet.replace(/\[|\]/g, '')} · ${CONFIG.titre}`;

// À propos
document.getElementById('apropos-texte').innerHTML = CONFIG.apropos
  .map((p) => `<p>${ph(p)}</p>`).join('');

// Logos des technologies (Devicon). Ajoute une ligne si tu ajoutes une techno.
const ICONS = { HTML: 'html5', CSS: 'css3', TailwindCSS: 'tailwindcss', JavaScript: 'javascript', React: 'react',
  'Next.js': 'nextjs', Python: 'python', Django: 'django', 'Django REST Framework': 'django', FastAPI: 'fastapi',
  'Node.js': 'nodejs', Express: 'express', 'React Native': 'react', Expo: 'expo', Git: 'git', GitHub: 'github',
  Docker: 'docker', 'CI/CD': 'githubactions', Streamlit: 'streamlit', PostgreSQL: 'postgresql' , MySQL:'mysql' , Vscode:'vscode' };
const logo = (n) => {
  const k = ICONS[n];
  return k ? `<img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${k}/${k}-${k === 'django' ? 'plain' : 'original'}.svg" alt="" loading="lazy" onerror="this.remove()">` : '';
};

// Compétences
document.getElementById('competences-liste').innerHTML = CONFIG.competences
  .map((g) => `
    <div>
      <h3 class="mb-3 font-display text-lg font-bold">${ph(g.groupe)}</h3>
      <ul class="flex flex-wrap gap-3">
        ${g.items.map((i) => `<li class="skill">${logo(i)}<span>${ph(i)}</span></li>`).join('')}
      </ul>
    </div>`).join('');

// Projets (cartes avec capture d'écran)
const lien = (url, texte) => {
  if (!url) return '';
  const href = /^\[/.test(url) ? '#' : url;
  return `<a class="font-semibold text-primary underline decoration-2 underline-offset-4 hover:decoration-accent" href="${href}" target="_blank" rel="noopener noreferrer">${texte}</a>`;
};
const pl = document.getElementById('projets-liste');
pl.className = 'grid gap-6 md:grid-cols-2';
pl.innerHTML = CONFIG.projets.map((p, i) => `
  <article class="card">
    <div class="card-img">
      <span class="card-initial" aria-hidden="true">${p.titre.charAt(0)}</span>
      <img src="${p.image || `images/projet-${i + 1}.jpg`}" alt="Capture d'écran du projet ${p.titre.replace(/"/g, '')}" loading="lazy" onerror="this.remove()">
    </div>
    <div class="p-5">
      <h3 class="font-display text-xl font-bold leading-snug">${ph(p.titre)}</h3>
      <p class="mt-1 text-sm text-muted">${ph(p.annee)}</p>
      <p class="mt-3 leading-relaxed">${ph(p.description)}</p>
      <ul class="mt-4 flex flex-wrap gap-2">${p.technos.map((t) => `<li class="tag">${logo(t)}${ph(t)}</li>`).join('')}</ul>
      <p class="mt-5 flex flex-wrap gap-x-5 gap-y-1">${lien(p.github, 'Code source')} ${lien(p.demo, 'Voir en ligne')}</p>
    </div>
  </article>`).join('');

// Expérience et formation
const frise = (liste) => liste
  .map((e) => `
    <li>
      <h4 class="font-display text-lg font-bold">${ph(e.poste)}</h4>
      <p class="text-muted">${ph(e.lieu)} · ${ph(e.periode)}</p>
      ${e.details ? `<p class="mt-2 max-w-prose leading-relaxed">${ph(e.details)}</p>` : ''}
    </li>`).join('');

document.getElementById('experience-liste').innerHTML = frise(CONFIG.experiences);
document.getElementById('formation-liste').innerHTML = frise(CONFIG.formations);

// Contact
const chiffres = CONFIG.telephone.replace(/\D/g, '');
const lignes = [];
lignes.push(['Email', CONFIG.email, `mailto:${CONFIG.email}`]);
if (chiffres.length >= 8) {
  lignes.push(['WhatsApp', CONFIG.telephone, `https://wa.me/${chiffres}`]);
}
lignes.push(['Téléphone', CONFIG.telephone, chiffres.length >= 8 ? `tel:+${chiffres}` : '']);
if (CONFIG.github) lignes.push(['GitHub', CONFIG.github.replace('https://', ''), CONFIG.github]);
if (CONFIG.linkedin) lignes.push(['LinkedIn', CONFIG.linkedin.replace('https://', ''), CONFIG.linkedin]);

document.getElementById('contact-liste').innerHTML = lignes
  .map(([nom, valeur, href]) => {
    const interieur = `<span class="font-semibold">${nom}</span><span>${ph(valeur)}</span>`;
    const externe = href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<li>${href
      ? `<a class="contact-row" href="${href}"${externe}>${interieur}</a>`
      : `<div class="contact-row">${interieur}</div>`}</li>`;
  }).join('');

// CV et pied de page
document.getElementById('cv-link').setAttribute('href', CONFIG.cv);
document.getElementById('annee').textContent = '© ' + new Date().getFullYear();

// Thème clair / sombre
document.getElementById('theme-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Menu mobile
const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const setMenu = (open) => {
  menu.classList.toggle('hidden', !open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
};
menuBtn.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));


/* =====================================================================
   Photo, texte animé, bandeau de logos, chiffres et animations
   ===================================================================== */
const calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Photo (si photo.jpg est absente, on affiche l'initiale)
document.getElementById('photo-wrap').innerHTML =
  `<span class="photo-initial" aria-hidden="true">${CONFIG.prenom.charAt(0)}</span>` +
  `<img src="${CONFIG.photo}" alt="Photo de ${CONFIG.prenom}" onerror="this.remove()">`;

// Phrases qui s'écrivent toutes seules
(function () {
  const el = document.getElementById('typed'), r = CONFIG.roles;
  if (!el || !r || !r.length) return;
  if (calme) { el.textContent = r[0]; return; }
  let i = 0, c = 0, del = false;
  (function tick() {
    el.textContent = r[i].slice(0, c);
    let d = del ? 35 : 70;
    if (!del && c === r[i].length) { del = true; d = 1600; }
    else if (del && c === 0) { del = false; i = (i + 1) % r.length; d = 300; }
    else c += del ? -1 : 1;
    setTimeout(tick, d);
  })();
})();

// Bandeau défilant de logos
const uniques = [...new Set(CONFIG.competences.flatMap((g) => g.items))];
const rang = uniques.filter((n) => ICONS[n]).map((n) => `<span class="marq-item">${logo(n)}${n}</span>`).join('');
document.getElementById('marquee').innerHTML = `<div class="marq-track">${rang}${rang}</div>`;

// Chiffres (comptent jusqu'à leur valeur à l'écran)
const chiffresAPropos = [
  [CONFIG.projets.length, 'projets réalisés'],
  [uniques.length, 'technologies utilisées'],
  [CONFIG.experiences.length, 'expérience pro']
];
document.getElementById('apropos-texte').insertAdjacentHTML('afterend',
  `<ul class="flex gap-8 md:col-start-2">${chiffresAPropos.map(([n, l]) =>
    `<li><span class="count font-display text-4xl font-extrabold text-primary" data-to="${n}">${n}</span><span class="block text-sm text-muted">${l}</span></li>`).join('')}</ul>`);

// Barre de progression de lecture
const barre = document.createElement('div');
barre.id = 'progress';
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

// Apparition au défilement + compteurs + lien actif du menu
if ('IntersectionObserver' in window && !calme) {
  const cibles = document.querySelectorAll('main section:not(#accueil) > div > *, .card, .timeline > li, #contact-liste li, .skill');
  cibles.forEach((el) => {
    const frere = [...el.parentElement.children].indexOf(el);
    el.style.transitionDelay = Math.min(frere, 8) * 70 + 'ms';
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

  const liens = [...document.querySelectorAll('.nav-link')];
  const actif = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    liens.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => actif.observe(s));
}