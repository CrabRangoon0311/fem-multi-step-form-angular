import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "../app.component";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { DataModelService } from "../services/data-model.service";

let fixture: ComponentFixture<AppComponent>;
let dataModelService: DataModelService;

beforeEach((done) => {
    TestBed.configureTestingModule({
        imports: [AppComponent]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        dataModelService = TestBed.inject(DataModelService);
        done();
    });
});

test("Can sign-up for plan and select add-ons", () => {
    const rootDebugElement = fixture.debugElement;
    fixture.detectChanges();

    // Personal info form next button disabled
    expect(getByTestId(rootDebugElement, "next-btn").nativeElement.disabled).toBeTruthy();

    // Fill out personal info form
    const nameInput = getByTestId(rootDebugElement, "name-input");
    const emailInput = getByTestId(rootDebugElement, "email-input");
    const phoneInput = getByTestId(rootDebugElement, "phone-input");
    nameInput.triggerEventHandler("input", { target: { value: "test name" } });
    emailInput.triggerEventHandler("input", { target: { value: "test@gmail.com" } });
    phoneInput.triggerEventHandler("input", { target: { value: "123" } });
    getByTestId(rootDebugElement, "next-btn").triggerEventHandler("click");
    fixture.detectChanges();

    // Select plan - use default selected
    getByTestId(rootDebugElement, "next-btn").triggerEventHandler("click");
    fixture.detectChanges();

    // Select add-ons
    const addons = rootDebugElement.queryAll((elem) => elem.attributes["type"] == "checkbox");
    expect(addons.length).toBeGreaterThan(0);
    for (let addon of addons) {
        addon.triggerEventHandler("change", { target: { checked: true } });
    }
    getByTestId(rootDebugElement, "next-btn").triggerEventHandler("click");
    fixture.detectChanges();

    // Summary
    expect(dataModelService.totalPlanCost).toBe(14);
    getByTestId(rootDebugElement, "confirm-btn").triggerEventHandler("click");
    fixture.detectChanges();

    // Confirmation screen
    expect(getByTestId(rootDebugElement, "confirm-message")).not.toBeNull();
});

function getByTestId(element: DebugElement, testId: string) {
    return element.query(By.css(`[data-testid='${testId}']`));
}