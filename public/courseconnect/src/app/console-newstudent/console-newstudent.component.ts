import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-console-newstudent',
  templateUrl: './console-newstudent.component.html',
  styleUrls: ['./console-newstudent.component.scss']
})
export class ConsoleNewstudentComponent implements OnInit {

  error: string = "";
  email: string = "";
  id: string = "";

  userDocs: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params['id']); //log the value of id
      this.id = params['id'];
    });
  }

  addStudent(){
    if (this.email.length > 0) {
      this.userDocs = this.db.collection("users", ref => ref.where('email', '==', this.email));
      this.users = this.userDocs.valueChanges();

      this.users.subscribe(value => {
        if(value.length > 0){
          this.db.collection("classes").doc(this.id).collection("students").doc(this.email).set({'email': this.email, 'isAttending': false})
            .then(value1 => {
              this.router.navigate(["/console-class/" + this.id])
            })
            .catch(err =>{
              this.error = err.message;
            })
        }else{
          this.error = "No user found"
        }
      })


    }else{
      this.error = "Please fill out all fields"
    }
  }

}
