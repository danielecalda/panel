import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }        from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';


import { Device } from '../model/device';
import { User } from '../model/user';

import { HttpClient }   from './httpClient';




@Injectable()
export class DeviceService {




constructor(private http: HttpClient) { }


    







            getDevices(companyId: number, userId: number): Observable<Device[]> {
            return this.http.get(`https://devapi.voverc.com/api/v2/companies/${companyId}/users/${userId}/devices`)
                   .map(response => response.json().data as Device[]);
                   
            }


    }