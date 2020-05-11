import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OnlineService {
  mydata: MyDataType[] = [
    { id: 1, name: "Sunny" },
    { id: 2, name: "Raj" },
  ];

  myObservableArray: Observable<MyDataType[]> = new Observable<MyDataType[]>();
  constructor() {}

  getUsersForPromise(): Observable<MyDataType[]> {
    let data = new Observable<MyDataType[]>((observer) => {
      setTimeout(() => {
        observer.next(this.mydata);
        observer.complete();
      }, 2000);
    });
    return data;
  }
  getUsersForCallback(callback) {
    setTimeout(() => {
      return callback(this.mydata);
    }, 2000);
  }
}

export class MyDataType {
  public id: number;
  public name: string;
}
