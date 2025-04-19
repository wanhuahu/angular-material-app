import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AngularMaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-account',
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  public formGroup!: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[^@\\s]+@[^\\s@]+.[^\\s@]+$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public login(): void {
    const email = this.formGroup.controls['email'].value;
    const password = this.formGroup.controls['password'].value;
  }
}
