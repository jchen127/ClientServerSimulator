import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'defectiveClient';

  currentItem = "Facility";

  parentSays(newItem: string){
    console.log(`parent(app.root) got something from child(navigation.component) ${newItem}`);
  }

  ngOnInit(){




  }


}
