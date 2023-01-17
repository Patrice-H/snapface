import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  imageUrl!: string;
  componentIsLiked!: boolean;
  likeBtnText!: string;

  ngOnInit() {
    this.title = 'Blender';
    this.description = 'Mon logiciel 3D préféré';
    this.createdDate = new Date();
    this.likes = 6;
    this.imageUrl = '../../assets/blender.png';
    this.componentIsLiked = false;
    this.likeBtnText = 'Ajouter un like';
  }

  onLike() {
    if (!this.componentIsLiked) {
      this.likes++;
      this.likeBtnText = 'Vous avez déjà ajouté un like !';
      this.componentIsLiked = true;
    }
  }
}
