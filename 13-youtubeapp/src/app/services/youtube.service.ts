import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl:string = "https://content.googleapis.com/youtube/v3";
  private apiKey:string = "AIzaSyAZJXBAWotIPNvuPa5spdLNaaTBkUqRnB8";

  private nextTokenPage:string = "";

  constructor(public http:HttpClient) { }

  getVideos(){
    let url = `${this.youtubeUrl}/playlistItem`;
    let params = new HttpParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', 'UU76hs2bdrebFYvdR-I8bwyw');
    params.set('key', this.apiKey);
    
    //if(this.nextTokenPage.length > 0){
    //  params.set('pageToken', this.nextTokenPage);
    //}

    let url2 = 'https://content.googleapis.com/youtube/v3/playlistItems?maxResults=10&part=snippet&playlistId=UU76hs2bdrebFYvdR-I8bwyw&key=AIzaSyAZJXBAWotIPNvuPa5spdLNaaTBkUqRnB8';
    if(this.nextTokenPage.length > 0){
      url2 = url2 + "&pageToken=" + this.nextTokenPage;
    }
    //return this.http.get(url, {params});
    return this.http.get(url2).pipe(map( (data:any) => {
      this.nextTokenPage = data.nextPageToken;
      console.log(this.nextTokenPage)
      console.log(typeof(this.nextTokenPage))
      let videos:any[] = [];
      for(let video of data.items){
        videos.push(video.snippet);
      }
      return videos;
    }));
  }
}
