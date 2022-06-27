import { Component, OnInit } from '@angular/core';
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import {faInfo} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  faInfoCircle = faCircle;
  faInfo = faInfo;
  constructor() {
   }

  ngOnInit(): void {
  }

}
