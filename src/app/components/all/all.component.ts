import { Component, OnInit } from "@angular/core";
import { OnlineService } from "../../services/online.service";
@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"],
})
export class AllComponent implements OnInit {
  promiseData: any;
  callbackData: any;
  observableData: object;
  constructor(private myser: OnlineService) {}

  ngOnInit() {
    this.getCallback();
    this.getPromise();
    this.getObservable();
  }

  getPromise() {
    this.myser
      .getUsersForPromise()
      .toPromise()
      .then((res) => {
        this.promiseData = res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getObservable() {
    this.myser.getUsersForPromise().subscribe((studentsData) => {
      this.observableData = studentsData;
    });
  }
  getCallback() {
    this.myser.getUsersForCallback((res) => {
      this.callbackData = res;
    });
  }
}
