import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss'],
})
export class FlexComponent implements OnInit {
  contentFormGroup!: FormGroup;
  disableForm = true;
  bgColor: any;
  styleObject = {
    redClass: true,
    blueClass: true,
    greenyellowClass: true,
    bluevioletClass: true,
    greenClass: true,
    aquaClass: true,
    beigeClass: true,
    burlywoodClass: true,
    cadetblueClass: true,
    cornflowerblueClass: true,
    darkslategrayClass: true,
  };
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.contentFormGroup = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    debugger;
    this.router.navigate(['main']);
  }

  resetForm() {
    this.contentFormGroup.reset();
  }
  getRedClass() {
    this.bgColor = 'redClass';
  }
  getBlueClass() {
    this.bgColor = 'blueClass';
  }
  getGreenyellowClass() {
    this.bgColor = 'greenyellowClass';
  }
  getBluevioletClass() {
    this.bgColor = 'bluevioletClass';
  }

  getGreenClass() {
    this.bgColor = 'greenClass';
  }
  getAquaClass() {
    this.bgColor = 'aquaClass';
  }
  getBeigeClass() {
    this.bgColor = 'beigeClass';
  }
  getBurlywoodClass() {
    this.bgColor = 'burlywoodClass';
  }
  getCadetblueClass() {
    this.bgColor = 'cadetblueClass';
  }
  getCornflowerblueClass() {
    this.bgColor = 'cornflowerblueClass';
  }
  getDarkslategrayClass() {
    this.bgColor = 'darkslategrayClass';
  }
}
