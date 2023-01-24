import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      title: 'Blender',
      description: 'Logiciel de modélisation 3D',
      createdDate: new Date(),
      likes: 3,
      imageUrl: '../../assets/blender.png',
      openSourceUrl: '../../assets/opensource.png',
    },
    {
      title: 'Photoshop',
      description: 'Logiciel de retouche photo',
      createdDate: new Date(),
      likes: 2,
      imageUrl: '../../assets/photoshop.png',
    },
    {
      title: 'Illustrator',
      description: 'Logiciel de dessin',
      createdDate: new Date(),
      likes: 1,
      imageUrl: '../../assets/illustrator.png',
    },
    {
      title: 'Gimp',
      description: "Logiciel éditeur d'images multiplateforme",
      createdDate: new Date(),
      likes: 2,
      imageUrl: '../../assets/gimp.png',
      openSourceUrl: '../../assets/opensource.png',
    },
  ];
}
