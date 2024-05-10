import { Component, Input , OnInit, inject} from '@angular/core';
import { Userinterface } from '../../../module/userinterface';
import { RouterLink,RouterOutlet} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {UserapireferenceService} from '../../../service/userapireference.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-userlisting',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatDividerModule, MatTableModule,MatCardModule],

  template: `
    <mat-card class="mat-card-container">
      <mat-card-header class="mat-card-header">
        <img mat-card-avatar src="{{user.pictureInfo.large}}" class="circular--image">
        <mat-card-title>{{user.name.first}} {{user.name.last}}</mat-card-title>
        <mat-card-subtitle>{{user.gender}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>{{user.name.first}} is a citizen in {{user.location.country}} and enjoys staying in the city {{user.location.city}}.
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button [routerLink]="['/details',user.uuid]" color="accent" class="mat-stroked-button">Learn more</button>
      </mat-card-actions>
    </mat-card>
     <mat-divider></mat-divider> 
      

  `,
  styleUrl: './userlisting.component.scss'
})
export class UserlistingComponent implements OnInit
{

  private remoteServiceHandle : UserapireferenceService = inject(UserapireferenceService);

  displayedColumns: string[] = ['nationality', 'cellphone','email'];
  @Input() user !: Userinterface;
   users : Userinterface [] = [];


  ngOnInit(): void {
    this.remoteServiceHandle.getAllUsers('15').subscribe(
      (returnedUsers : any) => {
        
        this.users = returnedUsers.results;
          
      } 
    );
  }

}
