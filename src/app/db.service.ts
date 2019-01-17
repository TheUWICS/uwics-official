import { Injectable } from '@angular/core';
import {FireService} from './fire.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  db;

  constructor(private fire: FireService) {
    this.db = this.fire.fb_firestore();
  }
}
