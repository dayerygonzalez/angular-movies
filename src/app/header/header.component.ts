import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;
  @Output() onLogout = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  logout () {
    this.onLogout.emit();
  }

}
