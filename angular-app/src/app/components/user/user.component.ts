import { Component } from "@angular/core";

@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName = "Robert";
    lastName = "Baratheon";
    age = 34;

    // Methods
    constructor () {
        console.log('This is the constructor inside the user component');
        this.saySomething();
    }

    saySomething () {
        console.log(`First Name: ${this.firstName}`);
    }
} 