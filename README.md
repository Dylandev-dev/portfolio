# Portfolio de Dylan Ngouafon

Site statique : aucune installation, aucune dépendance. Ouvre `index.html` dans le navigateur.

## Modifier le contenu
Tout se passe dans **`config.js`** (textes, compétences, projets, contact).

## Ajouter un projet avec sa capture
1. Mets la capture dans `images/` (idéalement en .webp ou .jpg, ~1600 px de large).
2. Dans `config.js`, copie un bloc de `projets` et remplis-le, avec `image: 'images/ma-capture.webp'`.
3. `image: ''` = pas de capture (une initiale s'affiche).

## CV
Place ton CV dans ce dossier sous le nom `CV.pdf` : le bouton « Télécharger mon CV » apparaît tout seul en ligne.

## Mettre en ligne (GitHub Pages)
Pousse le dossier sur GitHub, puis Settings > Pages > Branch `main` / racine.
