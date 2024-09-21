import { Injectable } from '@angular/core';

// if you have a service that does not have the providedIn prop in the injectable function
// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class NullInjectorService {

  constructor() { }
}
