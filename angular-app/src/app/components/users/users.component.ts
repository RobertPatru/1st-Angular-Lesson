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
  enableAdd: boolean = false;

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
          },
          image: 'https://picsum.photos/seed/picsum/600/'
        },
        {
          firstName: 'Kevin',
          lastName: 'Burche',
          age: 124,
          address: {
            street: 'a Mare',
            city: 'dsa',
            number: 112
          },
          image: 'https://picsum.photos/seed/picsum/600/'
        },
        {
          firstName: 'adwa',
          lastName: 'dsa',
          age: 324,
          // image: 'https://picsum.photos/seed/picsum/600/'
        }
      ];

      this.loading = false;
    }, 1000);


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
