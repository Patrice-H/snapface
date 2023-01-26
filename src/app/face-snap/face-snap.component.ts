import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  componentIsLiked!: boolean;
  likeBtnText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.componentIsLiked = false;
    this.likeBtnText = 'Ajouter un like';
  }

  onLike() {
    if (!this.componentIsLiked) {
      this.faceSnapsService.likeById(this.faceSnap.id);
      this.likeBtnText = 'Vous avez déjà ajouté un like !';
      this.componentIsLiked = true;
    }
  }
}
