export class Medicine{

  constructor(public name: string, public description:string, public image_asset: string, public image_color:string, public heal_properties: string, public damage_properties: string) {

  }

  /**
   *
   * Generates document fragment in relate to this medicine so it can be appended later.
   * This is not necessary for angular *ngFor
   *
   *  <div class="card my-2 mx-md-2" style="min-width: 18rem;">
   *     <div class="d-flex justify-content-center h3 mt-2">
   *       <i class="fa-solid fa-pills"></i>
   *     </div>
   *
   *     <div class="card-body">
   *       <h5 class="card-title">Anti-depressant</h5>
   *       <p class="card-text text-center">Heals target for specified amount of status</p>
   *       <div class="d-flex justify-content-center">
   *         <a href="#" class="btn btn-primary">Buy and Assign</a>
   *       </div>
   *
   *     </div>
   *
   *   </div>
   *
   * @constructor
   */
  GenerateHtmlFragment(): void{

  }

}
