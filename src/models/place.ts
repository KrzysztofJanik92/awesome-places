import {Location} from "./location";

export class Place {
  constructor(public title: string,
              public desciption: string,
              public location: Location,
              public imageUrl: string) {
  }
}
