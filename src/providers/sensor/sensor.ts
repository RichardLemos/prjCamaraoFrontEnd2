import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';


@Injectable()
export class SensorProvider {
  private baseApiPath = "http://localhost:8080";

  constructor(public http: HttpClient) {
    console.log('Hello SensorProvider Provider');
  }

  getLatestSensor() {
   return this.http.get(this.baseApiPath + "/camarao/last")
  }

}
