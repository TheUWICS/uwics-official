import { Injectable } from '@angular/core';
import {firebase} from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

import { FirebaseFirestore } from '@firebase/firestore-types';
import {ProjectInfo} from '../model';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  app = firebase.initializeApp({
    apiKey: 'AIzaSyDOrcuf_DKe9BKzDdeZ3Tla1SDR_NbiUuw',
    authDomain: 'uwics-official.firebaseapp.com',
    databaseURL: 'https://uwics-official.firebaseio.com',
    projectId: 'uwics-official',
    storageBucket: 'uwics-official.appspot.com',
    messagingSenderId: '714702661898'
  });

  constructor() {
  }

  fb_auth(): any {
    return this.app.auth();
  }

  fb_firestore(): FirebaseFirestore {
    return this.app.firestore();
  }
}


