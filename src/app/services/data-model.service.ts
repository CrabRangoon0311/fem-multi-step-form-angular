import { Injectable, signal, WritableSignal } from '@angular/core';
import { DataModel, PlanAddon, planAddons, planTypes } from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataModelService {

  private _dataModel: WritableSignal<DataModel> = signal({
    name: "",
    email: "",
    phoneNumber: "",
    planType: 1,
    planInterval: "Monthly",
    addons: [],
  });

  dataModel = this._dataModel.asReadonly();

  get selectedPlan() {
    return planTypes.find(p => p.id === this._dataModel().planType);
  }

  get selectedAddons() {
    if (this._dataModel().addons.length === 0)
      return [];

    return planAddons.filter(pa => this._dataModel().addons.includes(pa.id));
  }

  get totalPlanCost() {
    let totalCost = 0;
    if (this.selectedPlan == null)
      return totalCost;

    totalCost = this.selectedPlan.cost[this._dataModel().planInterval];
    if (this.selectedAddons.length > 0) {
      totalCost = this.selectedAddons.reduce((total, addon) => {
        return total += addon.cost[this._dataModel().planInterval];
      }, totalCost);
    }

    return totalCost;
  }

  updateModel(model: Partial<Omit<DataModel, "addons">>) {
    this._dataModel.update(dm => {
      return { ...dm, ...model };
    });
  }

  includeAddon(addOn: PlanAddon["id"]) {
    if (!this._dataModel().addons.includes(addOn))
      this._dataModel.update(dm => {
        return {
          ...dm,
          addons: [...dm.addons, addOn],
        };
      });
  }

  removeAddon(addOn: PlanAddon["id"]) {
    if (this._dataModel().addons.includes(addOn))
      this._dataModel.update(dm => {
        return {
          ...dm,
          addons: dm.addons.filter(a => a !== addOn),
        };
      });
  }
}