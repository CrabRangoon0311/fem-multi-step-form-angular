import { Component, input } from '@angular/core';
import { Step } from "../../types";

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  steps = input.required<Step[]>();
  activeStepIndex = input.required<number>();
}
