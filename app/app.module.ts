import { NgModule, Provider}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule}     from '@angular/router'

import {Http, HttpModule,  Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod, Request, Connection, XHRBackend,  ConnectionBackend} from '@angular/http';







import { CookieService } from 'angular2-cookie/services/cookies.service';


import './rxjs-extensions';


import { AppComponent }         from './app.component';
import { CompanySearchComponent}  from './company-search.component';
import { CompanyDetailComponent }  from './company-detail.component';
import { CompanyService }          from './services/company.service';
import { DeviceService }          from './services/device.service';
import { UserService }          from './services/user.service';
import { AuthService } from './services/auth.service'
import { AccountService } from "./services/account.service";
import { DidService}  from './services/did.service';
import { ErrorService }  from './services/error.service';


import { NewCompanyComponent }     from './new-company.component';
import { FilterCompaniesPipe }  from './companies.pipe';
import { FilterUsersPipe }  from './users.pipe';
import { FilterDevicesPipe }  from './devices.pipe';
import { SharedService }  from './services/shared.service';
import { HttpClient }   from './httpClient';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
            { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: 'search',  component: CompanySearchComponent },
  { path: 'detail/:id', component: CompanyDetailComponent },
  { path: 'new', component: NewCompanyComponent }
        ], {useHash: true})
    ,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CompanySearchComponent,
    CompanyDetailComponent,
    NewCompanyComponent,
    FilterCompaniesPipe,
    FilterUsersPipe,
    FilterDevicesPipe
  ],
  bootstrap: [ AppComponent ],
  providers: [AuthService, AccountService, CompanyService, DeviceService,  UserService, SharedService, HttpClient, DidService, CookieService, ErrorService ]

})
export class AppModule { }
