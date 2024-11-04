import { Component } from '@angular/core';
import { MultistepFormComponent } from "./multistep-form/multistep-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MultistepFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
