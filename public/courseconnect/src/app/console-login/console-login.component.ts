import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-console-login',
  templateUrl: './console-login.component.html',
  styleUrls: ['./console-login.component.scss']
})
export class ConsoleLoginComponent implements OnInit {

  error: string = "";
  email: string = "";
  password: string = "";

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

  signIn(){
    if (this.email.length > 0 && this.password.length > 0){
      this.afAuth.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(value => {
          if (!this.afAuth.auth.currentUser.emailVerified){
            this.router.navigate(['/console-verify']);
          }else{
            this.router.navigate(['/console-home']);
          }
        })
        .catch(err =>{
          this.error = err.message;
        })
    }else{
      this.error = "Please fill out all fields"
    }
  }

}
