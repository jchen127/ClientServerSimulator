
export enum myAction{
  Punish,
  Rehab,
  Adjudicate,
  Release,
  Detain
}

export class ActionModel{

  constructor(public imageAsset: string, public action: myAction) {
  }

  ActionToString(): string{

    switch (this.action){
      case myAction.Adjudicate:
        return 'Adjudicate';
      case myAction.Rehab:
        return 'Rehabilitate';
      case myAction.Detain:
        return 'Detain';
      case myAction.Punish:
        return 'Punish';
      case myAction.Release:
        return 'Release';

    }

  }


}
