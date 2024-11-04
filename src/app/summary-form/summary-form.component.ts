import { Component, inject, OnInit } from '@angular/core';
import { DataModelService } from "../services/data-model.service";
import { MultistepFormService } from "../services/multistep-form.service";
import { FormNavBarComponent } from "../form-nav-bar/form-nav-bar.component";
import { BaseFormComponent } from "../base-form/base-form.component";
import { PlanAddon, PlanType } from "../models";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-summary-form',
  standalone: true,
  imports: [FormNavBarComponent, BaseFormComponent, CommonModule],
  templateUrl: './summary-form.component.html',
  styleUrl: './summary-form.component.css'
})
export class SummaryFormComponent implements OnInit {
  readonly dataModelService = inject(DataModelService);
  readonly formService = inject(MultistepFormService);
  selectedPlan: PlanType | undefined;
  selectedAddons: PlanAddon[] = [];
  totalCost: number = 0;
  isSubscriptionConfirmed = false;
  formTitle: string = "Finishing up";
  formDesc: string = "Double-check everything looks OK before confirming.";

  ngOnInit() {
    this.selectedPlan = this.dataModelService.selectedPlan;
    this.selectedAddons = this.dataModelService.selectedAddons;
    this.totalCost = this.dataModelService.totalPlanCost;
  }

  changePlanClicked() {
    // Navigate to select plan form
    const selectPlanFormIndex = 1;
    this.formService.activeStepIndex.set(selectPlanFormIndex);
  }

  confirmClicked() {
    this.isSubscriptionConfirmed = true;
    this.formTitle = "";
    this.formDesc = "";
  }
}
