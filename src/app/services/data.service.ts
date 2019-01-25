import { Injectable } from '@angular/core';
import {FireService} from './fire.service';
import { FirebaseFirestore } from '@firebase/firestore-types';
import {ProjectInfo} from '../../model';
import { QueryDocumentSnapshot } from '@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  db: FirebaseFirestore;

  constructor(fire: FireService) {


    this.db = fire.fb_firestore();
  }

  extractDocuments(docs: QueryDocumentSnapshot[]) {
    const data = [];

    docs.forEach(doc => {
      data.push(doc.data());
    });

    return data;
  }

  async databaseRead(path: string): Promise<any> {

    const snap = await this.db.collection(path).get();
    return new Promise<any>((resolve) => {
      resolve(snap.docs);
    });
  }

  async fetchData(path: string): Promise<ProjectInfo[]> {

    const local_stored = Cache.checkCache(path);
    if (!local_stored) {

      const pending = <ProjectInfo[]>this.extractDocuments(await this.databaseRead(path));

      Cache.addToCache(path, pending);
      return new Promise<ProjectInfo[]>(resolve => {
        resolve(pending);
      });

    } else {
      return local_stored;
    }
  }

}

export class Cache {

  constructor() {}

  static checkCache(path: string) {

    const data = JSON.parse(localStorage.getItem(path));

    if (data === null) { return false; } else { return data; }
  }

  static addToCache(path: string, data: ProjectInfo[]): void {
    localStorage.setItem(path, JSON.stringify(data));
  }

}
