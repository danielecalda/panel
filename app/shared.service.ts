import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
    companyUrl='app/company';
    deviceUrl='app/device';
    apiUrl = 'https://devapi.voverc.com/';
    loginUrl = 'https://devapi.voverc.com/api/token';
} 