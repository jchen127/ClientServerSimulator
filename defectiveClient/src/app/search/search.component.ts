import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  acceptedSearchTerm: string = '';
  searchTermFiltered: boolean = true;

  constructor() {



  }

  searchTermFilterFunction(): boolean{


    if(this.acceptedSearchTerm.length%2 == 0){
      this.searchTermFiltered = true;
    }else{
      this.searchTermFiltered = false;
    }

    return this.searchTermFiltered;

  }

  ngOnInit(): void {
  }

}
