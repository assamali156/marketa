import { Component, OnInit } from '@angular/core';
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import {faListOl} from '@fortawesome/free-solid-svg-icons'
import {faUnderline} from '@fortawesome/free-solid-svg-icons'
import {faItalic} from '@fortawesome/free-solid-svg-icons'
import {faBold} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  faListUl=faListUl
  faListOl=faListOl
  faUnderline=faUnderline
  faItalic=faItalic
  faBold=faBold

  constructor() { }

  ngOnInit(): void {
  }

}
