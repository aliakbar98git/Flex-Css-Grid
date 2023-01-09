import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  public sidebar: boolean = true;
  bgColor: any;
  contentFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  buildForm() {
    this.contentFormGroup = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }

  onSubmit() {
    debugger;
    this.router.navigate(['/grid']);
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
