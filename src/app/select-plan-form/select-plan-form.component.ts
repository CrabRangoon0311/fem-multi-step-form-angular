import { Component, inject } from '@angular/core';
import { MultistepFormService } from "../services/multistep-form.service";
import { FormNavBarComponent } from "../form-nav-bar/form-nav-bar.component";
import { BaseFormComponent } from "../base-form/base-form.component";
import { planTypes } from "../models";
import { DataModelService } from "../services/data-model.service";
import { ToggleSwitchComponent } from "../toggle-switch/toggle-switch.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule, FormsModule, FormNavBarComponent, BaseFormComponent, ToggleSwitchComponent],
  templateUrl: './select-plan-form.component.html',
  styleUrl: './select-plan-form.component.css'
})
export class SelectPlanFormComponent {
  readonly dataModelService = inject(DataModelService);
  readonly formService = inject(MultistepFormService);
  readonly planTypes = planTypes;
}
