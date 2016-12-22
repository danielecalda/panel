import { Component, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { CompanyService}  from './company.service';
import { DeviceService}  from './device.service';
import { UserService}  from './user.service';
import { FilterUsersPipe} from './users.pipe';
import { FilterDevicesPipe} from './devices.pipe';



import { Company } from './company';
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
  editMode: boolean = true;
  password: string;
  index: number;
  @Input()
  filter: string = '';
  msg: string;
  typeDeviceFilter: string = 'all';
  username: string;
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
    private route: ActivatedRoute,
    private location: Location
    ) {}


  ngOnInit(): void {


    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.companyService.getCompany(id)
      .subscribe(data => {
            this.company = data;
            this.users = data.users;
      }, 
      error => {
        alert(error);
      });
      });
      }

      


      
  


  save(): void {
    this.companyService.update(this.company)
      .subscribe(
        () => {

        },
        error => {
        alert(error);
        });
    this.editMode = !this.editMode; 
  }



  triggerEditMode(index?: number): void {
      this.editMode = !this.editMode;
      this.index = index;
    }




  unlock(): void{
    var lockIt = false;
    var r = confirm('Sei sicuro di voler SBLOCCARE la company con id ' + this.company.id + '?');
    if (r) {
        lockIt = true;
        }
    if (!lockIt)
            return;
    if(this.company.locked === true){
        this.company.locked = false;
    }
    
    this.companyService.update(this.company)
        .subscribe(
          () => {
              
            },
          error => {
            alert(error);
          });
      
    }

  lock(): void{
    var lockIt = false;
    var r = confirm('Sei sicuro di voler BLOCCARE la company con id ' + this.company.id + '?');
    if (r) {
        lockIt = true;
        }
    if (!lockIt)
            return;
    if(this.company.locked === false){
        this.company.locked = true;
    }
    
    this.companyService.update(this.company)
      .subscribe(
          () => {
              
            },
          error => {
            alert(error);
          });
    }




  addCredit(credit: string){
    this.company.credit = this.company.credit + parseInt(credit);
    this.companyService.update(this.company)
        .subscribe(
          () => {
            
            },
          error => {
            alert(error);
          });
    var form = <HTMLFormElement>document.getElementById("creditForm");
    form.reset();
    }



  addDid(didNumber: string){
    let did = new Did(didNumber)
    this.company.dids.push(did);
    this.companyService.update(this.company)
        .subscribe(
          () => {
            
            },
          error => {
            alert(error);
          });
    var form = <HTMLFormElement>document.getElementById("didForm");
    form.reset();
  }




  deleteMainDid(){
    this.company.didNumber = null;
    this.companyService.update(this.company)
      .subscribe(
          () => {
            
            },
          error => {
            alert(error);
          });
  }



  deleteDid(index: number){
    this.company.dids.splice(index, 1);
    this.companyService.update(this.company)
      .subscribe(
          () => {
            
            },
          error => {
            alert(error);
          });
  }




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
                alert(error);
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


  generate() {
    this.password = this.companyService.randomPassword(8);
    }


  
  setAllUsers(){
        this.filter = '';
    }


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
              error => {alert(error)});
              },
              error => {
                alert(error);
              });
          }

  openControlPanel(){
     }


  addUser(password: string, repeatedPassword: string){
      var button = <HTMLButtonElement>document.getElementById("buttonUserModal");

    if(password === repeatedPassword){
    
    this.newUser.password = password;
    this.company.users.push(this.newUser);
    this.companyService.update(this.company)
        .subscribe(
          () => {
            this.users = this.company.users;
            },
          error => {
            alert(error);
          });
    button.setAttribute("data-dismiss", "modal");

    }
    else{
          button.removeAttribute("data-dismiss");

      this.msg = 'le password non corrispondono';
      
    }
    this.password = null;
    this.newUser = new User();
  }

 
  
  searchDevicesForUsername(user: User){

    this.deviceService.getDevices(user).subscribe(
        data => { 
          this.devices = data;
        }, 
        error => {
          alert(error)
          });

    this.currentUser = user;
    
  }

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
            alert(error);
            });
  }



   


  deleteUser(index: number){

      

      var delIt = false;
    var r = confirm('Sei sicuro di voler eliminare lo user con id ' +  this.users[index].id + '?');
      if (r) {
        var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
        if (r2) {
          delIt = true;
        }
    }
    if (!delIt){
    return;
    }
    if(this.users[index].userName === this.currentUser.userName){
          this.devices = null;
      }
      this.company.users.splice(index, 1);
      this.companyService.update(this.company)
        .subscribe(
          () => {
            this.users = this.company.users;
            },
          error => {
            alert(error);
          });
      }


     


 


    
  

  






  }
