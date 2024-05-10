import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule],
  template: `
     <mat-toolbar color="accent"> 
  <mat-toolbar-row> 
    <span class="toolbar-title">Remote User API Data</span> 
  </mat-toolbar-row> 
</mat-toolbar> <br>
  `,
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
