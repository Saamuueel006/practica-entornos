import { Component } from '@angular/core';
import { EntornoComponent } from './entorno/entorno';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EntornoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }