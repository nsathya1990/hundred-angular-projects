import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.animation';

import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';

@Component({
  selector: 'app-others-documentation',
  templateUrl: './others-documentation.component.html',
  styleUrls: ['./others-documentation.component.scss'],
  animations: [fadeInOutAnimation],
})
export class OthersDocumentationComponent implements OnInit, IFormDirty {
  form: FormGroup;
  isInDOM = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  submit(): void {
    this.form.reset();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
}
