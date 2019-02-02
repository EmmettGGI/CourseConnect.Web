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

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

}
