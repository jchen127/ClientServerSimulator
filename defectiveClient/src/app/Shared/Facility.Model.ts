
export class FacilityModel{

  /**
   *
   * @param name
   * @param description
   * @param imageSrc
   * @param maintenceCost
   * @param totalCost
   */
  constructor(
    public name: string,
    public description: string,
    public imageSrc: string,
    public maintenceCost: number,
    public totalCost: number
    ){
  }

}
