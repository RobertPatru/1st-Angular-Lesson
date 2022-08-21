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
  enableAdd: boolean = true;
  currentClasses = {}
  currentStyles = {}

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
          image: 'https://picsum.photos/seed/picsum/600/',
          isActive: true,
          balance: 756,
          registered: new Date('05/04/2019 08:30:00')
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
          image: 'https://picsum.photos/seed/picsum/600/',
          isActive: false,
          balance: 100,
          registered: new Date('11/02/2018 08:30:00')
        },
        {
          firstName: 'Marcel ',
          lastName: 'Poama',
          age: 324,
          // image: 'https://picsum.photos/seed/picsum/600/',
          isActive: true,
          balance: 200,
          registered: new Date('06/12/2017 08:30:00')
        }
      ];

      this.setCurrentClasses();
      this.setCurrentStyles();

      this.loading = false;
    }, 1000);
  }

  setCurrentClasses () {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-big': this.showExtended ? '' : '40px',
    }
  }
}