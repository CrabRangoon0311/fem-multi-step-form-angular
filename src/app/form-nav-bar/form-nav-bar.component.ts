import { Component, inject, Input } from '@angular/core';
import { MultistepFormService } from "../services/multistep-form.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-form-nav-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-nav-bar.component.html',
  styleUrl: './form-nav-bar.component.css'
})
export class FormNavBarComponent {
  constructor() {
    this.canMoveNext = this.formService.canMoveNext;
    this.moveNext = this.formService.moveNext;
  }

  public formService = inject(MultistepFormService);

  @Input()
  canMoveNext: () => boolean;

  @Input()
  moveNext: () => void;
}
