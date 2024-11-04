import { Component, inject } from '@angular/core';
import { BaseFormComponent } from "../base-form/base-form.component";
import { FormNavBarComponent } from "../form-nav-bar/form-nav-bar.component";
import { planAddons } from "../models";
import { DataModelService } from "../services/data-model.service";
import { MultistepFormService } from "../services/multistep-form.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-addons-form',
  standalone: true,
  imports: [BaseFormComponent, CommonModule, FormNavBarComponent],
  templateUrl: './addons-form.component.html',
  styleUrl: './addons-form.component.css'
})
export class AddonsFormComponent {
  readonly dataModelService = inject(DataModelService);
  readonly formService = inject(MultistepFormService);
  readonly addons = planAddons;

  onAddonChanged(id: number, isSelected: boolean) {
    if (isSelected)
      this.dataModelService.includeAddon(id);
    else
      this.dataModelService.removeAddon(id);
  }
}
