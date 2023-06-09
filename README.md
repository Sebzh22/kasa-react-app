Projet 7 : Kasa - Agence de location d'immeuble

Contexte : 

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Il souhaite donc faire une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.

Objectif : 

Développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !). 

Back-end :

Le fichier JSON pour construire le Front qui correspond ce trouve a cette adresse : https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json

Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

Pour le défilement des photos dans la galerie (composant Gallery) :
Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

Outils standards utilisés :

- Create React App
- React Router
- Styling avec SASS
- Sans aucune librairie React externe

Contrainte techniques

React :

● Découpage en composants modulaires et réutilisables ;
● Un composant par fichier ;
● Structure logique des différents fichiers ;
● Utilisation des props entre les composants ;
● Utilisation du state dans les composants quand c'est nécessaire ;
● Gestion des événements ;
● Listes : React permet de faire des choses vraiment intéressantes avec
les listes, en itérant dessus, par exemple avec map. Il faut les utiliser
autant que possible.


React Router : 

● Les paramètres des routes sont gérés par React Router dans l'URL
pour récupérer les informations de chaque logement.
● Il existe une page par route.
● La page 404 est renvoyée pour chaque route inexistante, ou si une
valeur présente dans l’URL ne fait pas partie des données
renseignées.
● La logique du routeur est réunie dans un seul fichier.


Installation :
Installer les dépendances avec la commande npm install

Démarrer le serveur avec la commande npm start

Tester le projet :
git clone https://github.com/Cyril-Develop/Kasa.git