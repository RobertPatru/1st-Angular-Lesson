import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName: string;
    lastName : string;
    age: number;
    address;

    // Methods
    constructor() { 
        this.firstName = 'Robert';
        this.lastName = 'Baratheon';
        this.age = 34;

        this.address  = {
            city: 'Craiova',
            street: 'Linia Mare',
            number: '58'
        }
    }

    saySomething() {
        console.log(`First Name: ${this.firstName}`);
    }

    showAge() {
        return this.age;
    }
} 