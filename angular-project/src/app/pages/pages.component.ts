import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from 'src/app/app.data';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  items = MENU_ITEMS;

  constructor() { }

  ngOnInit() { }

}
