import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-console-alerts',
  templateUrl: './console-alerts.component.html',
  styleUrls: ['./console-alerts.component.scss']
})
export class ConsoleAlertsComponent implements OnInit {

  error:string = "";
  alertMessage:string = "";

  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

  sendAlert(){
    if (this.alertMessage.length > 0){
      this.db.collection('alerts').add({"message": this.alertMessage});
      this.alertMessage = "";
    }else{
      this.error = "Please fill out all fields"
    }
  }

}
