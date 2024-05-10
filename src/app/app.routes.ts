import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';

export const routes: Routes = [
    {path: '', component: UsersComponent, title: 'Users Page'},
    {title: 'User Details', component: UserdetailComponent, path: 'details/:id'}
];
