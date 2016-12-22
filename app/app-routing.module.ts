import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySearchComponent }  from './company-search.component';
import { CompanyDetailComponent }  from './company-detail.component';
import { NewCompanyComponent }  from './new-company.component';



const routes: Routes = [
	  { path: '', redirectTo: 'a/', pathMatch: 'full' },

	{ path: 'search',  component: CompanySearchComponent },
  { path: 'detail/:id', component: CompanyDetailComponent },
  { path: 'new', component: NewCompanyComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
