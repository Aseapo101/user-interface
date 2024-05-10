import { Component, OnInit, inject } from '@angular/core';
import {UserapireferenceService} from '../../service/userapireference.service';
import {Userinterface} from '../../module/userinterface';
import { UserlistingComponent } from '../listing/userlisting/userlisting.component';
import { CommonModule} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserlistingComponent,CommonModule,MatToolbarModule,ToolbarComponent],
  template: `
    <article>
    <app-toolbar></app-toolbar>
      <section>
      <app-userlisting *ngFor="let user of userList" [user]="user"></app-userlisting>
      </section>
</article>
  `,
  styleUrl: './users.component.scss',
  providers: [UserapireferenceService]
})

export class UsersComponent implements OnInit
{

   private remoteServiceHandle : UserapireferenceService = inject(UserapireferenceService);
   userList : Userinterface [] = [];
  
  ngOnInit(): void 
  {
    
    this.remoteServiceHandle.getAllUsers('15').subscribe(
      (returnedUsers : any) => {
        
        this.userList = returnedUsers.results;
          console.log(this.userList);
      } 
    );
  }

}
