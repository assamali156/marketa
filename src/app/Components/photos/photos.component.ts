import { Component, OnInit } from '@angular/core';
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  faCircle = faCircle;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
