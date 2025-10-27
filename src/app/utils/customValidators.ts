import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const rangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const from = control.get('rangeFrom')?.value;
  const to = control.get('rangeTo')?.value;

  if (from !== null && to !== null && to <= from) {
    return { rangeInvalid: true }; // ❌ to is not greater than from
  }
  return null; // ✅ valid
};