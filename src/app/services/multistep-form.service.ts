import { computed, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Step } from "../../types";

export type MultiStepFormDetail = {
  component: any;
  stepDetail: Step;
}

@Injectable({
  providedIn: 'root'
})
export class MultistepFormService {
  private _formDetails: WritableSignal<MultiStepFormDetail[]> = signal([]);

  activeStepIndex: WritableSignal<number> = signal(0);
  formDetail = computed(() => this._formDetails()[this.activeStepIndex()]);

  stepDetails: Signal<Step[]> = computed(() => {
    return this._formDetails().map(fmd => fmd.stepDetail);
  });

  setMultiStepDetails(stepDetails: MultiStepFormDetail[]) {
    this._formDetails.set(stepDetails);
  }

  canMoveNext = computed(() => this.activeStepIndex() < this._formDetails().length - 1);
  canMovePrevious = computed(() => this.activeStepIndex() > 0);

  moveNext() {
    if (this.canMoveNext()) {
      this.activeStepIndex.update(i => ++i);
    }
  }

  movePrevious() {
    if (this.canMovePrevious()) {
      this.activeStepIndex.update(i => --i);
    }
  }
}