import {PersonStatus} from "./Juvenile.Model";


export class StaffModel{


  /**
   *
   * @param name
   * @param gender
   * @param description
   * @param age
   * @param criminalityScore
   * @param kindnessScore
   * @param intelligence
   * @param deedScore
   * @param proficiencyScore
   * @param currentStatus
   * @param imageSrc
   */
  constructor(public name: string,
              public gender: string,
              public description: string,
              public age: number,
              public criminalityScore: number,
              public kindnessScore: number,
              public intelligence: number,
              public deedScore: number,
              public proficiencyScore: number,
              public currentStatus: PersonStatus,
              public imageSrc: string,
              public salary: number
  ) {
  }



}
