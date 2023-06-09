import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public historyGifs: string[] = [];

  constructor(private gifsService: GifsService) { }


  get tags() {
  return  this.gifsService.tagsHistory;
  }

  public searchByTag(tag: string){
    this.gifsService.searchTag(tag);
  }



}
