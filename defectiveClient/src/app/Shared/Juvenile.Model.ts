
export enum EmotionScore{
  Angry,
  Uncooperative,
  Content,
  Cooperative,
  Friendly
}

export enum PersonStatus{
  Dead,
  Injured,
  Healthy
}

/**
 *
 */
export class JuvenileModel{

  /**
   *
   * @param name
   * @param gender
   * @param description
   * @param age
   * @param delinquencyScore
   * @param HitPoint
   * @param emotionalScore
   * @param currentStatus
   * @param imageSrc
   */
  constructor(public name: string,
              public gender: string,
              public description: string,
              public age: number,
              public delinquencyScore: number,
              public HitPoint: number,
              public emotionalScore: EmotionScore,
              public currentStatus: PersonStatus,
              public imageSrc: string
              ) {
  }

}
