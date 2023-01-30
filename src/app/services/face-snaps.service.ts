import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Blender',
      editor: 'Fondation Blender',
      version: '3.4',
      description: 'Logiciel de modélisation 3D',
      createdDate: new Date('2022 12'),
      likes: 3,
      imageUrl: '../../assets/blender.png',
      openSourceUrl: '../../assets/opensource.png',
      details:
        "Blender est un logiciel libre de modélisation, d’animation par ordinateur et de rendu en 3D, créé en 1998. Il est actuellement développé par la Fondation Blender. Depuis 2019 le logiciel Blender est de plus en plus reconnu par les entreprises du secteur de l'animation 3D, comme Epic Games, Ubisoft et NVIDIA3,4,5. Il propose des fonctions avancées de modélisation (dont la sculpture 3D, le texturage et dépliage UV, etc), d’animation 3D (rigging, blend shapes), et de rendu (sur GPU comme sur CPU). Il gère aussi le montage vidéo non linéaire, la composition, la création nodale de matériaux, ainsi que diverses simulations physiques telles que les particules, les corps rigides, les corps souples et les fluides. Ses capacités sont par ailleurs très extensibles, grâce à un système de greffons (addons). ",
    },
    {
      id: 2,
      title: 'Photoshop',
      editor: 'Adobe',
      version: 'CC2022 23.5.4',
      description: 'Logiciel de retouche photo',
      createdDate: new Date('2023 1'),
      likes: 2,
      imageUrl: '../../assets/photoshop.png',
      details:
        "Photoshop est un logiciel de retouche, de traitement et de dessin assisté par ordinateur, lancé en 1990 puis en 1992 pour les systèmes d'exploitations MacOS et Windows. Édité par la société Adobe, il est principalement utilisé pour le traitement des photographies numériques et sert également à la création ex nihilo d’images. Il travaille essentiellement sur images matricielles car les images sont constituées d’une grille de points appelés pixels. L’intérêt de ces images est de reproduire des gradations subtiles de couleurs. ",
    },
    {
      id: 3,
      title: 'Illustrator',
      editor: 'Adobe',
      version: 'CC2022 26.5',
      description: 'Logiciel de dessin',
      createdDate: new Date('2022 8'),
      likes: 1,
      imageUrl: '../../assets/illustrator.png',
      details:
        "Adobe Illustrator est un logiciel de création graphique vectorielle. Il fait partie de la gamme Adobe, peut être utilisé indépendamment ou en complément de Photoshop, et offre des outils de dessin vectoriel puissants. Les images vectorielles sont constituées de courbes générées par des formules mathématiques. L'un des outils principaux d'Illustrator étant « la plume » qui permet de tracer des courbes à l'aspect parfait grâce au placement de points d'ancrage et de tangentes qui vont en modifier la courbure. Un des avantages des images vectorielles est qu'elles sont indépendantes de la résolution, c’est-à-dire qu'elles ne perdent pas en qualité lorsqu'on les agrandit. Adapté aussi bien à la création de document papier qu'à celle d'illustrations pour Internet (logos, affiches, etc.) ce logiciel est orienté vers le marché professionnel, il intègre de nombreuses options propres à améliorer la productivité.",
    },
    {
      id: 4,
      title: 'Gimp',
      editor: 'gimp.org',
      version: '2.10.32',
      description: "Logiciel éditeur d'images multiplateforme",
      createdDate: new Date('2022 6'),
      likes: 2,
      imageUrl: '../../assets/gimp.png',
      openSourceUrl: '../../assets/opensource.png',
      details:
        "GIMP (gimp, acronyme de GNU Image Manipulation Program), ou anciennement « The GIMP » (appellation abandonnée avec GIMP 2.4.0 en 2007, comme le montre l'historique des écrans d'accueil), est un outil d'édition et de retouche d'image, diffusé sous la licence GPLv3 comme un logiciel gratuit et libre. Il en existe des versions pour la plupart des systèmes d'exploitation dont GNU/Linux, macOS et Microsoft Windows. Le logiciel est intégré à la liste des logiciels libres préconisés par l’État français dans le cadre de la modernisation globale de ses systèmes d’informations (SI). GIMP a des outils utilisés pour la retouche et l'édition d'image, le photomontage, le dessin à main levée, réajuster, rogner, convertir entre différents formats d'image, et diverses tâches plus spécialisées. Les images animées comme les fichiers GIF et MPEG peuvent être créées en utilisant un plugin d'animation. En utilisant les calques et la transparence, le logiciel peut servir à tracer de la rotoscopie. Les développeurs et mainteneurs de GIMP souhaitent créer un logiciel d'infographie gratuit haut de gamme pour l'édition et la création d'images originales, de photos, d'icônes, d'éléments graphiques de pages web, et d'art pour les éléments de l'interface de l'utilisateur.",
    },
    {
      id: 5,
      title: 'Google Web Designer',
      editor: 'Google',
      version: '14.0.4.1108',
      description: 'Logiciel de création de contenu multimédia HTML5',
      createdDate: new Date('2021 09'),
      likes: 2,
      imageUrl: '../../assets/webdesigner.png',
      details:
        "Google Web Designer est un constructeur de pages par glisser-déposer pour Windows, Mac et Linux de Google permettant de créer des publicités HTML5 interactives et d'autres contenus HTML5. Il offre une interface graphique avec des outils de conception courants, tels qu'un outil Texte qui s'intègre à Google Web Fonts, un outil Formes, un outil Stylo et des outils 3D. L'ensemble de fonctionnalités publicitaires comprend des composants pour ajouter Google Maps, des vidéos YouTube et plus encore, ainsi que l'inclusion automatique des événements de code de suivi pour DoubleClick et AdMob. La vue Code de Google Web Designer permet à l'utilisateur de créer des fichiers CSS, JavaScript et XML, et utilise la coloration syntaxique et la saisie semi-automatique du code qui facilitent l'écriture du code avec moins d'erreurs. Google Web Designer est téléchargeable et utilisable gratuitement.",
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  likeById(id: number): void {
    const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === id);
    if (faceSnap) {
      faceSnap.likes++;
    } else {
      throw new Error('FaceSnap not found');
    }
  }
}
