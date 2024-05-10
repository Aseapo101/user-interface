import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent 
{
  title = 'remote-user-api';
}
