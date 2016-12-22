import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }        from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';


import { Device } from './device';
import { User } from './user';
import { SharedService }  from './shared.service';

import { HttpClient }   from './httpClient';




@Injectable()
export class DeviceService {




constructor(private http: HttpClient,
private ss: SharedService) { }


getDevice(id: number): Observable<Device> {
return this.http.get(`${this.ss.deviceUrl}/${id}`)
       .map(response => response.json().data as Device);
       
}



/*
getDevices(user: User): Promise<Device[]> {
return this.http.get(`${this.ss.deviceUrl}?username=${user.username}`)
       .toPromise()
       .then(response => response.json().data as Device[])
       .catch(this.handleError);
}
*/



getDevices(user: User): Observable<Device[]> {
return this.http.get(`app/device?username=${user.userName}`)
       .map(response => response.json().data as Device[]);
       
}








private headers = new Headers({'Content-Type': 'application/json'});


update(device: Device): Observable<Device> {
  const url = `${this.ss.deviceUrl}/${device.id}`;
  return this.http
    .put(url, JSON.stringify(device))
    .map(response => response.json());
    
}


/*
update(device: Device): Promise<Device> {
  const url = `${this.ss.deviceUrl}/${device.id}`;
  return this.http
    .put(url, JSON.stringify(device))
    .toPromise()
    .then(() => device)
    .catch(this.handleError);
}
*/

/*
create(device: Device): Promise<Device> {
  return this.http
    .post(this.ss.deviceUrl, JSON.stringify(device))
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}
*/

create(device: Device): Observable<Device> {
  return this.http
    .post(this.ss.deviceUrl, JSON.stringify(device))
    .map(res => res.json().data);
   
}











}