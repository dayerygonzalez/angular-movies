import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { UserLogout } from '../store/user/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Input() user: User;
  // @Output() onLogout = new EventEmitter();
  user: User;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('user').subscribe((user)=>{
      this.user = user;
    })
  }

  logout () {
    const action = new UserLogout();
    this.store.dispatch(action);
  }

}
