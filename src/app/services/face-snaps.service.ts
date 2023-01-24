import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      title: 'Blender',
      editor: 'Fondation Blender',
      version: '3.4',
      description: 'Logiciel de modélisation 3D',
      createdDate: new Date('2022 12'),
      likes: 3,
      imageUrl: '../../assets/blender.png',
      openSourceUrl: '../../assets/opensource.png',
    },
    {
      title: 'Photoshop',
      editor: 'Adobe',
      version: 'CC2022 23.5.4',
      description: 'Logiciel de retouche photo',
      createdDate: new Date('2023 1'),
      likes: 2,
      imageUrl: '../../assets/photoshop.png',
    },
    {
      title: 'Illustrator',
      editor: 'Adobe',
      version: 'CC2022 26.5',
      description: 'Logiciel de dessin',
      createdDate: new Date('2022 8'),
      likes: 1,
      imageUrl: '../../assets/illustrator.png',
    },
    {
      title: 'Gimp',
      editor: 'gimp.org',
      version: '2.10.32',
      description: "Logiciel éditeur d'images multiplateforme",
      createdDate: new Date('2022 6'),
      likes: 2,
      imageUrl: '../../assets/gimp.png',
      openSourceUrl: '../../assets/opensource.png',
    },
  ];
}
