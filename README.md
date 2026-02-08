# Portfolio BTS SIO SISR - Chloé Beruti

Portfolio professionnel pour l'épreuve du BTS Services Informatiques aux Organisations, option Solutions d'Infrastructure, Systèmes et Réseaux.

## 📁 Structure des fichiers

```
portfolio/
├── index.html              # Page principale du portfolio
├── cv.html                 # CV complet en HTML
├── cv_chloe_beruti.pdf     # CV au format PDF
├── style.css               # Feuille de style CSS
├── script.js               # Scripts JavaScript
├── profil.jpeg             # Photo professionnelle
├── TABLAU.ods              # Tableau de compétences
└── README.md               # Ce fichier
```

## 🚀 Utilisation

### Ouverture locale

1. Téléchargez tous les fichiers dans un même dossier
2. Ouvrez `index.html` avec votre navigateur web préféré
3. Le site est entièrement fonctionnel en local

### Navigation

Le portfolio contient les sections suivantes :

- **Accueil** : Présentation et photo
- **À propos** : Parcours et statistiques
- **Entreprise** : Présentation de Watts Electronics
- **Veille** : Edge Computing et MDM
- **Compétences** : Téléchargement du tableau de compétences
- **BTS SIO** : Présentation du diplôme et de l'option SISR
- **CV** : Consultation et téléchargement du CV en PDF

## 📄 CV

Le CV est disponible en deux formats :

1. **HTML** (`cv.html`) : Version web consultable
2. **PDF** (`cv_chloe_beruti.pdf`) : Version imprimable et téléchargeable

Pour imprimer le CV depuis le navigateur :
1. Ouvrez `cv.html`
2. Utilisez Ctrl+P (ou Cmd+P sur Mac)
3. Sélectionnez "Enregistrer au format PDF"

## 🎨 Caractéristiques techniques

- **Design** : Moderne et professionnel avec thème bleu marine/orange
- **Responsive** : S'adapte à tous les écrans (mobile, tablette, ordinateur)
- **Performance** : Chargement rapide avec CSS et JavaScript optimisés
- **Accessibilité** : Navigation fluide et intuitive
- **Technologies** :
  - HTML5
  - CSS3 (avec CSS Grid et Flexbox)
  - JavaScript (Vanilla)
  - Fonts Google (Outfit & JetBrains Mono)

## 🔧 Modification

### Mettre à jour le contenu

- **Textes** : Modifiez `index.html` et `cv.html`
- **Styles** : Modifiez `style.css`
- **Scripts** : Modifiez `script.js`
- **Photo** : Remplacez `profil.jpeg` (gardez le même nom)
- **Compétences** : Remplacez `TABLAU.ods`

### Régénérer le PDF

Si vous modifiez le CV HTML et souhaitez créer un nouveau PDF :

```bash
wkhtmltopdf --enable-local-file-access --page-size A4 \
  --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 \
  cv.html cv_chloe_beruti.pdf
```

## 🎓 Contexte

Ce portfolio a été créé dans le cadre de la préparation à l'épreuve du BTS SIO option SISR.

**Formation** : BTS SIO SISR 2024-2026  
**Établissement** : Pôle Formation CFAI AFPI LDA - Saint-Étienne  
**Entreprise d'alternance** : Watts Electronics

## 📧 Contact

- **Email** : berutichloe@gmail.com
- **Téléphone** : 07 70 33 95 76
- **Localisation** : Yssingeaux 43200

---

© 2025 Chloé Beruti - Tous droits réservés
