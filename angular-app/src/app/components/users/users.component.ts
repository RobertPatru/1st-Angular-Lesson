import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
  }
  
  users: any;
  showExtended: boolean = true;
  loading: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Robert',
          lastName: 'Baratheon',
          age: 34,
          email: "robert@gmail.com",
          isActive: true,
          registered: new Date('05/04/2019 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Burche',
          age: 124,
          email: "kevin@gmail.com",
          isActive: false,
          registered: new Date('11/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Marcel ',
          lastName: 'Toma',
          email: "marcel@gmail.com",
          isActive: true,
          registered: new Date('06/12/2017 08:30:00'),
          hide: true
        }
      ];

      this.loading = false;
    }, 200);
  }


  addUser() {
    this.users.unshift(this.user);
    this.user.isActive = true;

    this.user = {
      firstName: "",
      lastName: "",
      email: "",
    }
  }

  extendInfo(user: any) {
    // user.hide ? user.hide = false : user.hide = true;
    user.hide = !user.hide;
    console.log(user);
  }

  onSubmit(e:any) {
    this.addUser();

    console.log(e);
  }
}