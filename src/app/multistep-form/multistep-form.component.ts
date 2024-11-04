import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MultistepFormService } from "../services/multistep-form.service";
import { PersonalInfoFormComponent } from "../personal-info-form/personal-info-form.component";
import { SelectPlanFormComponent } from "../select-plan-form/select-plan-form.component";
import { StepperComponent } from "../stepper/stepper.component";
import { AddonsFormComponent } from "../addons-form/addons-form.component";
import { SummaryFormComponent } from "../summary-form/summary-form.component";

@Component({
  selector: 'app-multistep-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MultistepFormComponent, StepperComponent],
  templateUrl: './multistep-form.component.html',
  styleUrl: './multistep-form.component.css'
})
export class MultistepFormComponent {

  constructor(public formService: MultistepFormService) {
    this.formService.setMultiStepDetails([
      { component: PersonalInfoFormComponent, stepDetail: { title: "STEP 1", desc: "YOUR INFO" } },
      { component: SelectPlanFormComponent, stepDetail: { title: "STEP 2", desc: "SELECT PLAN" } },
      { component: AddonsFormComponent, stepDetail: { title: "STEP 3", desc: "ADD-ONS" } },
      { component: SummaryFormComponent, stepDetail: { title: "STEP 4", desc: "SUMMARY" } },
    ]);
  }
}
