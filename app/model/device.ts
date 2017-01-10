

export class Device{
	  deviceId: number;
    type: string;
    creationDate: Date;
    


    constructor(deviceId?: number,  type?: string, creationDate?: Date){
    	  this.deviceId = deviceId;
          this.type = type;
          this.creationDate = creationDate;
          
          }
}
