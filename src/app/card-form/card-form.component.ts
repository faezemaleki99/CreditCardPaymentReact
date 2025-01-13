import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  cardForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiryDate: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)])
  })


  constructor() { }

  submitForm() {
    console.log(this.cardForm.value)
  }
  onResetForm(){
    console.log(this.cardForm.reset())
  }
}
