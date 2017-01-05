import { Component, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { CompanyService}  from './services/company.service';
import { DeviceService}  from './services/device.service';
import { UserService}  from './services/user.service';
import { DidService}  from './services/did.service';
import { FilterUsersPipe} from './users.pipe';
import { FilterDevicesPipe} from './devices.pipe';
import { ErrorService }  from './services/error.service';



import { Company } from './company';
import { CompanySearch } from './company-search';

import { Device } from './device';
import { User } from './user';
import { Did } from './did';






@Component({
  moduleId: module.id,
  selector: 'my-company-detail',
  templateUrl: 'company-detail.component.html',
  styleUrls: [ 'company-detail.component.css' ]
})



export class CompanyDetailComponent implements OnInit{

  @Input()
  company: Company;
  @Input()
  companies: CompanySearch[] = [];
  editMode: boolean = true;
  password: string;
  index: number;
  @Input()
  filter: string = '';
  msg: string;
  typeDeviceFilter: string = 'all';
  username: string;
  dids: Did[];
  devices: Device[];
  users: User[] = [] ;
  @Input()
  device = new Device();
  currentUser: User = new User();
  @Input()
  newUser = new User();
  @Input()
  newDevice = new Device();
 

  


  constructor(
    
    private companyService: CompanyService,
    private deviceService: DeviceService, 
    private userService: UserService,
        private didService: DidService,

    private route: ActivatedRoute,
    private location: Location,
    private errorService: ErrorService
    ) {}


  ngOnInit(): void {


    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.companyService.getCompany(id)
        .subscribe(data => {
            this.company = data;
            this.didService.getDids(data.pbxId)
              .subscribe(
                data => {
                  this.dids = data;
                },
                error => {
                  this.errorService.errorPopUp(error._body, error.status);
                })
            this.userService.getUsersForCompany(id)
              .subscribe(
                data => {
                  this.users = data;

                  },
                error => {
                  this.errorService.errorPopUp(error._body, error.status);
                })
          }, 
            error => {
            this.errorService.errorPopUp(error._body, error.status);
          });
      
          });
      

      }

      


      
  


  save(): void {
    this.companyService.update(this.company)
      .subscribe(
        () => {

        },
        error => {
            this.errorService.errorPopUp(error._body, error.status);
        });
    this.editMode = !this.editMode; 
  }



  triggerEditMode(index?: number): void {
      this.editMode = !this.editMode;
      this.index = index;
    }



  
  unlock(): void{
    var lockIt = false;
    var r = confirm('Sei sicuro di voler SBLOCCARE la company con id ' + this.company.companyId + '?');
    if (r) {
        lockIt = true;
        }
    if (!lockIt)
            return;
    
    this.companyService.unlockAccount(this.company)
        .subscribe(
          data => {
              this.company.locked = false;
            },
          error => {
            this.errorService.errorPopUp(error._body, error.status);
          });
      
    }
    

    
  lock(): void{
    var lockIt = false;
    var r = confirm('Sei sicuro di voler BLOCCARE la company con id ' + this.company.companyId + '?');
    if (r) {
        lockIt = true;
        }
    if (!lockIt)
            return;
    
    
    this.companyService.lockAccount(this.company)
      .subscribe(
          data => {
              this.company.locked = true;
            },
          error => {
            this.errorService.errorPopUp(error._body, error.status);
          });
    }

    

  /*
  addCredit(balance: string){
    this.company.balance = this.company.balance + parseInt(balance);
    this.companyService.update(this.company)
        .subscribe(
          () => {
            
            },
          error => {
            this.errorService.errorPopUp(error._body, error.status);
          });
    var form = <HTMLFormElement>document.getElementById("creditForm");
    form.reset();
    }

    */

  addDid(didNumber: string){
    
    this.company.dids.push(didNumber);
    this.companyService.update(this.company)
        .subscribe(
          () => {
            
            },
          error => {
            this.errorService.errorPopUp(error._body, error.status);
          });
    var form = <HTMLFormElement>document.getElementById("didForm");
    form.reset();
  }



  


  deleteDid(index: number){
    this.company.dids.splice(index, 1);
    this.companyService.update(this.company)
      .subscribe(
          () => {
            
            },
          error => {
            this.errorService.errorPopUp(error._body, error.status);
          });
  }

  saveDid(did: Did){
      this.didService.update(this.company.pbxId, did.id, did)
        .subscribe(
          () => {

          }, 
          error => {
            this.errorService.errorPopUp(error._body, error.status);
          })
          this.editMode = !this.editMode; 


  }



  /*
  resetPwd(pwd: string, repeteadPwd: string){
    var button = <HTMLButtonElement>document.getElementById("buttonPwdModal");

    if(pwd === repeteadPwd ){

      this.currentUser.password = pwd;
      this.companyService.update(this.company)
        .subscribe(
            () => {
                this.users = this.company.users;
            },
            error => {
                this.errorService.errorPopUp(error._body, error.status);
            });
      var form = <HTMLFormElement>document.getElementById("myForm");

      form.reset();
      this.msg = " ";
      this.password = null;

      button.setAttribute("data-dismiss", "modal");
      }
    else{
      button.removeAttribute("data-dismiss");
      this.msg = "le password non corrispondono";
      }
  }
  */


  generate() {
    this.password = this.companyService.randomPassword(8);
    }


  
  setAllUsers(){
        this.filter = '';
    }
    /*

  setCurrentUser(user: User){
    this.currentUser = user;
  }


  setDeviceNull(){
    this.newDevice = new Device();
  }


  addDevice(){
    
    this.deviceService.create(this.newDevice)
      .subscribe(
          data => {   
            
              this.deviceService.getDevices(this.currentUser).subscribe(
                data => { this.devices = data;

                  }, 
              error => {
              this.errorService.errorPopUp(error._body, error.status);
              });
              },
              error => {
                this.errorService.errorPopUp(error._body, error.status);
              });
          }
          

  openControlPanel(){
        var win = window.open('https://dev-controlpanel.voverc.com/' + '#/access/signin?admin=true&us=' + this.company.username + '&pw=' + this.company.password1, '_blank');
        win.focus();
     }
     */


  addUser(){
    var button = <HTMLButtonElement>document.getElementById("buttonUserModal");

   
   
    this.userService.create(this.company.companyId, this.newUser)
        .subscribe(
          () => {
            this.userService.getUsersForCompany(this.company.companyId)
              .subscribe(
                data => {
                  this.users = data;
                },
                error =>{
                  this.errorService.errorPopUp(error._body, error.status);
                })
            },
          error => {
            this.errorService.errorPopUp(error._body, error.status);
          });
    button.setAttribute("data-dismiss", "modal");

    
    
    this.newUser = new User();
  }
  
 
  
  searchDevicesForUsername(user: User){

    this.deviceService.getDevices(this.company.companyId, user.userId).subscribe(
        data => { 
        }, 
        error => {
          this.errorService.errorPopUp(error._body, error.status);
          });

                    this.devices = this.users[0].devices;


    this.currentUser = user;
    
  }

  /*

  setCurrentDevice(index: number){
      this.index = index;
      this.device = this.devices[this.index];
  }

  saveDevice(){
    var delIt = false;
    var r = confirm('Sei sicuro di voler salvare il device con id ' +  this.device.id + '?');
      if (r) {
        var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
        if (r2) {
          delIt = true;
        }
    }
    if (!delIt){
    return;
    }
      this.deviceService.update(this.device)
      .subscribe(
          () => {
              
          },
          error => {
            this.searchDevicesForUsername(this.currentUser);
            this.errorService.errorPopUp(error._body, error.status);
            });
  }



   
  */

  deleteUser(user: User){

      

    var delIt = false;
    var r = confirm('Sei sicuro di voler eliminare lo user con id ' +  user.userId + '?');
      if (r) {
        var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
        if (r2) {
          delIt = true;
        }
    }
    if (!delIt){
    return;
    }
    
      
    this.userService.delete(this.company, user)
        .subscribe(
          () => {
              this.userService.getUsersForCompany(this.company.companyId)
                .subscribe(
                  data => {
                    this.users = data;
                  },
                  error => {
                    this.errorService.errorPopUp(error._body, error.status);
                    console.log(error._body);
                  })
            },
          error => {
            this.errorService.errorPopUp(error._body, error.status);
            console.log(error._body);
          });
      }

    
     


 


    
  

  






  }
