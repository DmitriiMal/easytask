import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class AppComponent {}
