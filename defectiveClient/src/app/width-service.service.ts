import { Injectable } from '@angular/core';

function _window(): any{

  return window;

}

@Injectable()
export class WidthServiceService {

  constructor() { }

  getNativeWindow(): any{
    return _window();
  }

}
