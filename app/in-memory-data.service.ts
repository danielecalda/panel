import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Admin }  from './admin';

import { BillingDetails }  from './billing-details';
import { User }  from './user';
import { Company }  from './company';
import { Device }  from './device';
import { Account }  from './account';
import { Did }  from './did';





export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    let company = [

    		new Company(1 , 'Voverc Srl', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), [new User(100, 'pippo', 'pippo@voverc.it',  '3454535'), new User(101, 'pluto', 'pluto@voverc.it')]), 

    		new Company(2 , 'Apple Spa', 'applespa', '078923434', 'info@apple.it', true,  [new Did('099997890'), new Did('045678456')], 34, 'type', new Admin(), new BillingDetails(), [new User(200, 'giacomo', 'giacomo@apple.it',  '7285823785'), new User(201, 'mario', 'mario@apple.it',  '34234234234')]),

         new Company(3 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(4 , 'dcccc', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(5 , 'fffdsfds', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(6 , 'dfdsfds', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(7 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(8 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(9 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(10 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(11 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(12 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(13 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(14 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(15 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(16 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), []),
         new Company(17 , 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true,  [new Did('34523456'), new Did('9052522')], 22, 'type', new Admin(), new BillingDetails(), [])


        



      
      ];

    let device = [ new Device(300, 'pc', 'dpro1', 'pippo',  'dsd', 'dsd'), new Device(301, 'pc', 'dpro2', 'pluto'), new Device(302, 'mop', 'dpro3', 'pippo'), new Device(303, 'pc', 'dpro4', 'pippo')];


   let user = [];


    return {company, device, user};

  }
}
