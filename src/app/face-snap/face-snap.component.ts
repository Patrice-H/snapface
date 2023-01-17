import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  componentIsLiked!: boolean;
  likeBtnText!: string;

  ngOnInit() {
    this.componentIsLiked = false;
    this.likeBtnText = 'Ajouter un like';
  }

  onLike() {
    if (!this.componentIsLiked) {
      this.faceSnap.likes++;
      this.likeBtnText = 'Vous avez déjà ajouté un like !';
      this.componentIsLiked = true;
    }
  }
}
