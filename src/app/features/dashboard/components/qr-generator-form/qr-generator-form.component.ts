import { Component, OnInit, signal } from '@angular/core';
import { BaseComponent } from '../../../../core/common/base-component.directive';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { QrCodeService } from '../../../../core/services/qr-code.service';
import { defer, takeUntil, tap } from 'rxjs';
import { SocketService } from '../../../../core/services/socket.service';

@Component({
  selector: 'app-qr-generator-form',
  templateUrl: './qr-generator-form.component.html',
  styleUrl: './qr-generator-form.component.scss',
})
export class QrGeneratorFormComponent extends BaseComponent {
  form: FormGroup;
  isGenerating = signal<boolean>(false);
  isSuccess = signal<boolean | undefined>(undefined);
  isError = signal<boolean | undefined>(undefined);

  constructor(
    private fb: FormBuilder,
    private qrSvc: QrCodeService,
    private socketSvc: SocketService
  ) {
    super();

    this.form = this.fb.group({
      start: [0, Validators.required],
      end: [0, Validators.required],
    });
  }


  get isSuccessMessage() {
    return this.isSuccess();
  }
  get isErrorMessage() {
    return this.isError();
  }

  get start() {
    return this.form.get('start') as FormControl;
  }

  get end() {
    return this.form.get('end') as FormControl;
  }

  onSubmit() {
    defer(() => {
      this.isGenerating.set(true);
      return this.qrSvc.generateQrCode(this.start.value, this.end.value);
    })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: () => {
          this.isSuccess.set(true);
        },
        error: (err) => {
          console.log(err);
          this.isGenerating.set(false);
          this.isError.set(true);
          setTimeout(() => {
            this.isSuccess.set(undefined);
            this.isError.set(undefined);
          }, 5000);
        },
        complete: () => {
          this.isGenerating.set(false);
          this.form.reset();
          setTimeout(() => {
            this.isSuccess.set(undefined);
            this.isError.set(undefined);
          }, 5000);
        },
      });
  }
}
