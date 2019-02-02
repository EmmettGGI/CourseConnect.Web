import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-console-verify',
  templateUrl: './console-verify.component.html',
  styleUrls: ['./console-verify.component.scss']
})
export class ConsoleVerifyComponent implements OnInit {

  error: string = "";

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {
    if (this.afAuth.auth.currentUser == null) {
      this.router.navigate(["/console-login"])
    }
  }

  ngOnInit() {
  }

  resendEmail(){
    if (this.afAuth.auth.currentUser != null && !this.afAuth.auth.currentUser.emailVerified){
      this.afAuth.auth.currentUser.sendEmailVerification().catch(err =>{
        this.error = err.message;
      });
    }
  }

  goToLogin(){
    this.router.navigate(["/console-login"]);
  }



}
