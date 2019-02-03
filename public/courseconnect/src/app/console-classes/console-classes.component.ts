import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {User} from "../user";
import {Observable} from "rxjs";
import {Class} from "../class";

@Component({
  selector: 'app-console-classes',
  templateUrl: './console-classes.component.html',
  styleUrls: ['./console-classes.component.scss']
})
export class ConsoleClassesComponent implements OnInit {

  filter: string = "";

  classesCollection: AngularFirestoreCollection<Class>;
  classes: Observable<Class[]>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {
    this.classesCollection = this.db.collection("classes");
    this.classes = this.classesCollection.valueChanges();
  }

  ngOnInit() {
  }

}
