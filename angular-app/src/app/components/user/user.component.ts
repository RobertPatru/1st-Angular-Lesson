import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    // Properties
    user: any;

    // Methods
    constructor() {
       
    }

    ngOnInit(): void {
        this.user = {
            firstName: 'Robert',
            lastName: 'Baratheon',
            age: 34,
            address: {
                street: 'Linia Mare',
                city: 'Ciocanesti',
                number: 11
            }
        }
    }
}