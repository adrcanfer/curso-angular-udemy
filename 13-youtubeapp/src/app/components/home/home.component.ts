import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  videos:any[] = [];
  videoSel:any

  constructor(public youtubeService:YoutubeService) {
    youtubeService.getVideos().subscribe(
      data => {
        this.videos=data;
      }
    )
   }

  ngOnInit() {
  }

  verVideo(video:any){
    this.videoSel = video;
    $('#myModal').modal();
  }

  cerrarModal(){
    this.videoSel = null;
    $('#myModal').modal('hide');
  }

  cargarMasVideos(){
    this.youtubeService.getVideos().subscribe(
      data => {
        this.videos.push.apply(this.videos, data);
      }
    )
  }

}
