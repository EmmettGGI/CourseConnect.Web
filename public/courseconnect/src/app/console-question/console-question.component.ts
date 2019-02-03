import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {User} from "../user";
import {Observable} from "rxjs";
import {Question} from "../question";

@Component({
  selector: 'app-console-question',
  templateUrl: './console-question.component.html',
  styleUrls: ['./console-question.component.scss']
})
export class ConsoleQuestionComponent implements OnInit {

  id:string = "";
  qid:string = "";

  questionDocs: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;

  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params['id']); //log the value of id
      this.id = params['id'];
      this.qid = params['qid'];

      this.questionDocs = this.db.collection('classes').doc(this.id).collection('questions', ref => ref.where('id', '==', this.qid));
      this.questions = this.questionDocs.valueChanges();

    });
  }

  sendQuestion() {
    this.db.collection('classes').doc(this.id).collection('questions').doc(this.qid).update({start: new Date().toISOString()})
  }
}
