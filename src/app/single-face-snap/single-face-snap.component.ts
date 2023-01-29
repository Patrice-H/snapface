import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  componentIsLiked!: boolean;
  likeBtnText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.componentIsLiked = false;
    this.likeBtnText = 'Ajouter un like';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onLike() {
    if (!this.componentIsLiked) {
      this.faceSnapsService.likeById(this.faceSnap.id);
      this.likeBtnText = 'Vous avez déjà ajouté un like !';
      this.componentIsLiked = true;
    }
  }
}
