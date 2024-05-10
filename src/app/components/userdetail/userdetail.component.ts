import { Component , inject} from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { UserapireferenceService } from '../../service/userapireference.service';
import { Userinterface } from '../../module/userinterface';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-userdetail',
  standalone: true,
  imports: [RouterLink, MatCardModule,MatTableModule,ToolbarComponent,MatGridListModule,MatDividerModule],
  providers: [UserapireferenceService],
  template: `
    <section>
      <app-toolbar></app-toolbar>

      <mat-grid-list cols="2" rowHeight="2:1">
      <mat-grid-tile colspan="1" rowspan="1">
      <mat-card class="mat-card-container">
        <div>
        <mat-card-header>
          <mat-card-title-group>
          <mat-card-title>{{selectedUserInterface[0].name.first}}  {{selectedUserInterface[0].name.last}}</mat-card-title>
          <!--<mat-card-subtitle>{{user.gender}}</mat-card-subtitle>-->
        <img mat-card-avatar src="{{selectedUserInterface[0].pictureInfo.large}}" class="circular--image">
        </mat-card-title-group>
        </mat-card-header>
        <mat-card-content>
          <h3> {{selectedUserInterface[0].name.first}} Profile Details</h3><br>
          <mat-table [dataSource]="selectedUserInterface">
            <ng-container matColumnDef="first">
              <mat-header-cell *matHeaderCellDef>First</mat-header-cell>
              <mat-cell *matCellDef="let row ">{{row.name.first}}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="last">
              <mat-header-cell *matHeaderCellDef>Last</mat-header-cell>
              <mat-cell *matCellDef="let row ">{{row.name.last}}</mat-cell>
            </ng-container>
            <mat-header-row *matHeaderRowDef="['first','last']"></mat-header-row>
            <mat-row *matRowDef="let row; columns: ['first','last']"></mat-row>
          </mat-table>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button [routerLink]="['']" class="mat-stroked-button">Back to listing</button>
        </mat-card-actions> 
        </div> 
        
      </mat-card>
      
    </mat-grid-tile>
     <mat-grid-tile colspan="1" rowspan="1">
      <!--<mat-divider vertical style="height:100%;margin-left :0px; color: pink;"></mat-divider>-->
        <section>
          <div>
          <h3 style="font-family: Arial;">Profile Details</h3> 
             <table>
              <tr>
                <td style="font-weight: bold;font-size: medium;">Cellphone :</td>
                <td>{{this.selectedUserInterface[0].cellphone}}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;font-size: medium;">Email Address :</td>
                <td>{{this.selectedUserInterface[0].email}}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;font-size: medium;">Gender :</td>
                <td>{{this.selectedUserInterface[0].gender}}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;font-size: medium;">Country of Origin :</td>
                <td>{{this.selectedUserInterface[0].location.country}}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;font-size: medium;">State :</td>
                <td>{{this.selectedUserInterface[0].location.state}}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;font-size: medium;">Phone Number :</td>
                <td>{{this.selectedUserInterface[0].phone}}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;font-size: medium;">UUID :</td>
                <td>{{this.selectedUserInterface[0].uuid}}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;font-size: medium;">City :</td>
                <td>{{this.selectedUserInterface[0].location.city}}</td>
              </tr>
             </table>
          </div>
        </section>
      </mat-grid-tile>
      <mat-grid-tile colspan="2" rowspan="1">
      <div><span><mat-divider vertical style="height:100%;margin-left :auto; color: pink;"></mat-divider></span></div>
        <span>map!!!</span>
      </mat-grid-tile>
      </mat-grid-list>
    </section>
  `,
  styleUrl: './userdetail.component.scss'
})
export class UserdetailComponent 
{

  serviceReference : UserapireferenceService = inject(UserapireferenceService);
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  private selectedUUID : string = '';
  selectedUserInterface : Userinterface [] = [];

  constructor()
  {
    this.getSelectedUserWithUUID();
  }
  
  private getSelectedUserWithUUID()
  {
    this.selectedUUID = this.activatedRoute.snapshot.params['id']; 
    console.log(this.selectedUUID);
    this.serviceReference.getUserDetails(this.selectedUUID).subscribe(

      (response : any) =>
         {
            this.selectedUserInterface = response.results;
            console.log('Selected User Data :',this.selectedUserInterface);
          }

    );
}
}
