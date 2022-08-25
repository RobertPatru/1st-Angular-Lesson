import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: any;
  showExtended: boolean = true;
  loading: boolean = true;
  enableAdd: boolean = true;

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
          isActive: true,
          registered: new Date('05/04/2019 08:30:00'),
          hide: true
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
          isActive: false,
          registered: new Date('11/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Marcel ',
          lastName: 'Toma',
          age: 324,
          isActive: true,
          registered: new Date('06/12/2017 08:30:00'),
          hide: true
        }
      ];

      this.loading = false;
    }, 500);
  }


  addUser(user:any) {
    this.users.push(user);
  }

  extendInfo(user: any) {
    // user.hide ? user.hide = false : user.hide = true;
    user.hide = !user.hide;
    console.log(user);
  }
}