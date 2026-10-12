/* =====================================================================
   TON CONTENU : c'est le SEUL fichier à modifier pour mettre à jour
   ton portfolio (textes, projets, compétences, contact).
   Tu n'as pas besoin de toucher à index.html, style.css ni script.js.
   Pour cacher un élément optionnel (LinkedIn, lien démo, CV...), mets ''.
   ===================================================================== */

const CONFIG = {
  // --- Identité ---
  prenom: 'Dylan',
  nom: 'Ngouafon',
  titre: 'Développeur logiciel full-stack',
  // Phrases qui s'écrivent toutes seules sous ton nom
  roles: ['Développeur logiciel full-stack', 'Applications web et mobiles', 'React · Django · FastAPI'],
  photo: 'photo.jpg',          // photo carrée, visage centré
  ville: 'Bandjoun, Cameroun',
  disponibilite: 'Ouvert aux postes de développeur et aux stages',
  langues: 'Français (courant), Anglais (débutant)',

  // --- Texte d'accueil (2 phrases maximum) ---
  accroche:
    'Je conçois des applications web et mobiles, du backend à l\'interface. ' +
    'Je cherche une équipe où construire des produits utiles et progresser.',

  // --- À propos (un paragraphe par ligne) ---
  apropos: [
    'Je suis développeur logiciel basé à Bandjoun. Je travaille avec React, Next.js et React Native côté interface, et avec Django, FastAPI et Express côté serveur.',
    'J\'ai conçu une application complète de gestion d\'école secondaire adaptée au système éducatif camerounais, et j\'ai effectué un stage en 2024 chez Sigeris SARL.'
  ],

  // --- Compétences (modifie, ajoute ou supprime des lignes) ---
  competences: [
    { groupe: 'Front-end', items: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'Next.js'] },
    { groupe: 'Back-end', items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Node.js', 'Express'] },
    { groupe: 'Mobile', items: ['React Native', 'Expo'] },
    { groupe: 'Bases de données', items: ['PostgreSQL', 'MySQL'] },
    { groupe: 'Outils et déploiement', items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'VS Code'] }
  ],

  // --- Projets ---
  // Pour ajouter un projet : copie un bloc { ... }, mets ta capture dans le
  // dossier "images" et indique son chemin dans "image".
  // "image: ''" = pas de capture (une initiale s'affiche à la place).
  projets: [
    {
      titre: 'SchoolManager : gestion d\'école secondaire',
      annee: '2026',
      description:
        'Application web et mobile de gestion des établissements secondaires francophones du Cameroun : élèves, inscriptions, notes, absences, emplois du temps et bulletins. ' +
        'J\'ai conçu la base de données (modélisation Merise) et développé l\'API REST du backend.',
      technos: ['Django', 'Django REST Framework', 'React', 'React Native'],
      github: 'https://github.com/livainexus-dot/gestion-ecole-secondaire',
      demo: '',
      image: 'images/projet-1.webp'
    },
    {
      titre: 'Tonti : gestion de tontines',
      annee: '2026',
      description:
        'Application web de gestion de tontines : création de groupes et adhésion par code, portefeuille, alertes et suivi des tours de cotisation en FCFA.',
      technos: ['Next.js' ,  'PostgreSQL' , 'FastAPI'],
      github: '',
      demo: '',
      image: 'images/projet-2.webp'
    },
    {
      titre: 'SkillLink : le réseau des talents locaux',
      annee: '2026',
      description:
        'Plateforme de mise en relation pour des services professionnels : trouver un emploi, recruter des talents ou proposer ses services en Afrique, avec profils, références et missions courtes.',
      technos: ['Next.js' , 'PostgreSQL' , 'FastAPI'],
      github: '',
      demo: '',
      image: 'images/projet-3.webp'
    },
    {
      titre: 'Ferme Intelligente (ManiChicks)',
      annee: '2026',
      description:
        'Application mobile de gestion d\'une ferme avicole : suivi de l\'élevage de poulets au quotidien depuis un téléphone.',
      technos: ['React Native', 'Expo'],
      github: 'https://github.com/SOFTWARE-ING/Ferme-Intelligente-IoT-BigData-Machine-Learning-/tree/main/mobile',
      demo: '',
      image: ''   // ajoute une capture : image: 'images/ferme.webp'
    }
  ],

  // --- Expérience ---
  experiences: [
    {
      poste: 'Stagiaire développeur',
      lieu: 'Sigeris SARL',
      periode: '2024 · 3 mois',
      details: 'Conception et développement d\'applications.'
    }
  ],

  // --- Formation ---
  formations: [
    {
      poste: 'Licence Technologique',
      lieu: 'IUT Fotso Victor de Bandjoun',
      periode: '2025-2026',
      details: ''
    }
  ],

  // --- Contact ---
  contactTexte: 'Une offre, une question, un projet ? Écris-moi, je réponds rapidement.',
  email: 'dylandevjs@gmail.com',
  indicatif: '237',            // indicatif du pays (Cameroun = 237)
  telephone: '650946982',      // sans l'indicatif ; sert aussi pour WhatsApp
  github: 'https://github.com/Dylan-DevData',
  linkedin: 'https://www.linkedin.com/in/dylan-ngouafon-20920a418/',                // optionnel : colle ton lien LinkedIn ou laisse ''
  cv: 'CV.pdf'                 // mets ton CV dans ce dossier ; le bouton se cache s'il est absent
};
