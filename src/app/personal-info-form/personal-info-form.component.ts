import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { MultistepFormService } from "../services/multistep-form.service";
import { FormNavBarComponent } from "../form-nav-bar/form-nav-bar.component";
import { BaseFormComponent } from "../base-form/base-form.component";
import { CommonModule } from "@angular/common";
import { DataModelService } from "../services/data-model.service";

@Component({
  selector: 'app-personal-info-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FormNavBarComponent, BaseFormComponent],
  templateUrl: './personal-info-form.component.html',
  styleUrl: './personal-info-form.component.css'
})
export class PersonalInfoFormComponent {
  constructor(private _formService: MultistepFormService, public modelService: DataModelService) {
    this.formModel = this.modelService.dataModel;
  }

  readonly formModel: typeof this.modelService.dataModel;

  @ViewChild("infoForm")
  infoForm!: NgForm;

  moveNext(): void {
    if (this.infoForm.invalid) {
      Object.keys(this.infoForm.form.controls).forEach(k => this.infoForm.controls[k].markAsTouched());
      return;
    }

    this._formService.moveNext();
  }
}
