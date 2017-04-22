import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
  </div>
  <router-outlet></router-outlet>`,
})
export class AppComponent  {
  inElectron : boolean;

  constructor() {
    //this.inElectron = process.versions.electron != undefined;
  }
}
