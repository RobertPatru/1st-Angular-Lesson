import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: any;
  showExtended: boolean = true;
  loading: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Robert',
          lastName: 'Baratheon',
          age: 34,
          address: {
            street: 'Linia Mare',
            city: 'Ciocanesti',
            number: 11
          }
        },
        {
          firstName: 'Kevin',
          lastName: 'Burche',
          age: 124,
          address: {
            street: 'a Mare',
            city: 'dsa',
            number: 112
          }
        },
        {
          firstName: 'adwa',
          lastName: 'dsa',
          age: 324,
          address: {
            street: 'Linia dsa',
            city: 'sda',
            number: 121
          }
        }
      ];

      this.loading = false;
    }, 2000);
    

    // this.addUser(
    //   {
    //     firstName: 'david ceva',
    //     lastName: 'aoleu',
    //     age: 324,
    //     address: {
    //       street: 'aoleu aoleu',
    //       city: 'aoleu',
    //       number: 121
    //     }
    //   }
    // );
  }

  // addUser (user: User) {
  //   this.users.push(user);
  // }

}
