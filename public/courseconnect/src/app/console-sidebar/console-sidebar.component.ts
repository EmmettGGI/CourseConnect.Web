import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {User} from "../user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-console-sidebar',
  templateUrl: './console-sidebar.component.html',
  styleUrls: ['./console-sidebar.component.scss']
})
export class ConsoleSidebarComponent implements OnInit {

  email: string = "";

  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {
    if (this.afAuth.auth.currentUser == null){
      this.router.navigate(['/console-login'])
    }else {
      this.email = this.afAuth.auth.currentUser.email;
      this.userDoc = this.db.collection("users").doc(this.afAuth.auth.currentUser.uid)
      this.user = this.userDoc.valueChanges();
    }
  }

  ngOnInit() {
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(["/console-login"])
  }

}
