import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'superbar',
  templateUrl: './superbar.component.html',
  styleUrls: ['./superbar.component.scss'],
})
export class SuperbarComponent implements OnInit {
  public menu = [
    {
      route: '',
      label: 'Home',
    },
    {
      route: 'defensivos',
      label: 'Defensivos',
    },
    {
      route: 'home',
      label: 'Adjuvantes',
    },
    {
      route: 'home',
      label: 'Fertilizantes',
    },
    {
      route: 'home',
      label: 'Grãos',
    },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.is('');
  }

  public go(route) {
    this.route.navigate(['/' + route]);
  }

  public is(route) {
    return this.route.url.replace("/","") == route;
  }
}
