import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  detainJuvenileText: string;
  detentionFacilityText: string;

  constructor() {
    this.detentionFacilityText = 'Detention Facility';
    this.detainJuvenileText = 'Detained Juvenile';

  }

  ngOnInit(): void {



  }

}
