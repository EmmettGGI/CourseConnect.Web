import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-console-signup',
  templateUrl: './console-signup.component.html',
  styleUrls: ['./console-signup.component.scss']
})
export class ConsoleSignupComponent implements OnInit {

  password: string = "";
  email: string = "";
  banner: string = "";
  error: string = "";

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {

  }

  ngOnInit() {
  }

  signUp(){
    this.error = "";

    if(this.email.length > 0 && this.banner.length > 0 && this.password.length > 0){
      this.afAuth.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(value => {
          console.log('Success!', value);
          this.db.collection("users").doc(this.afAuth.auth.currentUser.uid).set({"banner": this.banner});
          this.afAuth.auth.currentUser.sendEmailVerification();
          this.router.navigate(['/console-verify'])
        }).catch(err => {
        this.error = err.message;
      });
    }else{
      this.error = "Please fill out all fields"
    }
}

}
