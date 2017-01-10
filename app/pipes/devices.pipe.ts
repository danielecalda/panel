import { Pipe, PipeTransform } from '@angular/core';
import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Device } from '../model/device'; 



@Pipe({name: 'filterDevices'})

@Injectable()
export class FilterDevicesPipe implements PipeTransform {
  transform(value: Device[], filter: string): Device[]{
    let devices: Device[] = [];
    if(filter === 'all'){
      devices = value;
      }
      else{
    
    for(let device of value){
    if(device.type.includes(filter)){
    		    devices.push(device);

    }
    }
}
  
    return devices;
  }


  

}