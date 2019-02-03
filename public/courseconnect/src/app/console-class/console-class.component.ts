import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Class} from "../class";
import {Observable} from "rxjs";
import {User} from "../user";

@Component({
  selector: 'app-console-class',
  templateUrl: './console-class.component.html',
  styleUrls: ['./console-class.component.scss']
})
export class ConsoleClassComponent implements OnInit {

  id:string = "";

  classCollection: AngularFirestoreDocument<Class>;
  class: Observable<Class>;

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params['id']); //log the value of id
      this.id = params['id'];

      console.log(this.id);

      this.classCollection = this.db.collection('classes').doc(this.id);
      this.class = this.classCollection.valueChanges();

      this.usersCollection = this.db.collection('classes').doc(this.id).collection('students')
      this.users = this.usersCollection.valueChanges()

    });
  }

}
