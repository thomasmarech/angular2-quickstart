import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>
  Email : {{email}}.<br />
  Address : {{address.street}}, {{address.city}} ({{address.country}}).
  </p>
  <div>
    <button (click)="toggleSkills()">{{showSkills ? "Hide skills" : "Show skills"}}</button>
    <ul *ngIf="showSkills">
        <li *ngFor="let skill of skills">{{skill}}</li>
    </ul>
  </div>`,
})
export class UserComponent  { 
    name: string; 
    email: string;
    address: address;
    skills: string[];
    showSkills: boolean;

    constructor () {
        this.name = 'Thomas Maréchal';
        this.email = 'thomas.marechal@meet-2.com';
        this.address = {
            street : 'Mauhin 6/c',
            city: '4608 Dalhem',
            country: 'BE'
        }
        
        this.showSkills = false;
        this.skills = [ 'Daddy', 'Soccer', 'MTB'];
    }

    toggleSkills() {
        this.showSkills = !this.showSkills;
    }
}
interface address {
    street: string;
    city: string;
    country: string;
}
