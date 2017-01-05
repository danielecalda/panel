

export class Device{
	  deviceId: number;
    type: string;
    creationDate: Date;
    name: string;
    username: string;
    date: Date;
    codecOrder3G: string;
    codecOrder: string;
    dtmfAll: boolean;
    dtmfOrder: string;
    honorFirstCodec: boolean;
    honorFirstCodec3G: string;


    constructor(deviceId?: number,  type?: string, creationDate?: Date, name?: string, username?: string,  codecOrder3G?: string, codecOrder?: string, dtmfAll?: boolean, dtmfOrder?: string,  honorFirstCodec?: boolean, honorFirstCodec3G?: string){
    	  this.deviceId = deviceId;
          this.type = type;
          this.creationDate = creationDate;
          this.name = name;
          this.username = username;
          this.date = new Date();
          this.codecOrder3G = codecOrder3G;
          this.codecOrder = codecOrder;
          this.dtmfAll = dtmfAll;
          this.dtmfOrder = dtmfOrder;
          this.honorFirstCodec = honorFirstCodec;
          this.honorFirstCodec3G = honorFirstCodec3G;
          }
}
