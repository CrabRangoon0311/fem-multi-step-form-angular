import { CommonModule } from "@angular/common";
import { Component, input } from '@angular/core';
import { FormNavBarComponent } from "../form-nav-bar/form-nav-bar.component";

@Component({
  selector: 'app-base-form',
  standalone: true,
  imports: [CommonModule, FormNavBarComponent],
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.css'
})
export class BaseFormComponent {
  title = input();
  description = input();
}
