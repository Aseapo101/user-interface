import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Userinterface } from '../module/userinterface';
import { Response } from '../module/response';
import { pipe, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserapireferenceService {

  private serviceUri : string = 'https://randomuser.me/api';

  constructor(private httpClient : HttpClient) { }

    getAllUsers(payLoadSize : string) : Observable<Response>
    {
      
      return this.httpClient.request('GET',this.serviceUri + '?' + 'results=' + payLoadSize, {responseType : 'json'}).pipe(
        map( response  => this.processResponse(<Response>( response))));
      
    }

    getUserDetails(uuid : string) : Observable<Response>
    {
      console.log('In the service : '+uuid)
      return this.httpClient.request('GET',this.serviceUri + '?' + 'uuid=' + uuid, {responseType : 'json'}).pipe(
        map(response => this.processResponse(<Response>(response)))
      )
      
    }

    private processResponse (response : Response) : Response {

      return {
        
        results: response.results.map( (user : any) => (<Userinterface>{

          nationality : user.nat,
          phone: user.phone,
          uuid : user.login.uuid,
          gender: user.gender,
          coordinates : { 
            latitude: user.location.coordinates.latitude, 
            longitude: user.location.coordinates.longitude
          },
          cellphone : user.cell,
          email: user.email,
          pictureInfo: { 
            large: user.picture.large,
            medium: user.picture.medium,
            thumbnail: user.picture.large
          },

          location:
          {
            city: user.location.city,
          state: user.location.state,
          country: user.location.country,
          postcode: user.location.postcode,
          },
          name:
          {

            title: user.name.title,
            first: user.name.first,
            last: user.name.last
          }
        })),
       
        info: { ...response.info },
      
          
      };
    }
}
