import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, UntypedFormControl, FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FieldErrorsComponent } from './field-errors.component';

describe('FieldErrorsComponent', () => {
    let component: FieldErrorsComponent;
    let fixture: ComponentFixture<FieldErrorsComponent>;
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const getErrorElement = () => fixture.debugElement.query(By.css('.field-error'));
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const getAllErrors = () => fixture.debugElement.queryAll(By.css('.field-error'));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [FieldErrorsComponent],
            providers: [
                NgForm,
                {
                    provide: ControlContainer,
                    useClass: NgForm,
                },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldErrorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(getErrorElement()).toBeNull();
    });

    it('should render if field is required and dirty', () => {
        const control = new UntypedFormControl();
        control.setErrors({ required: 'Value is required' });
        control.markAsDirty();
        component.field = control;

        fixture.detectChanges();

        expect(getErrorElement()).not.toBeNull();
        expect((getErrorElement().nativeElement as HTMLElement).textContent).toBe('Value required.');
        expect(getAllErrors().length).toBe(1);
    });

    it('should render if field is required and validate untouched', () => {
        const control = new UntypedFormControl();
        control.setErrors({ required: 'Value is required' });
        component.field = control;
        component.validateUntouched = true;

        fixture.detectChanges();

        expect(getErrorElement()).not.toBeNull();
        expect((getErrorElement().nativeElement as HTMLElement).textContent).toBe('Value required.');
        expect(getAllErrors().length).toBe(1);
    });

    it('should render if field is invalid and dirty', () => {
        const control = new UntypedFormControl();
        control.setErrors({ pattern: 'Pattern not met' });
        control.markAsDirty();
        component.field = control;

        fixture.detectChanges();

        expect(getErrorElement()).not.toBeNull();
        expect((getErrorElement().nativeElement as HTMLElement).textContent).toBe('Invalid value.');
        expect(getAllErrors().length).toBe(1);
    });

    it('should render if field is invalid and validate untouched', () => {
        const control = new UntypedFormControl();
        control.setErrors({ pattern: 'Pattern not met' });
        component.field = control;
        component.validateUntouched = true;

        fixture.detectChanges();

        expect(getErrorElement()).not.toBeNull();
        expect((getErrorElement().nativeElement as HTMLElement).textContent).toBe('Invalid value.');
        expect(getAllErrors().length).toBe(1);
    });

    it('should not render if field is untouched', () => {
        const control = new UntypedFormControl();
        control.setErrors({ randomError: 'value' });
        component.field = control;

        fixture.detectChanges();

        expect(getErrorElement()).toBeNull();
    });

    it('should render if field is required and form is submitted', () => {
        const control = new UntypedFormControl();
        control.setErrors({ required: 'value is required' });
        component.form.onSubmit({} as Event);
        component.field = control;

        fixture.detectChanges();

        expect(getErrorElement()).not.toBeNull();
        expect((getErrorElement().nativeElement as HTMLElement).textContent).toBe('Value required.');
        expect(getAllErrors().length).toBe(1);
    });

    it('should render if field is invalid and form is submitted', () => {
        const control = new UntypedFormControl();
        control.setErrors({ pattern: 'Pattern not met' });
        component.form.onSubmit({} as Event);
        component.field = control;

        fixture.detectChanges();

        expect(getErrorElement()).not.toBeNull();
        expect((getErrorElement().nativeElement as HTMLElement).textContent).toBe('Invalid value.');
        expect(getAllErrors().length).toBe(1);
    });

    it('should not render if form is not submitted', () => {
        const control = new UntypedFormControl();
        control.setErrors({ required: 'Value is required' });
        component.field = control;

        fixture.detectChanges();

        expect(getErrorElement()).toBeNull();
    });

    it('should render maxlength error and form is submitted', () => {
        const control = new UntypedFormControl();
        control.setErrors({ maxlength: { requiredLength: 10 } });
        component.form.onSubmit({} as Event);
        component.field = control;

        fixture.detectChanges();

        expect(getErrorElement()).not.toBeNull();
        expect((getErrorElement().nativeElement as HTMLElement).textContent).toBe('Max allowed characters is 10.');
        expect(getAllErrors().length).toBe(1);
    });

    it('should render maxlength error and validate untouched', () => {
        const control = new UntypedFormControl();
        control.setErrors({ maxlength: { requiredLength: 10 } });
        component.field = control;
        component.validateUntouched = true;

        fixture.detectChanges();

        expect(getErrorElement()).not.toBeNull();
        expect((getErrorElement().nativeElement as HTMLElement).textContent).toBe('Max allowed characters is 10.');
        expect(getAllErrors().length).toBe(1);
    });

    it('should not render maxlength error if form is not submitted', () => {
        const control = new UntypedFormControl();
        control.setErrors({ maxlength: { requiredLength: 10 } });
        component.field = control;

        fixture.detectChanges();

        expect(getErrorElement()).toBeNull();
    });
});
