import {Injectable} from "@angular/core";
import {IdName} from "./id-name.interface";

@Injectable({
  providedIn: "root"
})
export class IdNameApi {

  private ranges : IdName[] = [
    { id: 'Orbital', name: '🌍 Orbiting around the earth'},
    {
      id: 'Interplanetary',
      name: '☀ To the moon and other planets'
    },
    { id: 'Interstellar', name: '⭐ Traveling to other stars'},
  ]

  private statuses = ['Active', 'Pending'];

  public getRanges(){
    return this.ranges;
  }

  private premiumFood = ['Premium Food', 'Normal Food']

  public getStatuses(){
    return this.statuses;
  }

  public getFood(){
    return this.premiumFood;
  }

}
