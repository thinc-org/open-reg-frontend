import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menus: any[] = [
    {
      title: 'Getting Started',
      link: '/',
    },
    {
      title: 'Getting Started 2',
      link: '/',
    },
    {
      title: 'Getting Started 3',
      link: '/',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
