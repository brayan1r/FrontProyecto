import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="feedback-form">
      <h2>Formulario de Feedback</h2>
      <form [formGroup]="feedbackForm" (ngSubmit)="onSubmit()" class="form">
        <div class="form-group">
          <label for="name">Nombre *</label>
          <input 
            id="name"
            type="text"
            formControlName="name"
            [class.is-invalid]="isFieldInvalid('name')"
          >
          <div class="error-message" *ngIf="isFieldInvalid('name')">
            {{ getErrorMessage('name') }}
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input 
            id="email"
            type="email"
            formControlName="email"
            [class.is-invalid]="isFieldInvalid('email')"
          >
          <div class="error-message" *ngIf="isFieldInvalid('email')">
            {{ getErrorMessage('email') }}
          </div>
        </div>

        <div class="form-group">
          <label for="rating">Calificación *</label>
          <select 
            id="rating"
            formControlName="rating"
            [class.is-invalid]="isFieldInvalid('rating')"
          >
            <option value="">Selecciona una calificación</option>
            <option value="5">Excelente</option>
            <option value="4">Muy Bueno</option>
            <option value="3">Bueno</option>
            <option value="2">Regular</option>
            <option value="1">Malo</option>
          </select>
          <div class="error-message" *ngIf="isFieldInvalid('rating')">
            {{ getErrorMessage('rating') }}
          </div>
        </div>

        <div class="form-group">
          <label for="comments">Comentarios *</label>
          <textarea 
            id="comments"
            formControlName="comments"
            [class.is-invalid]="isFieldInvalid('comments')"
            rows="4"
          ></textarea>
          <div class="error-message" *ngIf="isFieldInvalid('comments')">
            {{ getErrorMessage('comments') }}
          </div>
        </div>

        <button type="submit" [disabled]="feedbackForm.invalid">Enviar Feedback</button>
      </form>
    </div>
  `,
  styles: [`
    .feedback-form {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h2 {
      color: #2E7D32;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 500;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #2E7D32;
        box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.1);
      }

      &.is-invalid {
        border-color: #dc3545;
      }
    }

    .error-message {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    button {
      width: 100%;
      padding: 1rem;
      background-color: #2E7D32;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover:not(:disabled) {
        background-color: #1B5E20;
      }

      &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
      }
    }
  `]
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      rating: ['', Validators.required],
      comments: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Feedback Data:', this.feedbackForm.value);
      // Aquí iría la lógica para enviar el formulario
    } else {
      this.markFormGroupTouched(this.feedbackForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.feedbackForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.feedbackForm.get(fieldName);
    
    if (!control) return '';
    
    if (control.hasError('required')) {
      return 'Este campo es requerido';
    }
    
    if (control.hasError('email')) {
      return 'Por favor, introduce un email válido';
    }
    
    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    
    return '';
  }
}