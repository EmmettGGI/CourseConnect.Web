import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-console-forgot',
  templateUrl: './console-forgot.component.html',
  styleUrls: ['./console-forgot.component.scss']
})
export class ConsoleForgotComponent implements OnInit {

  email: string = "";
  error: string = "";

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

  resetPassword(){
    if (this.email.length > 0){
      this.afAuth.auth.sendPasswordResetEmail(this.email)
        .then(value => {
          this.router.navigate(['/console-login'])
        })
        .catch(err =>{
          this.error = err.message
        })
    }else{
      this.error = "Please fill out all fields"
    }
  }

}
