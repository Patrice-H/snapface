import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  firstSnap!: FaceSnap;
  secondSnap!: FaceSnap;
  thirdSnap!: FaceSnap;

  ngOnInit() {
    this.firstSnap = new FaceSnap(
      'Blender',
      'Mon logiciel 3D préféré',
      new Date(),
      6,
      '../../assets/blender.png'
    );
    this.secondSnap = new FaceSnap(
      'Photoshop',
      'Logiciel photo me permettant de découper des maquettes',
      new Date(),
      4,
      '../../assets/photoshop.png'
    );
    this.thirdSnap = new FaceSnap(
      'Illustrator',
      'Logiciel de dessin',
      new Date(),
      3,
      '../../assets/illustrator.png'
    );
  }
}
