import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {User} from "../user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-console-newclass',
  templateUrl: './console-newclass.component.html',
  styleUrls: ['./console-newclass.component.scss']
})
export class ConsoleNewclassComponent implements OnInit {

  className: string = "";
  beacon: string = "";
  error: string = "";

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

  createClass() {

    if (this.beacon.length > 0 && this.className.length > 0) {
      this.db.collection("classes").doc(this.beacon).set({"name": this.className, "beacon": this.beacon})
        .then(value => {
          this.router.navigate(["/console-classes"])
        })
        .catch(err => {
          this.error = err.message;
        })
    } else {
      this.error  = "Please fill out all fields"
    }
  }

}
