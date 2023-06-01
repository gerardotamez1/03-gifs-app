import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';


@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
  
})
export class HomePageComponent {
  selectedYear: number = 0;
  
 public orderDate:string= "Ordenar mas antiguo a mas reciente";

  constructor(private gifsService: GifsService){}
  


  get gifs(): Gif[]{
    this.gifsService.originalGifList
    return this.gifsService.gifList;
  }


  isAscendingOrder = true;
 

  sortGifsByDate() {
    
    this.gifsService.gifList.sort((a, b) => {
      const dateA = new Date(a.import_datetime);
      const dateB = new Date(b.import_datetime);
      if (this.isAscendingOrder) {
        this.orderDate= "Ordenar mas reciente a mas antiguo";
        return dateA.getTime() - dateB.getTime();
      } else {
        this.orderDate= "Ordenar mas antiguo a mas reciente"; 
        return dateB.getTime() - dateA.getTime();
      }
    });
    this.isAscendingOrder = !this.isAscendingOrder; 
    
  }



  filterByYear() {

    if (Number(this.selectedYear) === 0) {
      this.gifsService.gifList = [...this.gifsService.originalGifList];
    } else {
      this.gifsService.gifList = this.gifsService.originalGifList.filter(item => {
        const itemYear = new Date(item.import_datetime).getFullYear();
        return itemYear === Number(this.selectedYear);
      });
    }
   
  }
}
