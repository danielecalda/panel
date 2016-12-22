import { NgModule, Provider}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Http, HttpModule,  Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod, Request, Connection, XHRBackend,  ConnectionBackend} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extensions';


import { AppComponent }         from './app.component';
import { CompanySearchComponent}  from './company-search.component';
import { CompanyDetailComponent }  from './company-detail.component';
import { CompanyService }          from './company.service';
import { DeviceService }          from './device.service';
import { LoginService }          from './login.service';
import { UserService }          from './user.service';
import { NewCompanyComponent }     from './new-company.component';
import { FilterCompaniesPipe }  from './companies.pipe';
import { FilterUsersPipe }  from './users.pipe';
import { FilterDevicesPipe }  from './devices.pipe';
import { SharedService }  from './shared.service';
import { HttpClient }   from './httpClient';


@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
  providers: [CompanyService, DeviceService, LoginService, UserService, SharedService, HttpClient],

  bootstrap: [ AppComponent]
})
export class AppModule { }
