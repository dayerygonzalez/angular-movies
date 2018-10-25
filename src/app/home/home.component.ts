import { Component, OnInit } from '@angular/core';
import { Auth, User } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.user = store.select('user');
  }

  ngOnInit() {
  }

  logout() {
  }

}
