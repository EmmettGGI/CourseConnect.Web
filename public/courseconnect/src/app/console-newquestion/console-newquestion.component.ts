import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-console-newquestion',
  templateUrl: './console-newquestion.component.html',
  styleUrls: ['./console-newquestion.component.scss']
})
export class ConsoleNewquestionComponent implements OnInit {

  error:string = "";
  question:string = "";
  answerA:string = "";
  answerB:string = "";
  answerC:string = "";
  answerD:string = "";
  id:string = "";

  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params['id']); //log the value of id
      this.id = params['id'];
    });
  }

  createQuestion(){
    if (this.question.length > 0 && this.answerA.length > 0 && this.answerB.length > 0 && this.answerC.length > 0 && this.answerD.length > 0){
      var newID = new Date().toISOString();
      this.db.collection('classes').doc(this.id).collection('questions').doc(newID).set({"id": newID,"question": this.question, "answerA": this.answerA, "answerB": this.answerB, "answerC": this.answerC, "answerD": this.answerD, "start": "none", "aANS": 0, "bANS": 0, "cANS": 0, "dANS": 0})
        .then(value => {
          this.router.navigate(['/console-class/'+this.id])
        })
        .catch(err =>{
          this.error = err.message;
        })
    } else{
      this.error = "Please fill out all fields"
    }
  }

}
